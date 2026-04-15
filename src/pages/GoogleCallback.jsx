import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export default function GoogleCallback() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Connecting your Google Business Profile...');

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (!code) {
        setStatus('Something went wrong. No authorization code found.');
        return;
      }

      try {
        const response = await fetch(`/api/google-callback?code=${code}`, {
          headers: { 'Accept': 'application/json' }
        });

        const text = await response.text();
        console.log('API response:', text);
        const tokens = JSON.parse(text);

        if (tokens.error) {
          setStatus('Something went wrong: ' + tokens.error_description);
          return;
        }

        const { data: { user } } = await supabase.auth.getUser();

        await supabase.from('google_tokens').upsert({
          user_id: user.id,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expires_at: new Date(Date.now() + tokens.expires_in * 1000).toISOString(),
        }, { onConflict: 'user_id' });

        setStatus('✅ Google Business Profile connected!');
        setTimeout(() => navigate('/dashboard'), 2000);
      } catch (err) {
        console.error(err);
        setStatus('Something went wrong. Please try again.');
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1a12]">
      <p className="text-lg text-white">{status}</p>
    </div>
  );
}