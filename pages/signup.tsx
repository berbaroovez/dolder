import { useEffect } from "react";
import LoginForm from "../components/Shared/LoginForm";
import { useAuth } from "../tools/useAuth";

const SignUp = () => {
  const { user } = useAuth();
  useEffect(() => {
    //if user is logged in then redirect to dashboard
    if (user) {
      window.location.href = "/dashboard";
    }
  }, [user]);
  return (
    // center this div

    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  );
};

export default SignUp;
