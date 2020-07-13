import React, { Component } from "react";

import Header from "../components/header/header.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";
import Problem from "../components/problem/problem.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Footer from "../components/footer/footer.jsx";

class ProblemPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Tutorial />
        <Problem />
        <MiddleGreeting />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProblemPage;
