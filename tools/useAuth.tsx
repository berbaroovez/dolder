import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";
import { AuthChangeEvent, User } from "@supabase/supabase-js";
export interface AuthContextData {
  user: User | null;
  signIn: (email: string) => Promise<void>;
  signOut: () => void;
}

const authContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      if (data.user) {
        setUser(user);
      }
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const getSessionInfo = async () => {
      // get session data if there is an active session
      const { data, error } = await supabase.auth.getSession();

      setUser(data.session?.user ?? null);
      // setLoading(false);
    };

    getSessionInfo();
    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        // setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return { signIn, signOut, user };
};
