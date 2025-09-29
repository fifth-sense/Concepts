import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup.string().required("Role selection is required"),
  experience: yup
    .number()
    .min(1, "Minimum 1 year experience required")
    .nullable()
    .transform((_, val) => (val === "" ? null : Number(val))),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validation triggers on blur
  });

  const role = watch("role"); // Watching role to conditionally render

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      {/* Name Field */}
      <div>
        <label>Name:</label>
        <input {...register("name")} />
        <p className="error">{errors.name?.message}</p>
      </div>

      {/* Email Field */}
      <div>
        <label>Email:</label>
        <input type="email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>
      </div>

      {/* Role Dropdown */}
      <div>
        <label>Role:</label>
        <select {...register("role")}>
          <option value="">Select a role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
        <p className="error">{errors.role?.message}</p>
      </div>

      {/* Conditionally Rendered Experience Field */}
      {role === "developer" && (
        <div>
          <label>Years of Experience:</label>
          <input type="number" {...register("experience")} />
          <p className="error">{errors.experience?.message}</p>
        </div>
      )}

      {/* Checkbox */}
      <div>
        <label>
          <input type="checkbox" {...register("terms")} /> Accept Terms &
          Conditions
        </label>
        <p className="error">{errors.terms?.message}</p>
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default App;
