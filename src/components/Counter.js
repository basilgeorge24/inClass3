// import React from "react";
// import "./counter.css"

// const Counter = () => {
//   const [countData, setCountData] = React.useState([0]);

//   function addition() {
//     const newCountAdd = `${countData + 1}`;
//     setCountData((prevState) => {
//       return {
//         ...prevState,
//         newCountAdd,
//       };
//     });
//   }

//   function subtraction() {
//     const newCountSub = `${countData - 1}`;
//     setCountData((prevState) => {
//       return {
//         ...prevState,
//         newCountSub,
//       };
//     });
//   }

//   return (
//     <div className="counter-container">
//       <section className="screen">{countData}</section>
//       <button onClick={addition} className="buttonadd">+</button>
//       <button onClick={subtraction} className="buttonsub">-</button>
//     </div>
//   );
// };

// export default Counter;
import React from "react";
import "./counter.css"

const Counter = () => {
  const [countData, setCountData] = React.useState(0);

  function addition() {
    setCountData((prevCount) => prevCount + 1);
  }

  function subtraction() {
    setCountData((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter-container">
      <section className="screen">{countData}</section>
      <button onClick={addition} className="buttonadd">+</button>
      <button onClick={subtraction} className="buttonsub">-</button>
    </div>
  );
};

export default Counter;

