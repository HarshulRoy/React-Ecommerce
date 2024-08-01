import styled from "styled-components";
import ContactForm from './components/ContactForm'

const Contact = () => {


  

  return (
    <Wrapper>
      <div className="container">
        <p>Contact us</p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.312223072412!2d77.67277197466174!3d28.948462469665415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65e6119aa711%3A0xe15eaa49f230a3c3!2sShopprix%20Mall!5e0!3m2!1sen!2sin!4v1692086563019!5m2!1sen!2sin"
          width="100%" 
          height="280"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactForm/>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 7rem 0 5rem 0;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      max-width: 100%;

      p {
        text-align: center;
        font-size: 3rem;
        font-weight: 500;
      }
    }
  `;
export default Contact;
