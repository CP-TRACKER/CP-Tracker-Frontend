import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Creators from "../../elements/creators/creators.jsx";
import Community from "../../elements/community/community.jsx";
import ContactUs from "../../elements/contactus/contactus.jsx";
import Subscribe from "../../elements/subscribe/subscribe.jsx";

class Footer extends Component {
  render() {
    return (
      <Container className="footer-div">
        <Row>
          <Container>
            <div className="p-3">
              <Subscribe />
              <br />
              <div className="footer border-top ">
                <br />
                <div className="row justify-content-around text-white">
                  <Creators />
                  <Community />
                  <ContactUs />
                </div>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
