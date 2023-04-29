import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex p-3 my-3">
        <Button variant="danger">Lates</Button>
        <Marquee className="text-danger" pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text..!!! multiple React components, or just some text...!!
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
