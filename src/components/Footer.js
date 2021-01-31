import React, {Component} from "react";

import "./styles/footer.scss";

class Footer extends Component {


render () {
    return (
        <footer className="main-footer">
        <div className="container">
          <div className="copyright-wrap">
             <p className="footer__copyright">© SkillDrive Inc. 2020</p>
          </div>
          <div className="footer__social-links">
            <a href="" className="icon-vk" target="_blank" rel="nofollow" aria-label="вконтакте"></a>
            <a href="" className="icon-insta" target="_blank" rel="nofollow" aria-label="инстаграмм"></a>
            <a href="" className="icon-facebook" target="_blank" rel="nofollow" aria-label="фэйсбук"></a>
          </div>
        </div>
    </footer>
    );
}

}

export default Footer;