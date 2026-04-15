export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: process.env.VITE_GOOGLE_CLIENT_ID,
      client_secret: process.env.VITE_GOOGLE_CLIENT_SECRET,
      redirect_uri: `${req.headers.origin}/auth/google/callback`,
      grant_type: 'authorization_code',
    }),
  });

  const tokens = await response.json();
  res.status(200).json(tokens);
}