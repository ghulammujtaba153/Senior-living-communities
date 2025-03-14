import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import CreateCommunity from "./pages/CreateCommunity";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ContactUsPage from "./pages/Contact";
import ResourcesPage from "./pages/Resources";
import Communities from "./pages/Communities";
import CommunityDetails from "./pages/CommunitiesDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/community" element={<CreateCommunity />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />

          <Route path="/communities" element={<Communities/>} />
          <Route path="/communities/:id" element={<CommunityDetails/>} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
