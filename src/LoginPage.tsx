import React, { useState } from "react";
import styles from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    if (username === "user" && password === "password") return setSuccess(true);
    setError(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login Page</h1>

      {error && <div className={styles.error}>Invalid username or password</div>}
      {success && <div className={styles.success}>Welcome, user!</div>}

      {!success && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              id="username"
              type="text"
              className={styles.input}
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
                setSuccess(false);
              }}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
                setSuccess(false);
              }}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
