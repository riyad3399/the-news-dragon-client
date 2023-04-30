import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftnavCart from "../../News/LeftnavCart/LeftnavCart";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-riyad3399.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>All Category</h3>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-decoration-none text-black fs-5">{category.name}</Link>
          </p>
        ))}
      </div>
      <LeftnavCart></LeftnavCart>
    </div>
  );
};

export default LeftNav;
