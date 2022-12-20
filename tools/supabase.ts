import { createClient } from "@supabase/supabase-js";
import { Database } from "../lib/database.types";
// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export { supabase };
