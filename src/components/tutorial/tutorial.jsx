import React, { Component } from "react";
import axios from "axios";

import TutorialTable from "../../elements/tutorialTable/tutorialTable.jsx";

class Tutorial extends Component {
  state = {
    rowsTutorials: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/postcard/cp/cp-tutorial")
      .then((response) => {
        // Temporary Workaround
        this.setState({ rowsTutorials: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="p-5">
        <h2>Tutorials</h2>
        <table className="content-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Topics</th>
              <th>Source</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rowsTutorials.map((row) => (
              <TutorialTable key={row.id} rowInfo={row} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tutorial;
