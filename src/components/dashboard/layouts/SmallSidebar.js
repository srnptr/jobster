import React from "react";
import Wrapper from "../../../assets/styled-wrappers/SmallSidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../features/user/userSlice";
import { FaTimes } from "react-icons/fa";
import { Logo, NavLinks } from "../../../layouts";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={() => dispatch(toggleSidebar())} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
