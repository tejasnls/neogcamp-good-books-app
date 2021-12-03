import React, { useState } from "react";
import Button from "./Button";
import "./GoodBooks.css";

const GoodBooks = (props) => {
  const bookList = props.bookList;
  const [inputCategory, setinputCategory] = useState("JavaScript");
  const categories = Object.keys(bookList);

  const categorySelectionHandler = (category) => {
    setinputCategory(category);
  };

  return (
    <div className="main-container">
      <h2>
        Checkout some of the best books available. Select a category to get
        started.
      </h2>
      <div className="book-category">
        {categories.map((category) => {
          return (
            <Button
              key={category}
              category={category}
              onSelect={categorySelectionHandler}
            />
          );
        })}
      </div>
      <div className="books">
        {bookList[inputCategory].map((item) => {
          return (
            <div className="card">
              <span>{item.name}</span>
              <span>{item.ratings}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoodBooks;
