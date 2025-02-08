import instagramBefore from '../assets/instagramBefore.png';
import instagramAfter from '../assets/instagramAfter.png';
import linkedinBefore from '../assets/linkedinBefore.png';
import linkedinAfter from '../assets/linkedinAfter.png';
import emailBefore from '../assets/emailBefore.png';
import emailAfter from '../assets/emailAfter.png';
import './Navigation.scss';
import nameLogo from "../assets/nameLogo.png";

function Navigation() {
    return (
        <div className="Navbar">
            <ul className="nav-list">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle">
                        Art
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/prints">Prints</a></li>
                        <li><a href="/cards">Cards</a></li>
                        <li><a href="/animations">Animations</a></li>
                        <li><a href="/stickers">Stickers</a></li>
                    </ul>
                </li>
                <li><a href="/about">About</a></li>
            </ul>
            <img src={nameLogo} className="App-logo" alt="logo"/>
            <nav className="Navbar">
                <a href="https://instagram.com/lilypoppy.art" target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={instagramBefore} alt="Instagram Before" className="default" style={{width: '40px'}}/>
                        <img src={instagramAfter} alt="Instagram After" className="hover" style={{width: '40px'}}/>
                    </div>
                </a>
                <a href="https://linkedin.com/in/lilyhzhou" target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={linkedinBefore} alt="LinkedIn Before" className="default" style={{width: '40px'}}/>
                        <img src={linkedinAfter} alt="LinkedIn After" className="hover" style={{width: '40px'}}/>
                    </div>
                </a>
                <a href="https://instagram.com/lilypoppy.art" target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={emailBefore} alt="Email Before" className="default" style={{width: '40px'}}/>
                        <img src={emailAfter} alt="Email After" className="hover" style={{width: '40px'}}/>
                    </div>
                </a>
            </nav>
        </div>
    );
}

export default Navigation;
