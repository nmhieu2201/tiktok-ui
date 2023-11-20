
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const Header = ({title, onClick}) => {

  return <header className={cx('header')}>
            <button type="" className={cx('back-btn')} onClick={onClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <h4 className={cx('header-title')}>{title}</h4>
        </button>
  </header>
}

export default Header

