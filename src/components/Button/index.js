import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({to, href, onClick,outline = false, rounded = false, primary = false,small = false,text=false, large = false, disabled = false, leftIcon,
    rightIcon, children, ...passProps }) => {
  let Component = 'button'

  const props = {
    onClick,...passProps,
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
    text
  });

  if (disabled) {
    Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    })
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Component = Link;
  }
  else if (href) {  
    props.href = href
    Component = 'a'
   }
  return (
    <Component className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  )
}

export default Button