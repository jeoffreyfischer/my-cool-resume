import { useState } from 'react';

function CenterCircle({ activeSection, setActiveSection }) {
  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(null); // 'expand' | 'shrink' | null

  const handleCenterClick = () => {
    if (activeSection) return;
    if (!expanded && !animating) {
      setAnimating('expand');
    } else if (expanded && !animating) {
      setAnimating('shrink');
    }
  };

  const handleAnimationEnd = () => {
    if (animating === 'expand') {
      setExpanded(true);
      setAnimating(null);
    } else if (animating === 'shrink') {
      setExpanded(false);
      setAnimating(null);
    }
  };

  const showName = expanded || animating === 'expand' || animating === 'shrink';
  const centerClasses = [
    'cv-center-inner',
    'cv-center-inner--photo',
    animating === 'expand' && 'cv-center-inner--expanding',
    animating === 'shrink' && 'cv-center-inner--shrinking',
    expanded && !animating && 'cv-center-inner--expanded',
  ].filter(Boolean).join(' ');

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
        <button
          type="button"
          className={centerClasses}
          onClick={handleCenterClick}
          onAnimationEnd={handleAnimationEnd}
          aria-label={expanded ? 'Collapse' : 'Reveal name'}
        >
          {showName ? (
            <span className="cv-center-name">Jeoffrey</span>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}images/jeo-thinking.png`}
              alt="Jeo"
              className="cv-center-photo"
            />
          )}
        </button>
      )}
    </div>
  );
}

export default CenterCircle;
