import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home, Auth, Orders, Table } from "./pages";
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

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
          <Route path="/table" element={<Table />} />
        </Routes>
        {/* Bottom Navigation */}
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
