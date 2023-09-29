import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import React Router
import EarningsHistory from "./EarningsHistory"; // Import your EarningsHistory component
import PayoutMethods from "./PayoutMethods"; // Import your PayoutMethods component
import VideoPlayer from "./VideoPlayer"; // Import the VideoPlayer component
import Profile from "./Profile"; // Import the Profile component
import CreatorDashboard from "./CreatorDashboard"; // Import the CreatorDashboard component
import Login from "./Login"; // Import the Login component
import Signup from "./Signup"; // Import the Signup component
import logo from "./logo.svg";
import "./App.css";
import { AppLayout } from "./components/layout";

function App() {
  // Define data (e.g., sample earnings and payout methods) and functions
  const initialEarnings = [
    { id: 1, amount: 100, date: "2023-08-15" },
    { id: 2, amount: 150, date: "2023-08-20" },
  ];

  const [payoutMethods, setPayoutMethods] = useState([
    { method: "PayPal", email: "user@example.com" },
  ]);

  const addPayoutMethod = (newMethod) => {
    // Update the payout methods state with the new method
    setPayoutMethods([...payoutMethods, newMethod]);
  };

  // Define the URL of the video you want to display
  const videoUrl = "https://example.com/your-video.mp4"; // Replace with your actual video URL

  return (
    // <Router>
    //   {" "}
    //   {/* Wrap your app with Router */}
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       {/* Add navigation links */}
    //       {/* <nav>
    //         <ul>
    //           <li><Link to="/">Home</Link></li>
    //           <li><Link to="/profile">Profile</Link></li>
    //           <li><Link to="/dashboard">Dashboard</Link></li>
    //           <li><Link to="/login">Login</Link></li>
    //           <li><Link to="/signup">Signup</Link></li>
    //         </ul>
    //       </nav> */}

    //       {/* Define routes for your components */}
    //       {/* <Switch>
    //         <Route path="/" exact>
    //           <EarningsHistory earnings={initialEarnings} />
    //           <PayoutMethods
    //             payoutMethods={payoutMethods}
    //             onPayoutMethodAdd={addPayoutMethod}
    //           />
    //           <VideoPlayer videoUrl={videoUrl} />
    //         </Route>
    //         <Route path="/profile" component={Profile} />
    //         <Route path="/dashboard" component={CreatorDashboard} />
    //         <Route path="/login" component={Login} />
    //         <Route path="/signup" component={Signup} />
    //       </Switch> */}

    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </Router>

    <>
      <div>Hello World</div>
    </>
  );
}

export default App;