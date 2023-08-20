import React from "react";
import Item from "./Item";
import { Col } from "reactstrap";

function DetailsList({jobs}) {
    console.log(jobs);
  const listOfItems = (
    <Col>
      {jobs.map((item) => (
        <Item key={item.id} item={item} listType="jobs" />
      ))}
    </Col>
  );
  const spinner = (
    <div>
      <h1>Nothing to see here!</h1>
      <h1>Nothing to see here!</h1>
      <h1>Nothing to see here!</h1>
      <h1>Nothing to see here!</h1>
      <h1>Nothing to see here!</h1>
    </div>
  );
  return <div>{jobs.length > 0 ? listOfItems : spinner}</div>;
}

export default DetailsList;
