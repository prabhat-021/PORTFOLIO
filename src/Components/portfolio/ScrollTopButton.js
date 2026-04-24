import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

function ScrollTopButton({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowOutwardRoundedIcon />
    </button>
  );
}

export default ScrollTopButton;
