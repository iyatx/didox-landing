import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.sass';
import Loader from 'react-loader-spinner';

import CheckIcon from 'assets/images/icons/check.svg';

const renderIcon = (icon: string) => {
  switch (icon) {
    default:
      return null;
  }
};

export interface IButtonProps {
  text?: string;
  to?: string;
  width?: number;
  className?: string;
  size?: 'small' | 'large' | 'extra-small';
  color?: string;
  square?: boolean;
  borderColor?: string;
  onClick?: (() => void) | any;
  icon?: string;
  loading?: boolean;
  blueActive?: boolean;
  fontWeight?: string;
  disabled?: boolean;
  newDes?: boolean;
  hidden?: boolean;
  onMouseDown?: (() => void) | any;
  noHover?: boolean;
  type?: 'file-input';
  done?: boolean;
  submit?: boolean;
  id?: string | number;
  ignoreForm?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  text,
  to,
  width,
  className,
  size,
  color,
  square,
  borderColor,
  onClick = () => {},
  icon,
  loading,
  blueActive,
  fontWeight,
  disabled,
  newDes,
  hidden,
  onMouseDown = () => {},
  noHover,
  type = 'default',
  done,
  submit,
  id,
  ignoreForm,
}) => {
  if (hidden) return null;
  let Comp: React.ElementType = to && !disabled ? 'link' : 'button';
  if (type === 'file-input') {
    Comp = 'input';
  }

  const classes = cn([styles['button']], {
    [className as string]: className,
    [styles['button--extra-small']]: size === 'extra-small',
    [styles['button--small']]: size === 'small',
    [styles['button--large']]: size === 'large',
    [styles['button--yellow']]: color === 'yellow',
    [styles['button--blue']]: color === 'blue',
    [styles['button--red']]: color === 'red',
    [styles['button--dark-red']]: color === 'dark-red',
    [styles['button--green']]: color === 'green',
    [styles['button--dark-green']]: color === 'dark-green',
    [styles['button--purple']]: color === 'purple',
    [styles['button--gray']]: color === 'gray',
    [styles['button--border-yellow']]: borderColor === 'yellow',
    [styles['button--border-red']]: borderColor === 'red',
    [styles['button--square']]: square,
    [styles['button--blue-active']]: blueActive,
    [styles['button--font-medium']]: fontWeight === 'medium',
    [styles['button--new']]: newDes,
    [styles['button--icon']]: !text,
    [styles['button--disabled']]: disabled,
    [styles['button--no-hover']]: noHover || done,
    [styles['button--done']]: done,
  });

  if (to) {
    return (
      <a className={classes} href={to || '/'} style={{ width }}>
        {icon && !loading && !text && renderIcon(icon)}
        <div
          className={cn(styles['button__text'], {
            'button__text--invisible': loading,
          })}
        >
          {text}
        </div>
      </a>
    );
  }

  return (
    <Comp
      className={classes}
      {...(submit ? { type: 'submit' } : {})}
      {...(ignoreForm ? { type: 'button' } : {})}
      id={String(id)}
      onClick={loading || done || disabled ? () => {} : onClick}
      onMouseDown={loading || done || disabled ? () => {} : onMouseDown}
      style={{ width }}
    >
      {icon && !loading && !text && renderIcon(icon)}
      <div
        className={cn(styles['button__text'], {
          'button__text--invisible': loading,
        })}
      >
        {text}
      </div>
      {loading && (
        <Loader
          type='Oval'
          color='#000'
          height={20}
          className={cn(styles['button__loader'], {
            [styles['button__loader--visible']]: loading,
          })}
        />
      )}
      {done && (
        <div className={styles['button__done']}>
          <CheckIcon className={styles['button__done--icon']} />
        </div>
      )}
    </Comp>
  );
};

export default Button;
