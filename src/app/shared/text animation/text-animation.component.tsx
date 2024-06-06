import React from 'react';
import './text-animation.component.scss';

const TextAnimationComponent = () => {
  const panelWrappers = Array.from({ length: 24 }, (_, index) => (
    <div className="panel" key={index}> </div>
  ));

  return (
    <div className="scene">
      <div className="banner">{panelWrappers}</div>
      <div className="screen"></div>
    </div>
  );
};

export default TextAnimationComponent;
