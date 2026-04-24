import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function PortfolioFooter({ content }) {
  return (
    <footer className="site-footer">
      <div className="shell-container footer-inner">
        <div>
          <p className="footer-title">
            {content.name} <span>/ {content.role}</span>
          </p>
          <p className="footer-signoff">
            Made with <FavoriteRoundedIcon className="footer-heart" /> by {content.name}
          </p>
          <p className="footer-copy">{content.footer.subtext}</p>
        </div>

        <div className="footer-meta">
          <span>{new Date().getFullYear()}</span>
          <span>{content.location}</span>
        </div>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
