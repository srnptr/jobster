import React, { useEffect, useState } from "react";
import { Logo, FormRow } from "../layouts";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const loginTestUser = () => {
    dispatch(
      loginUser({
        email: "testUser@test.com",
        password: "secret",
      })
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Logo />
      <h3> {values.isMember ? "Login" : "Register"}</h3>
      {!values.isMember && (
        <FormRow
          name="name"
          labelText="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
        />
      )}
      <FormRow
        name="email"
        labelText="email"
        type="email"
        handleChange={handleChange}
        value={values.email}
      />
      <FormRow
        name="password"
        labelText="password"
        type="password"
        handleChange={handleChange}
        value={values.password}
      />
      <button className="btn btn-block" type="submit" disabled={isLoading}>
        {isLoading ? "loading..." : "submit"}
      </button>
      <button
        className="btn btn-block btn-hipster"
        type="button"
        disabled={isLoading}
        onClick={loginTestUser}
      >
        demo app
      </button>
      <p>
        {values.isMember ? "Not a member yet?" : "Already a member?"}
        <button className="member-btn" type="button" onClick={toggleMember}>
          {values.isMember ? "Register" : "Login"}
        </button>
      </p>
    </form>
  );
};

export default Register;
