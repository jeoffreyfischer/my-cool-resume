import { useState } from 'react';
import './App.css';
import CornerClipPaths from './components/CornerClipPaths';
import CornerGaps from './components/CornerGaps';
import CenterCircle from './components/CenterCircle';
import CenterRing from './components/CenterRing';
import ExpandedQuarter from './components/ExpandedQuarter';
import QuarterButtons from './components/QuarterButtons';

const SECTIONS = [
  { id: 'work', label: 'Career', iconClass: 'fa-solid fa-briefcase', quarterClass: 'cv-quarter-tl', cornerClass: 'cv-corner-tl', color: '#f59e0b', colorFade: '#fef3c7', colorHover: '#d97706', textColor: '#1e3a8a' },
  { id: 'education', label: 'Education', iconClass: 'fa-solid fa-book', quarterClass: 'cv-quarter-tr', cornerClass: 'cv-corner-tr', color: '#10b981', colorFade: '#d1fae5', colorHover: '#059669', textColor: '#450a0a' },
  { id: 'public', label: 'Media', iconClass: 'fa-brands fa-youtube', quarterClass: 'cv-quarter-br', cornerClass: 'cv-corner-br', color: '#8b5cf6', colorFade: '#ede9fe', colorHover: '#7c3aed', textColor: '#422006' },
  { id: 'interests', label: 'Hobbies', iconClass: 'fa-solid fa-guitar', quarterClass: 'cv-quarter-bl', cornerClass: 'cv-corner-bl', color: '#f43f5e', colorFade: '#ffe4e6', colorHover: '#e11d48', textColor: '#052e16' },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const circleActiveClass = activeSection
    ? `cv-circle-active cv-circle-active-${activeSection.quarterClass}`
    : '';

  return (
    <div className="cv-page bg-slate-900">
      <CornerClipPaths />
      <div className="cv-square">
        <ExpandedQuarter activeSection={activeSection} />
        <CornerGaps sections={SECTIONS} activeSection={activeSection} />
        <div className={`cv-circle ${circleActiveClass}`}>
          <QuarterButtons
            sections={SECTIONS}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <CenterRing />
          <CenterCircle activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
