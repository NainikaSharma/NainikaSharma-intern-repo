import React, { useState } from 'react';
import { loginUser } from './api/auth';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = await loginUser(email, password);
      console.log('Login Response:', data);

      setSuccess(t('login_success'));
    } catch (err) {
      console.error(err);
      setError(t('login_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>{t('login')}</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>{t('email')}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>{t('password')}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <button onClick={handleLogin} disabled={loading}>
        {loading ? t('loading') : t('login')}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}

export default Login;
