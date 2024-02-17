import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import { ExpenseProvider } from "./Context/context";
import Home from "../src/Page/home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </ExpenseProvider>
  );
};

export default App;
