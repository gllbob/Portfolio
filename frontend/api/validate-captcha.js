export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return res.status(400).json({ message: 'Token não fornecido' });
  }

  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const response = await fetch(verifyUrl, { method: 'POST' });
    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ message: 'Captcha validado com sucesso!' });
    } else {
      return res.status(400).json({ message: 'Falha na verificação do robô.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}