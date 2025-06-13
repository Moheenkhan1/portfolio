import React, { useRef , useState , useEffect } from "react";
import styled from "styled-components";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: #12172a;
  color: white;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  color: white;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: white;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid #31335c;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid white;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #31335c;
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid white;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;


// const Contact = () => {
//   const form = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const name = formData.get("from_name");
//     const email = formData.get("from_email");
//     const subject = formData.get("subject");
//     const message = formData.get("message");

//     if (!name || !email || !subject || !message) {
//       toast.error("Please fill out all fields before submitting.");
//       return;
//     }

//     try {
//       const response = await fetch("https://formspree.io/f/mkgbrykz", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         toast.success("Email sent successfully!", {
//           position: "top-center",
//           autoClose: 5000,
//           transition: Bounce,
//         });
//         form.current.reset();
//       } else {
//         toast.error("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Failed to send message.");
//     }
//   };

//   return (
//     <Container id="contact">
//       {/* <ToastContainer /> */}
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc style={{ marginBottom: "40px" }}>
//           Feel free to reach out to me for any questions or opportunities!
//         </Desc>
//         <ContactForm ref={form} onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Name" name="from_name" required />
//           <ContactInput placeholder="Your Email" name="from_email" required />
//           <ContactInput placeholder="Subject" name="subject" required />
//           <ContactInputMessage placeholder="Message" name="message" rows={4} required />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//       </Wrapper>
//     </Container>
//   );
// };


const Contact = () => {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null); // null = not checked, true/false = valid or not
  const [checkingEmail, setCheckingEmail] = useState(false);

  // Debounce timer ID
const debounceTimer = useRef(null);

  // Function to verify email via Abstract API
  const verifyEmailAPI = async (emailToCheck) => {
    setCheckingEmail(true);
    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=5ceb9dfdab1642f18c4654bcbbb35a96&email=${emailToCheck}`
      );
      const data = await response.json();
      setEmailValid(data.deliverability === "DELIVERABLE");
    } catch (error) {
      console.error("Email verification error:", error);
      setEmailValid(false);
    } finally {
      setCheckingEmail(false);
    }
  };

  // Handle email input change with debounce
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(null); // reset validation while typing

    // Clear previous debounce timer
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

debounceTimer.current = setTimeout(() => {
  if (value && value.includes("@")) {
    verifyEmailAPI(value);
  } else {
    setEmailValid(false);
  }
}, 800);
 // wait 800ms after last keystroke
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const emailInput = formData.get("from_email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !emailInput || !subject || !message) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    if (emailValid === false) {
      toast.error("Please enter a valid email address.",{
          position: "top-center",
          autoClose: 5000,
          transition: Bounce,
        });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mkgbrykz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          transition: Bounce,
        });
        form.current.reset();
        setEmail("");
        setEmailValid(null);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <Container id="contact">
      {/* <ToastContainer /> */}
      <Wrapper>
        <Title>Contact</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{
              borderColor:
                emailValid === false
                  ? "red"
                  : emailValid === true
                  ? "limegreen"
                  : "#31335c",
            }}
          />
          {emailValid === false && (
            <small style={{ color: "red", marginTop: "-10px" }}>
              Invalid email address
            </small>
          )}
          {checkingEmail && (
            <small style={{ color: "gray", marginTop: "-10px" }}>
              Checking email...
            </small>
          )}
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
