import React, { Component } from "react";
import axios from "axios";

import ProblemTable from "../../elements/problemTable/problenTable.jsx";
import BackButton from "../../elements/backButton/backButton.jsx";

class Problem extends Component {
  state = {
    rowsProblems: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/postcard/cp/cp-problem")
      .then((response) => {
        this.setState({ rowsProblems: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="p-5">
        <h2>Problems</h2>
        <table class="content-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Difficulty Level</th>
              <th>Problem Name</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsProblems.map((row) => (
              <ProblemTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </table>
        <BackButton />
      </div>
    );
  }
}

export default Problem;
