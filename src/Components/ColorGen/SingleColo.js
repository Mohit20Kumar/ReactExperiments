import React, { useEffect, useState } from "react";

const SingleColo = ({ weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const hexColor = `#${hex}`;
  //   console.log(hexColor);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <div
      key={index}
      className={`color-article ${index >= 100 && "color-condition"}`}
      style={{
        backgroundColor: hexColor,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor); //damnnnnnn
      }}
    >
      <p>{weight}%</p>
      <p>{hexColor}</p>
      {alert && <p className="color-alert">Copied To CP!</p>}
    </div>
  );
};

export default SingleColo;
