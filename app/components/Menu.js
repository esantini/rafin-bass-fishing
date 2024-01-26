import { useState, useEffect, useCallback } from 'react';

import MenuItem from './MenuItem'

const menuItems = [
  { id: 'home', title: "HOME" },
  { id: 'about', title: "ABOUT US" },
  { id: 'location', title: "LOCATION" },
  { id: 'gallery', title: "GALLERY" },
  { id: 'faq', title: "F.A.Q." },
  { id: 'booking', title: "BOOKING & CONTACT INFO" },
];

const Menu = () => {
  const [activeItem, setActiveItem] = useState(menuItems[0].id);

  const handleScroll = useCallback(() => {
    const curPos = window.scrollY;
    let curSection = menuItems[0].id;
    for (let i = 0; i < menuItems.length; i++) {
      curSection = menuItems[i].anchorPoints <= curPos ? menuItems[i].id : curSection;
      if (curSection !== menuItems[i].id) {
        break;
      }
    }
    // TODO bug: remove ` || curSection === 'home'`
    // `activeItem` will be 'home' without being 'home' (???)
    if (curSection !== activeItem || curSection === 'home') {
      setActiveItem(curSection);
    }
  }, [activeItem]);

  const setAnchorPoints = useCallback(() => {
    const curScroll = window.scrollY - 100;
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].anchorPoints =
        document.getElementById(menuItems[i].id).getBoundingClientRect().top + curScroll;
    }
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    // code from: https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
    const observer = new MutationObserver(setAnchorPoints);
    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
      attributes: true,
    });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setAnchorPoints);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setAnchorPoints);
    }
  }, []);

  return (
    <ul className="nav_list">
      {menuItems.map((e, i) => (
        <MenuItem item={e} key={`menuitem_${i}`} active={activeItem === e.id} />
      ))}
    </ul>
  );
}

export default Menu;
