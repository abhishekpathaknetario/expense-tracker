import React from "react";

function Common({ data }) {
  const key = Object.keys(data)[0];

  console.log(key);

  console.log(data.key);

  return <div>{Object.keys(data)}</div>;
}

export default Common;
