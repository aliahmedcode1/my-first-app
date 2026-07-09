// insert.js
import { supabase } from './supabaseClient.js'

const { data, error } = await supabase
  .from('notes')
  .insert({ title: 'Learn Supabase', content: 'Follow the beginner guide' })
  .select()

if (error) {
  console.error('Insert failed:', error.message)
} else {
  console.log('Inserted:', data)
}



