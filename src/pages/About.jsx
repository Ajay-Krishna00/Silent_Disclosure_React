import React from "react";
import './About.css'

function About() {
  return (
    <div className="about">
      <p className="intro">
        <h2> Welcome to Silent Disclosure</h2>
        Silent Disclosure is a web application built with React, where users can
        share their thoughts,feelings, and messages anonymously. This platform
        provides a safe and private space for individuals to express themselves
        without fear of judgment or repercussions.
      </p>
      <p className="features">
        <h4> Key Features:</h4>
        <ul className="points">
          <li>
            Anonymous Messaging: Share your messages without revealing your
            identity.
          </li>
          <li>
            Post and View: Write and publish your thoughts, and browse messages
            from others.
          </li>
          <li>
            Permanent Archive: Posted messages become a permanent part of the
            Silent_Disclosure record, unable to be deleted.
          </li>
        </ul>
      </p>
      <p className="purpose">
        <h4>Purpose:</h4>
        Silent_Disclosure aims to create a secure and liberated environment
        where individuals can openly share their thoughts, emotions, and
        experiences without fear of consequences. By providing a platform for
        anonymous expression, we hope to foster a sense of community,
        understanding, and connection among our users.
      </p>
    </div>
  );
}

export default About;
