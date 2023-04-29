import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2 " variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button  variant="outline-secondary">
        <FaGithub /> Login With GitHub
      </Button>
      <div className="mt-5">
        <h4>Find Us On </h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
          <Qzone></Qzone>
          <div className="position-relative">
              <img src={bg} alt="" />
              <div className="position-absolute top-0 text-white mt-5 p-5 text-center">
                  <h2>Create an Amazing Newspaper</h2>
                  <p className="my-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                  <Button variant="info">Learn More</Button>
              </div>
          </div>
    </div>
  );
};

export default RightNav;
