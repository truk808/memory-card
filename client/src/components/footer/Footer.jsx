import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">Свяжитесь с нами:</p>
                <div className="social-icons">
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.993 16.2l-.403 3.85c.577 0 .826-.25 1.132-.55l2.713-2.548 5.623 4.115c1.03.568 1.755.27 2.017-.946l3.657-16.746C25.222 1.4 24.54.9 23.4 1.35L1.243 9.45c-1.208.463-1.19 1.118-.207 1.412l5.9 1.844L20.227 5.7c.534-.288 1.015-.13.617.158l-10.85 10.35z" />
                        </svg>
                    </a>
                    <a href="https://vk.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="VK">
                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 5.524 4.48 10.004 10.004 10.004S22.008 17.528 22.008 12.004C22.008 6.48 17.528 2 12.004 2zm4.774 14.234h-1.352c-.563 0-.677-.453-1.85-1.6-1.276-1.244-1.815-.968-1.815-.968v1.218s.096.693-.67.693c-1.1 0-2.993-1.694-3.898-4.33-.175-.54.12-.847.625-.847h1.33c.45 0 .616.244.77.582.59 1.314 1.18 2.443 1.18 2.443s.232.37.502.37c.273 0 .24-.373.24-.373s-.035-1.494.1-2.025c.086-.33.25-.557.585-.557h1.645c.46 0 .655.195.655.557 0 .525-.03 1.43-.03 1.43s-.063.43.32.43c.228 0 .534-.276.883-.774.476-.677 1.066-1.786 1.066-1.786.148-.284.385-.456.74-.456h1.34c.535 0 .64.278.515.648-.585 1.755-2.42 4.34-2.42 4.34-.214.302-.44.486-.816.486z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
                        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.973 3H3.027A.028.028 0 003 3.027v17.946c0 .015.012.027.027.027h17.946A.028.028 0 0021 20.973V3.027A.028.028 0 0020.973 3zM16.71 17.25h-1.623l-2.45-3.365-2.816 3.365H8.08l3.27-3.896-3.11-4.354h1.633l2.266 3.17 2.645-3.17h1.578l-3.27 3.847 3.318 4.403z"/>
                        </svg>
                    </a>
                </div>
                <p className="footer-copy">© 2025 Memory Card. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
