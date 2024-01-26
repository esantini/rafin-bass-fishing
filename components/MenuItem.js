import React, { useState, useEffect } from 'react';

const MenuItem = ({ item, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);
  useEffect(() => {
    setAnchorTarget(document.getElementById(item.id));
  }, [item]);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li>
      <a href={`#${item.id}`}
        onClick={handleClick}
        className={active ? "active" : ''}
        aria-label={`Scroll to ${item.title}`}>
        {item.title}
      </a>
    </li>
  );
};

export default MenuItem;
