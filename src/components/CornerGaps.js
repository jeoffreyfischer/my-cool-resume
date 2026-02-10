function CornerGaps({ sections, activeSection }) {
  return (
    <>
      {sections.map((section) => {
        const isActive = activeSection?.id === section.id;
        return (
          <div
            key={section.id}
            className={`cv-corner ${section.cornerClass} ${isActive ? 'cv-corner-active' : ''}`}
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
        );
      })}
    </>
  );
}

export default CornerGaps;
