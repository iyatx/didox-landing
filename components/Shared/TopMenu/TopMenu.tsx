import React, { useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';
let scrollToComponent: any;

import styles from './styles.module.sass';
import { useSelector } from 'react-redux';
import { AppState } from 'store/store';

interface Props {
  className?: string;
  nav?: INavItem[];
  onClick?(): void;
}

interface INavItem {
  label: string;
  ref?: React.RefObject<HTMLElement>;
  to?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const TopMenu: React.FC<Props> = ({ className = '', nav = [], onClick = () => {} }) => {
  const { size } = useSelector((state: AppState) => state.app);

  useEffect(() => {
    scrollToComponent = require('react-scroll-to-component');
  }, []);

  const scrollTo = (ref?: React.RefObject<HTMLElement>) => {
    if (!ref) return;
    scrollToComponent(ref.current, {
      offset: size === 'small' ? -122 : -161,
      align: 'top',
      duration: 1500,
    });
  };

  const onClickHandler = (ref?: React.RefObject<HTMLElement>) => {
    scrollTo(ref);
    onClick();
  };

  const renderChild = ({ Icon, label }: INavItem) => {
    return (
      <span className={styles['top-menu__link']}>
        {Icon && <Icon className={cn(styles['top-menu__icon'])} />}
        {label}
      </span>
    );
  };

  return (
    <ul
      className={cn(styles['top-menu'], {
        [className]: className,
      })}
    >
      {nav.map((item: INavItem) => {
        const { ref, label, to } = item;
        const props = {
          className: styles['top-menu__link'],
          onClick: () => onClickHandler(ref),
        };

        return (
          <li className={styles['top-menu__item']} key={label}>
            {to ? (
              <Link {...props} href={to}>
                {renderChild(item)}
              </Link>
            ) : (
              <span {...props}>{renderChild(item)}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TopMenu;
