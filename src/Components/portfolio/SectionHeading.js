function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-header">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default SectionHeading;
