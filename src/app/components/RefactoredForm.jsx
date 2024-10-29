"use client";

import React, { useState } from "react";

const RefactoredForm = () => {
  const [comment, setComment] = useState("");

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Comment:", comment);
  }

  return (
    <div>
      <h2>Comments Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter your comment"
          required
          value={comment}
          onChange={handleCommentChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefactoredForm;
