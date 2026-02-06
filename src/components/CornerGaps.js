function CornerGaps({ sections, activeSection }) {
  return (
    <>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`cv-corner ${section.cornerClass} ${activeSection?.id === section.id ? 'cv-corner-active' : ''}`}
        >
          <div
            className="cv-corner-content"
            style={{
              '--corner-bg': section.color,
              '--corner-text': section.textColor,
            }}
          >
            <span className="cv-corner-label">{section.label}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default CornerGaps;
