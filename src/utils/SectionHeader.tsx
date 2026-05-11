import React from 'react';
import NavButtons from './NavButtons';

interface SectionHeaderProps {
  title: string;
  label?: string;
  onPrev: () => void;
  onNext: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, label, onPrev, onNext }) => (
  <div className="section-header">
    <div className="section-title">
      {label && <span className="section-number">{label}</span>}
      <h2>{title}</h2>
    </div>
    <div className="section-nav">
      <NavButtons onPrev={onPrev} onNext={onNext} />
    </div>
  </div>
);

export default SectionHeader;
