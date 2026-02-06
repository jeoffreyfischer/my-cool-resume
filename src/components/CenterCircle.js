function CenterCircle({ activeSection, setActiveSection }) {
  return (
    <div className="cv-center">
      {activeSection ? (
        <button
          type="button"
          className="cv-center-inner cv-center-home-btn"
          onClick={(e) => {
            e.stopPropagation();
            setActiveSection(null);
          }}
          aria-label="Back to home"
        >
          <span className="cv-center-icon" aria-hidden="true">
            <i className="fa-solid fa-house" />
          </span>
        </button>
      ) : (
        <div className="cv-center-inner">
          <p className="cv-center-text">Click a section</p>
        </div>
      )}
    </div>
  );
}

export default CenterCircle;
