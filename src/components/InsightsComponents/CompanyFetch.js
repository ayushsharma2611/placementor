import styled from "styled-components";
import { Card } from "../HomeComponents/PastRecruiter";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import client from "../../sanity";
import { urlFor } from "../../sanity";

import MyLoader from "./MyLoader";
const Container = styled.div`
  color: rgba(138, 94, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card_container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export default function CompanyFetch(props) {
  const navigate = useNavigate();
  //let [company, getCompany] = useState([]);

  //code block before the archives
  
  // let [reqyear, setReqYear] = useState("2021");
  // useEffect(() => {
  //   axios
  //     .get(`/api/${props.url}/all_companies`)
  //     .then((response) => {
  //       console.log(response.data);
  //       getCompany(response.data);
  //     });
  // }, [props.url]);
  // console.log(props.query);




  //filter companies according to year
  // useEffect(() => {
  //   axios
  //     .get(`/api/${props.url}/all_companies`)
  //     .then((response) => {
        
  //       let yearFilter = parseInt(props.year);
  //       var yearFilterResponse = response.data.filter((element) => {
  //         return element.year === yearFilter //&& element.eligible_branch.toLowerCase().includes(props.branch) || element.eligible_branch.toLowerCase().includes("open for all") || element.eligible_branch.toLowerCase().includes("open to all")
  //       })
  //       console.log(yearFilterResponse);

  //       //now to filter them by branch
  //       var branchFilterResponse = yearFilterResponse.filter((element)=>{
  //         if(props.branch == "all"){
  //           return yearFilterResponse
  //         } else {
  //           return element.eligible_branch.toLowerCase().includes(props.branch) || element.eligible_branch.toLowerCase().includes("open for all") || element.eligible_branch.toLowerCase().includes("open to all")
  //         }
  //       })
  //       console.log(branchFilterResponse);

        
  //       getCompany(branchFilterResponse)
  //       // getCompany(response.data);
  //     });
  // }, [props.url]);

  


  // const handleSubmit = (e) => {
  //   setReqYear(e.target.value);

  // }

  //////////////////////////////new sanity code for version 2.0/////////////////////////////////

  let [companies, getCompany] = useState([]);

  useEffect(()=>{
    const query = `*[_type == "placement"]{...}`
    client.fetch(query).then(data =>{
      getCompany(data);
    })
  },[]);
  //console.log(companies);
  
  const year = props.year;
  const yearFilter = companies.filter((element)=>{
    return element.year == year;
  })
  console.log(yearFilter);
  const branch = props.branch;
  const branchFilter = yearFilter.filter((element)=>{
    if(props.branch == "all"){
      return yearFilter
    } else {
      return element.eligible_branch.toLowerCase().includes(props.branch) || element.eligible_branch.toLowerCase().includes("open for all") || element.eligible_branch.toLowerCase().includes("open to all");
    }
  })
  var company = branchFilter;
 // console.log(company);

  ////////////////////////////////////****************************/////////////////////////////////////////////

  return (
    <>
      {/* <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "flex-end", width: "100%", justifyContent: "flex-end", paddingRight: "2.5rem" }}>
          <Form.Check
            inline
            name="group1"
            label="2021"
            value="2021"
            type="radio"
            onChange={handleSubmit}
          />
          <Form.Check
            inline
            name="group1"
            label="2022"
            value="2022"
            type="radio"
            onChange={handleSubmit}
          />
        </div>
      </Form> */}

      <Container>
        <h1> Recruiters</h1>
        <div className="card_container">
          {!company ? (
            <MyLoader />
          ) : (
            company
              .filter((val) => {

                if (!props.query) return val;
                else if (
                  // val.company_name &&
                  val.company_name
                    .toLowerCase()
                    .includes(props.query.toLowerCase()) || 
                    val.eligible_branch
                      .toLowerCase()
                      .includes(props.query.toLowerCase())

                )
                  return val;
              }).sort(function(a, b) {
                if(a.company_name.toLowerCase() < b.company_name.toLowerCase()) return -1;
                if(a.company_name.toLowerCase() > b.company_name.toLowerCase()) return 1;
                return 0;
               })
              .map((comp, idx) => (
                < Card
                  onClick={() => {
                    navigate(`/${props.type}/${comp.company_name}/${props.year}`);
                  }}
                  key={idx}
                >
                  <h5 style={{ textTransform: "uppercase", textAlign: "center", "fontWeight": "800" }}>
                    {comp.company_name}
                  </h5>
                  {/* <p>{comp.selected_students}</p> */}
                  {/* <p>{comp.eligible_branch}</p> */}
                  {/* <p>{comp.year}</p> */}
                  { (
                    <img style={{ width:"50%" }} src={urlFor(comp.image).url()} alt="" /> // src={`${comp.logo}`}
                  )}
                </Card>
              ))
          )}
        </div>
      </Container>
    </>
  );
}
