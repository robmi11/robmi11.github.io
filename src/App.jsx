import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
