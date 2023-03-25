import { Link } from "react-router-dom";
import CompanyFetch from "../../CompanyFetch";
import HeadingSection from "../../HeadingSection";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "../../mega-menu.css"


export default function InsightPlacement2022ep() {
  const [query, setQuery] = useState("");

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  /////////////////////////styled components////////////////////////////////////////////
  const BodyLink = styled(Link)`
    background-color: ${(props) => props.activeColor || "white"};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    border: ${(props) =>
      props.activeColor ? "" : "dashed 2px rgba(138, 94, 191, 1)"};
    text-decoration: none;

    &:hover {
      color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    }
  `;
  const Div = styled.div`
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const InputField = styled.input`
    width: 90%;
    margin: 2rem 2.5%;
    height: 3rem;
    padding: 0 1rem;
    outline: none;
    border: rgba(138, 94, 191, 1) solid 1.5px;
    border-radius: 7.5px;
    color: rgba(138, 94, 191, 1);
    font-weight: 700;
  `;

  const Button = styled.button`
    height: 3rem;
    margin: 2rem 2.5%;
    padding: 0 1rem;
    width: 30%;
    background: linear-gradient(
      90deg,
      rgba(238, 109, 152, 1) 15%,
      rgba(138, 94, 191, 1) 85%
    );
    color: #fff;
    outline: none;
    border: none;
    border-radius: 7.5px;
    position: absolute;
    transform: translateX(-100%);
    cursor: pointer;
  `;



  const BranchDiv = styled.div`
  margin: 1rem 1.5rem 0 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
  @media only screen and (max-width: 450px){
    margin-top: 0;
    margin-right: 2rem;
    display : flex;
    flex-wrap : wrap;
    align-items: center;
    justify-content: center;
  }
`;
const BranchLink = styled(Link)`
    background-color: ${(props) => props.activeColor || "white"};
    border-radius: 10px;
    padding: 10px 20px;
    margin: 5px;
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    border: ${(props) =>
      props.activeColor ? "" : "dashed 2px rgba(138, 94, 191, 1)"};
    text-decoration: none;
    
    &:hover {
      color: ${(props) =>
      props.activeColor ? "white" : "rgba(138, 94, 191, 1)"};
    }
  `;
  /////////////////////////styled components////////////////////////////////////////////

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Placement Insight </title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/MejarKumar/All-Company-Logo/blob/main/favicon-32x32.png?raw=true"
        />
        <meta name="theme-color" content="#064420" />
      </Helmet>

      <HeadingSection />
      <Div>
        <BodyLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement/2022">
          Placement
        </BodyLink>
        {/* <BodyLink to="/insight/internship/2021">Internship</BodyLink> */}
      </Div>
      
      <InputField
        autoFocus
        placeholder="Search Here"
        value={query}
        onChange={inputHandler}
      />
      <Button>Search</Button>
      <Div>
      <div class="dropdown">
            <button class="dropbtn">EP</button>
            <div class="dropdown-content">
                <BranchDiv>
                  <BranchLink to="/insight/placement/2022">
                    All
                  </BranchLink>
                </BranchDiv>
              <div class="sub-heading">B.Tech</div>
                <BranchDiv>
                  <BranchLink to="/insight/placement/2022/ce">
                    CE
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/che">
                    CHE
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/cse">
                    CSE
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/ece">
                    ECE
                  </BranchLink>
                </BranchDiv>
                <BranchDiv>
                  <BranchLink to="/insight/placement/2022/ee">
                    EE
                  </BranchLink>
                  <BranchLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement/2022/ep">
                    EP
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/ese">
                    ESE
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/fme">
                    FME
                  </BranchLink>
                </BranchDiv>
                <BranchDiv>
                  <BranchLink to="/insight/placement/2022/me">
                    ME
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/mech">
                    Mech
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/mme">
                    MME
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/pe">
                    PE
                  </BranchLink>
                </BranchDiv>
              <div class="sub-heading">Int. M.Tech</div>
              <BranchDiv>
                  <BranchLink to="/insight/placement/2022/agl">
                    AGL
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/agp">
                    AGP
                  </BranchLink>
                  <BranchLink to="/insight/placement/2022/mnc">
                    M&C
                  </BranchLink>
                </BranchDiv>
            </div>
          </div>
        <BodyLink to="/insight/placement/2021">
          2021
        </BodyLink>
        <BodyLink activeColor="rgba(238, 109, 152, 1)" to="/insight/placement/2022">
          2022
        </BodyLink>
      </Div>

      <CompanyFetch url="placement" query={query} type="placement" year="2022" branch="ep"/>
    </>
  );
}
