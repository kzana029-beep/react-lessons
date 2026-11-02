import React, { useState } from "react";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    // First Name
    if (firstName.trim() === "") {
      setError("First Name is required");
      return;
    }

    if (firstName.length < 2) {
      setError("First Name must have at least 2 characters");
      return;
    }

    if (/\s/.test(firstName)) {
      setError("First Name cannot contain spaces");
      return;
    }

    // Last Name
    if (lastName.trim() === "") {
      setError("Last Name is required");
      return;
    }

    if (lastName.length < 2) {
      setError("Last Name must have at least 2 characters");
      return;
    }

    if (/\s/.test(lastName)) {
      setError("Last Name cannot contain spaces");
      return;
    }

    // Email
    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    // Password
    if (password.length <= 6) {
      setError("Password must have more than 6 characters");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    // Terms and Conditions
    if (!accepted) {
      setError("You must accept the Terms and Conditions");
      return;
    }

    setSuccess("Form submitted successfully!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="accept">Accept Terms</label>
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
        </div>

        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{success}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;