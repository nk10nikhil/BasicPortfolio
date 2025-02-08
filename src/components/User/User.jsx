import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let { userid } = useParams();
  return (
    <div>
      <h1 className="bg-gray-600 text-white text-3xl text-center p-4">User : {userid}</h1>
    </div>
  );
}

export default User;