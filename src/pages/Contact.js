import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);
  return (
    <>
    <h2>Contact Us</h2>
    </>
  );
}

export default Contact;
