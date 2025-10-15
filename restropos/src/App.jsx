import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home, Auth, Orders } from "./pages";
import Header from "./components/shared/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
