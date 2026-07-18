import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/* <h1 className="text-3xl font-bold">GitHub Users Hub</h1> */}
      {/* this is a container to hold other components loaded by routes */}
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
