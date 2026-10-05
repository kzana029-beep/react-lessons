import React from "react";

function ConditionalRendering() {
  const isLoggedIn = false;
  const isAdmin = true;
  if (isLoggedIn) {
    return <h1>Welcome Back</h1>;
  }
  return (
    <div>
      {isAdmin ? (
        <h2>Welcome admin user</h2>
      ) : (
        <h1>Please get the right creds</h1>
      )}
    </div>
  );
  return <h1>Please log in</h1>;
}

export default ConditionalRendering;
