import { useState } from "react";

function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 6)
      newErrors.password = "Min 6 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted ✅");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
export default FormValidation;