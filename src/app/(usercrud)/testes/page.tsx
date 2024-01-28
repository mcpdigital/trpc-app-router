import React from "react";

const teste = async () => {
  const response = await fetch("http://localhost:3000/api/users");
  console.log(response);
  return <div>teste</div>;
};

export default teste;
