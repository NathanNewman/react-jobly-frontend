import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import DetailsList from "./DetailsList";
import JoblyApi from "./helpers/api";
import formatHeading from "./helpers/formatHeading";
import "./background.css";

function CompanyDetails() {
  const [company, setCompany] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const handle = history.location.pathname.substring("/company/".length);
      const company = await JoblyApi.getCompany(handle);
      console.log(company.jobs.map((item) => item.id));
      setCompany(company);
    }
    fetchData();
  }, [history.location.pathname]);
  const headingText = formatHeading(history);

  return (
    <div className="background" >
      <Container className="text-center mt-4">
        <Card>
          <CardTitle><h2>{headingText}</h2></CardTitle>
          <CardBody>
            {company.logoUrl ? (<img src={require(`.${company.logoUrl}`)} alt={company.name} style={{ width: "100px", height: "100px" }} />) : (<img src={require("./logos/null.png")} alt={company.name} style={{ width: "100px", height: "100px" }} />)}
            
            <CardText>{company.description}</CardText>
            <p>Employees: {company.numEmployees}</p>
          </CardBody>
        </Card>
      </Container>
      <h1>Jobs</h1>
      <Row className="justify-content-center">
        <DetailsList jobs={company.jobs} />
      </Row>
    </div>
  );
}

export default CompanyDetails;
