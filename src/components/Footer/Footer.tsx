import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="copyright">© {year} Diogenes Polanco</span>
            <span className="separator">•</span>
            <span className="built-with">Built with IA</span>
            <span className="separator">•</span>
            <span className="hosted-on">Hosted on Azure WebSites</span>
          </div>
          <div className="footer-terminal">
            <span className="terminal-prompt">&gt;</span>
            <span className="terminal-command">echo "Hello, World!"</span>
          </div>
        </div>
      </div>
    </footer>
  );
}