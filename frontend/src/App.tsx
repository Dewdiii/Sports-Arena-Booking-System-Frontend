import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LogoNavbar from "./layouts/RegiNavbar";
import RegisterPage from "./pages/RegisterPage";
import RegisterType from "./pages/RegistrationType";
import RegisterContactDetails from "./pages/RegistrationContactDetails";
import RegisterEmail from "./pages/RegistrationEmail";
//import ProfilePage from "./pages/ProfilePage";
import FullNavBar from "./layouts/FullNavBar";
import AddGround from "./pages/AddGround";
import AddCourt from "./pages/AddCourt";
import Booking from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentOtp from "./pages/PaymentOtpPage";
import PromtPage from "./components/PromtPages";
import Arena from "./pages/Arena";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p></p>
            </Layout>
          }
        />
        <Route
          path="/arena"
          element={
            <>
              <Navbar />
              <Arena />
              <Footer />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search page</p>
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <LogoNavbar>
              <LoginPage />
            </LogoNavbar>
          }
        />
        <Route
          path="/register"
          element={
            <LogoNavbar>
              <RegisterPage />
            </LogoNavbar>
          }
        />
        <Route
          path="/registertype"
          element={
            <LogoNavbar>
              <RegisterType />
            </LogoNavbar>
          }
        />
        <Route
          path="/registercontact"
          element={
            <LogoNavbar>
              <RegisterContactDetails />
            </LogoNavbar>
          }
        />
        <Route
          path="/addground"
          element={
            <LogoNavbar>
              <AddGround />
            </LogoNavbar>
          }
        />
        <Route
          path="/addcourt"
          element={
            <LogoNavbar>
              <AddCourt />
            </LogoNavbar>
          }
        />
        <Route
          path="/registeremail"
          element={
            <LogoNavbar>
              <RegisterEmail />
            </LogoNavbar>
          }
        />

        <Route
          path="/booking"
          element={
            <FullNavBar>
              <Booking />
            </FullNavBar>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <FullNavBar>
              <ProfilePage />
            </FullNavBar>
          }
        />
        <Route
          path="/dashboard"
          element={
            <FullNavBar>
              <AdminDashboard />
            </FullNavBar>
          }
        />

        <Route
          path="/paymentOtp"
          element={
              <PaymentOtp />
          }
        />

        <Route
          path="/promtPage"
          element={
              <PromtPage />
          }
        />

        <Route path="/paymentPage" element={<PaymentPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
