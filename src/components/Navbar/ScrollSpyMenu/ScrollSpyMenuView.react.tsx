import React from 'react';
import Scrollspy from 'react-scrollspy';
import { MENU_ITEM } from '..';

interface Props {
  menuItems: MENU_ITEM[];
  className?: string;
  offset?: number;
  toggleHandler?: () => void;
}

const ScrollSpyMenuView: React.FC<Props> = ({
  menuItems,
  className,
  offset,
  toggleHandler,
}) => {
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <Scrollspy
      items={scrollItems}
      className={className}
      // drawerClose={toggleHandler}
      offset={offset}
      // currentClassName={s.ActiveLink}
    >
      {menuItems.map((menu, index) => (
        <li key={`menu-item-${index}`}>
          {menu.staticLink ? (
            <a href={menu.path}>{menu.label}</a>
          ) : (
            <>
              {toggleHandler ? (
                // For mobile drawer, As drawer should hide on menu item click
                <a
                  /* href={menu.path} */
                  /* offset={menu.offset} */

                  onClick={toggleHandler}
                >
                  {menu.label}
                </a>
              ) : (
                // For desktop menu items
                <a
                  // href={menu.path}
                  onClick={() => {
                    // window.scroll({
                    //   top: 0,
                    //   left: 0,
                    // });
                    // setTimeout(() => {
                    //   animateScrollTo(document.querySelector(menu.path), {
                    //     speed: 300,
                    //     elementToScroll: window,
                    //   });
                    // });
                  }}
                >
                  {menu.label}
                </a>
              )}
            </>
          )}
        </li>
      ))}
    </Scrollspy>
  );
};

export default ScrollSpyMenuView;
