import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <div className="footer">
            <div className="footer-txt">Follow us! We're friendly: </div>
            <div className="footer-link">
              <a href="https://github.com/ezraschrage" target="_blank" rel="noopener noreferrer">
                  <button className="git"></button>
              </a>
              <div className="footer-break">|</div>
              <a href="https://www.linkedin.com/in/ezraschrage/" target="_blank" rel="noopener noreferrer">
                  <button className="linkedin"></button>
              </a>
              <div className="footer-break">|</div>
              <a href="https://angel.co/u/ezra-schrage" target="_blank" rel="noopener noreferrer"> 
                  <button className="angellist"></button>
              </a>
            </div>
          </div>

        )
    }
}

export default Footer;