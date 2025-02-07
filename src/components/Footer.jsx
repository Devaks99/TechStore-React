// src/components/Footer.jsx
import { FiGithub, FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';

export const Footer = () => {
  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/Devaks99',
      label: 'GitHub'
    },
    {
      icon: <FiMail />,
      url: 'mailto:devaks@outlook.com.br',
      label: 'E-mail'
    },
    {
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/aks_dev/',
      label: 'Instagram'
    },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/ana-karla-209606263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="main-footer">
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} TechStore. all rights reserved.
      </p>
    </footer>
  );
};