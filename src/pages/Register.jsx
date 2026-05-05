export default function Register() {
  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>

      <form className="form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
