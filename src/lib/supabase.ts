import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcdkomqaxsrylywjhypz.supabase.co'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZGtvbXFheHNyeWx5d2poeXB6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzM1MzMxNSwiZXhwIjoyMDQyOTI5MzE1fQ._YMJzLwHQptY26AQJaMpFXmYIJovMkEUHKitXPLrPNM'
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);