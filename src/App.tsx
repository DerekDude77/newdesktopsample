import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./Components/Header";
import Blog from "./Pages/Blog";
import Supervised from "./Pages/Supervised";
import BurialSummary from "./Pages/BurialSummary";
import Unsupervised from "./Pages/Unsupervised";
import Admin from "./Pages/Admin";
import Test from "./Pages/Testing";

const theme = createTheme();

const sections = [
  { title: "Home Page", url: "/" },
  { title: "Burial Summary", url: "/BurialSummary" },
  { title: "Supervised", url: "/Supervised" },
  { title: "Unsupervised", url: "/Unsupervised" },
  { title: "Administrative", url: "/Admin" },
  { title: "Test", url: "/Testing" },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Fag el-Gamous" sections={sections} />
        </Container>
        <Router>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/BurialSummary" element={<BurialSummary />} />
            <Route path="/Supervised" element={<Supervised />} />
            <Route path="/Unsupervised" element={<Unsupervised />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Testing" element={<Test />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
