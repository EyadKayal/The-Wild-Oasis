import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kgzfvdhsfcavtmlxkpgk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnemZ2ZGhzZmNhdnRtbHhrcGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3Mjc3MjcsImV4cCI6MjAxNjMwMzcyN30.Gsf_rSfU0pw7OfJYdCk_anSGcofA288u7czLhp1xzpo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
