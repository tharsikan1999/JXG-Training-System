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
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import NotFound from "./Pages/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Attach event listener
    window.addEventListener("load", handleLoad);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
