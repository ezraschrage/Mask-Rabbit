import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <div className="footer">
            <div className="footer-txt">Follow us! We're friendly: </div>
            <div className="footer-link">
              <a href="https://github.com/ezraschrage">
                  <button className="git"></button>
              </a>
              <div className="footer-break">|</div>
            </div>
          </div>

        )
    }
}

export default Footer;
