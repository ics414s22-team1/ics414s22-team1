import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer>
      <div style={divStyle} className="ui center aligned container">
        <hr />
        Department of Information and Computer Sciences <br />
        University of Hawaii<br />
        Honolulu, HI 96822 <br />
        <a href="http://ics-software-engineering.github.io/matrp">Template Home Page</a>
      </div>
    </footer>
  );
};

export default Footer;
