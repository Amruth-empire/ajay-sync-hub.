import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Example API route for fetching projects
export async function GET() {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Example: Fetch projects from database
  // const { data: projects, error } = await supabase
  //   .from('projects')
  //   .select('*')

  // For now, return mock data
  return NextResponse.json({ 
    projects: [],
    message: 'Connect your database and uncomment the query above' 
  })
}

// Example API route for creating a project
export async function POST(request: Request) {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()

  // Example: Insert project into database
  // const { data, error } = await supabase
  //   .from('projects')
  //   .insert([{ ...body, user_id: user.id }])
  //   .select()

  return NextResponse.json({ 
    success: true,
    message: 'Connect your database and uncomment the query above',
    receivedData: body
  })
}
