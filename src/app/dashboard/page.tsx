import { createSupabaseServerClient } from '@/lib/supabaseServer';
import LogoutButton from '@/components/LogoutButton';

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // Redirect to login or show a message
    return (
      <main>
        <p>You must be logged in to view this page.</p>
        <a href="/login">Go to Login</a>
      </main>
    );
  }

  const user = session.user;

  // Fetch user profile data
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    return (
      <main>
        <p>Error fetching profile: {error.message}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Welcome, {profile?.full_name || user.email}</h1>
      <p>Your role: {profile?.role ?? 'Not specified'}</p>
      <LogoutButton />
    </main>
  );
}
