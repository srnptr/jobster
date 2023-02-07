import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  DashboardPage,
  ErrorPage,
  LandingPage,
  ProtectedRoute,
  RegisterPage,
} from "./pages";
import { Profile, Stats, AddJob, AllJobs } from "./components";

const App = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Stats /> },
            { path: "add-job", element: <AddJob /> },
            { path: "all-jobs", element: <AllJobs /> },
            { path: "profile", element: <Profile /> },
          ],
        },
        { path: "landing", element: <LandingPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2500} position="top-center" theme="colored" />
    </>
  );
};

export default App;
