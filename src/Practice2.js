import { useState } from "react";
//import { FaCircle } from "react-icons/fa";

const Practice2 = () => {
  const [callType, setcallType] = useState("");
  const [postData, setpostData] = useState([]);
  const handleCall = async () => {
    try {
      const API_URL = `https://jsonplaceholder.typicode.com/${callType}`;
      const response = await fetch(API_URL);

      if (!response.ok) throw Error("couldnot retrieve tha data");
      const dataRes = await response.json();
      setpostData(dataRes);
      console.log(dataRes);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="page">
      <div className="options">
        <button
          type="button"
          onClick={(e) => {
            setcallType(e.target.innerText);
            handleCall();
          }}>
          users
        </button>
        <button
          type="button"
          onClick={(e) => {
            setcallType(e.target.innerText);
            handleCall();
          }}>
          posts
        </button>
        <button
          type="button"
          onClick={(e) => {
            setcallType(e.target.innerText);
            handleCall();
          }}>
          comments
        </button>
      </div>
      <table>
        <tbody>
          {postData.map((item) => {
            return (
              <tr key={item.id}>
                {Object.entries(item).map(([keys, value]) => {
                  return <td key={keys}> {JSON.stringify(value)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Practice2;
