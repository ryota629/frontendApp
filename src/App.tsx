import React from "react";
import Grid  from "@mui/material/Grid";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import "./Main.css";

function App() {
  return (
    <div>
      <Grid container direction="column">
        <Header />
      </Grid>
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
