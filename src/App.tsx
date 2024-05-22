import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Learn from "./Pages/Learn";
import Candidates from "./Pages/Candidates";
import Admin from "./Pages/Admin";
import Trainings from "./Pages/Trainings";
import Progress from "./Pages/Progress";
import Feedback from "./Pages/Feedback";
import Reports from "./Pages/Reports";
import Profile from "./Pages/Profile";
import DefaultLayout from "./Layouts/DefaultLayout";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading spinner until the window has fully loaded
    window.onload = () => {
      setLoading(false);
    };

    // Cleanup function to remove the event listener
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/candidates"
              element={<DefaultLayout children={<Candidates />} />}
            />
            <Route
              path="/trainings"
              element={<DefaultLayout children={<Trainings />} />}
            />
            <Route
              path="/progress"
              element={<DefaultLayout children={<Progress />} />}
            />
            <Route
              path="/feedback"
              element={<DefaultLayout children={<Feedback />} />}
            />
            <Route
              path="/reports"
              element={<DefaultLayout children={<Reports />} />}
            />
            <Route
              path="/profile"
              element={<DefaultLayout children={<Profile />} />}
            />
            <Route
              path="/admin"
              element={<DefaultLayout children={<Admin />} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
