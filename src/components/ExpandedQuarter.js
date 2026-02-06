function ExpandedQuarter({ activeSection }) {
  if (!activeSection) return null;
  return (
    <div
      className={`cv-expanded-quarter cv-expanded-${activeSection.quarterClass}`}
      style={{
        '--expanded-color': activeSection.color,
        '--expanded-fade': activeSection.colorFade,
      }}
      aria-hidden="true"
    />
  );
}

export default ExpandedQuarter;
