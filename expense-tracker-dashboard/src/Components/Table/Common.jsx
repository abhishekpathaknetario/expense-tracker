import React, { useState, useEffect } from "react";

// Assuming data is fetched or defined
const Common = ({ data }) => {
  // Fetch the data (optional if data is hardcoded)

  const objectKey = Object.keys(data);

  const firstItemKeys = Object.keys(data.objectKey[0]);

  console.log("Keys of the first maintenance item:", firstItemKeys);

  const detailsKeys = Object.keys(data.objectKey[0].details);

  console.log("Keys of the details object:", detailsKeys);
  return (
    <div>
      <h1>{objectKey}</h1>
    </div>
  );
};

export default Common;
