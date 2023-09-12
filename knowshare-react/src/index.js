import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppLayout } from "./components/layout";
import Profile from "./Profile";
import CreatorDashboard from "./CreatorDashboard";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <CreatorDashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLayout>
      <RouterProvider router={router} />

      {/* <div>
        <Route path="/" exact>
          <EarningsHistory earnings={initialEarnings} />
          <PayoutMethods
            payoutMethods={payoutMethods}
            onPayoutMethodAdd={addPayoutMethod}
          />
          <VideoPlayer videoUrl={videoUrl} />
        </Route>
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={CreatorDashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div> */}
    </AppLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
