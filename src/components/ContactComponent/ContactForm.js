import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faWifi } from "@fortawesome/free-solid-svg-icons";
// import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Form } from "react-bootstrap";
import styled from "styled-components";



const Button = styled.button`
  width: 150px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 20px;
  padding: 10px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  transition: all 0.5s;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phnNo, setPhnNo] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !message || !phnNo || !email) {
      setError(true);
      return;
    }
    let data = {
      firstName,
      lastName,
      message,
      email,
      phnNo,
    };
    axios.post(`/api/send_mail`, data).then(() => {
      alert("Message Sent successfully ");
      setFirstName("");
      setLastName("");
      setMessage("");
      setPhnNo("");
      setEmail("");
    });
  };
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <div className={styles.contact_section}>
      <div className={styles.card_section}>
        <div className={styles.first_card}>
          {/* <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faPhone} size={"lg"} />
            </div>
            <div>
              <p>9871276822</p>
            </div>
          </div> */}
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faEnvelope} size={"lg"} />
            </div>
            <div>
              <p>
                placementor@gmail.<span>com</span>
              </p>
            </div>
          </div>
          <div className={styles.row_items}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faWifi} size={"lg"} />
            </div>
            <div>
              <p>
                IIT (ISM) Dhanbad,
                Police Line, Sardar Patel Nagar, Hirapur, Dhanbad, Jharkhand 826004
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.second_card}>
          <div className={styles.contact_form}>

            <div className={styles.name}>



              <input
                type="text"
                className={styles.input_items}
                name="first_name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setError(false);
                }}
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className={styles.input_items}
                name="last_name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setError(false);
                }}
                placeholder="Last Name"
              ></input>
            </div>
            <div className={styles.info}>
              <input
                type="text"
                className={styles.input_items}
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                placeholder="Email"
              ></input>
              <input
                type="text"
                className={styles.input_items}
                name="phone"
                value={phnNo}
                onChange={(e) => {
                  setPhnNo(e.target.value);
                  setError(false);
                }}
                placeholder="Phone Number"
              ></input>
            </div>
            <div className={styles.message}>
              <input
                type="text"
                className={styles.input_items}
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError(false);
                }}
                placeholder="Message for us"
              ></input>
            </div>
          </div>

          <div className={styles.submit_btn}>
            <button className={styles.submit} type="submit" onClick={submitHandler}>
              Send Message
            </button>
          </div> 
        </div>*/}
      </div>
      <div>
        <br />
        <p style = {{fontWeight: "bold",
                      margin: "auto",
                      marginTop: "20px",
                      color: "rgba(138, 94, 191, 1)",
                      textAlign: "center",
                      }}>
          We would love to hear your thoughts and opinion. Please click here to share with us your feedback. Thank you.
        </p>
        <center>
        <a href="https://forms.gle/6g3NwYTNK2MDbbwQA" target="_blank">
          <Button>
            Feedback
          </Button>
        </a>
        </center>
      </div>
    </div>
    
  );
}

export default ContactForm;
