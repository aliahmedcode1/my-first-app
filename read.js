// read.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .select('*')

if (error) {
  console.error('Read failed:', error.message)
} else {
  console.log('All notes:', data)
}

const { data } = await supabase
  .from('notes')
  .select('id, title, is_done')