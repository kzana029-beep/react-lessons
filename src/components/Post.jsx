import React, { useState } from "react";

function Post({ author, text }) {
  const [like, setLike] = useState(false);
  return (
    <div>
      <h3>{author}</h3>
      <p>{text}</p>

      <button
        style={{ background: like ? "red" : "lightgray" }}
        onClick={() => setLike(!like)}
      >
        Like
      </button>
    </div>
  );
}

export default Post;
