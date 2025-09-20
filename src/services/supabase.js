import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hwhnofnrffotrfowylmy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3aG5vZm5yZmZvdHJmb3d5bG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzA4OTEsImV4cCI6MjA2NTkwNjg5MX0.g0ZNWyQFQz1RksbtnR6xdSAW0SYOA46pq32-VKrrP00";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
