import '../App.css';
import FacebookIcon from '../assets/icons8-facebook.svg';
import YoutubeIcon from '../assets/icons8-youtube.svg';
import InstagramIcon from '../assets/icons8-instagram.svg';
import LinkedinIcon from '../assets/icons8-linkedin.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="left-side">
                <div className="site-name">Your Site Name</div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/">
                        <img src={FacebookIcon} className="icon" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img src={YoutubeIcon} className="icon" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={InstagramIcon} className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={LinkedinIcon} className="icon" />
                    </a>
                </div>
            </div>
            <div className="right-side">
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
                <div className="column">
                    <h4 className="topic">Topic</h4>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                    <a className="pageb" href='#'>Page</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
