function QuarterButtons({ sections, activeSection, setActiveSection }) {
  return (
    <>
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`cv-quarter ${section.quarterClass} ${activeSection?.id === section.id ? 'cv-quarter-active' : ''}`}
          onClick={() => setActiveSection(section)}
          aria-label={section.label}
        >
          <span
            className={`cv-quarter-icon ${activeSection?.id === section.id ? 'cv-quarter-icon-hidden' : ''}`}
            aria-hidden="true"
          >
            <i className={section.iconClass} />
          </span>
        </button>
      ))}
    </>
  );
}

export default QuarterButtons;
