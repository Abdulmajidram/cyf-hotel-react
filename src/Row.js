import React, { useState } from "react";
import moment from "moment";

const Row = (props) => {
  const [active, setActive] = useState(false);
  const result = props.result;

  function handleRowClick() {
    setActive(!active);
  }

  return (
    <tr scope="row" className={active ? "blue" : ""} onClick={handleRowClick}>
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default Row;