import React from 'react';

interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onPrev, onNext }) => (
  <>
    <button onClick={onPrev} aria-label="Previous">
      <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>&#10140;</span>
    </button>
    <button onClick={onNext} aria-label="Next">
      &#10140;
    </button>
  </>
);

export default NavButtons;
