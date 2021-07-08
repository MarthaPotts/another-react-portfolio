import React from "react";
import "./styles/contact.css";

function Contact(props) {
  return (
    <div className="container" {...props}>
      <p>
        <code className="code">: Connect : </code> with me on{" "}
        <a class="nav" href="https://www.linkedin.com/in/martha-potts-34b6286a">
          LinkedIn
        </a>
      </p>
      <p>
        <code className="code">: Mail : </code> to me
        <a class="nav" href="mailto:marthajpotts7@gmail.com">
          Email me!
        </a>
      </p>
      <p>
        <code className="code">: Find : </code> me on{" "}
        <a class="nav" href="https://www.facebook.com/martha.potts.5">
          Facebook
        </a>
      </p>
      <p>
        <code className="code">: Find : </code> me on{" "}
        <a class="nav" href="https://github.com/MarthaPotts">
          Git Hub
        </a>
      </p>
    </div>
  );
}
export default Contact;
