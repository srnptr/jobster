import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../../assets/styled-wrappers/DashboardFormPage";
import { updateUser } from "../../../features/user/userSlice";
import { FormRow } from "../../../layouts";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const { name, lastName, email, location } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all fields.");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            name="name"
            type="text"
            value={name}
            handleChange={handleChange}
          />
          <FormRow
            name="lastName"
            labelText="last name"
            type="text"
            value={lastName}
            handleChange={handleChange}
          />
          <FormRow
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
          />
          <FormRow
            name="location"
            type="text"
            value={location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {!isLoading ? "save changes" : "loading..."}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
