import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Footer from "./components/Footer";
import Services from "./pages/Services/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp/SignUp";
import ServicePage from "./pages/Services/ServicePage";
import LogIn from "./pages/LogIn/LogIn";
import "fontsource-roboto";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import EditWebsiteContent from "./pages/EditWebsiteContent/EditWebsiteContent";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/about">
              <NavBar />
              <About />
              <Footer />
            </Route>
            <Route path="/services">
              <NavBar />
              <Services />
            </Route>
            <Route path="/servicepage">
              <NavBar />
              <ServicePage />
            </Route>
            <Route path="/products">
              <NavBar />
              <Products />
            </Route>
            <Route path="/sign-up">
              <NavBar />
              <SignUp />
            </Route>
            <Route path="/log-in">
              <NavBar />
              <LogIn />
            </Route>
            <Route path="/user-dashboard">
              <NavBar />
              <UserDashboard />
            </Route>
            <Route path="/admin-dashboard">
              <NavBar />
              <AdminDashboard />
            </Route>
            <Route path="/edit-website-content">
              <NavBar />
              <EditWebsiteContent />
            </Route>
            <Route path="/">
              <NavBar />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
