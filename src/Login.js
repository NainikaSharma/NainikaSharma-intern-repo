import React, { useState } from 'react';
import { loginUser } from './api/auth';
import { useTranslation } from 'react-i18next';
export default function Login() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const apiConfigured = Boolean(process.env.REACT_APP_REQRES_API_KEY);
  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    if (!apiConfigured) {
      setError(
        'ReqRes API key is missing. Follow the README configuration steps, then restart the app.'
      );
      return;
    }
    setLoading(true);
    try {
      await loginUser(email, password);
      setSuccess('login_success');
    } catch (err) {
      setError(
        err.response
          ? `ReqRes returned HTTP ${err.response.status}. Check the API key and demo credentials.`
          : 'Could not reach ReqRes. Check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="form-card" onSubmit={handleLogin}>
      <div className="language-row">
        <label htmlFor="login-language">Form language</label>
        <select
          id="login-language"
          value={i18n.resolvedLanguage || 'en'}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <h2>{t('login')}</h2>
      <p className="api-notice">
        ReqRes demo credentials are prefilled.{' '}
        {apiConfigured
          ? 'An API key is configured.'
          : 'Add a demo API key using the README before sending a request.'}{' '}
        The exercises are available without logging in.
      </p>
      <div className="form-group">
        <label htmlFor="login-email">{t('email')}</label>
        <input
          id="login-email"
          type="email"
          autoComplete="username"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">{t('password')}</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? t('loading') : t('login')}
      </button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
      {success && (
        <p className="success" role="status">
          {t(success)}
        </p>
      )}
    </form>
  );
}
