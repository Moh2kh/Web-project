export default function LoginPage() {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
