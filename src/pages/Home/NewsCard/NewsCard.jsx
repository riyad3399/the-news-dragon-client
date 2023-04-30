import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {" "}
                {moment(author?.published_date).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 200)}...
                <Link className="text-decoration-none" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 d-flex align-items-center ">
            <Rating
              style={{ maxWidth: 120 }}
              value={Math.round(rating?.number)}
              readOnly
            />{" "}
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye> <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
