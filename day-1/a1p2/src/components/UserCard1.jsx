// src/components/UserCard1.jsx

import React from "react";

function UserCard1({ name, email }) {
  return (
    <div>
      <h3>name: {name}</h3>
      <p>email: {email}</p>
    </div>
  );
}

export default UserCard1;
