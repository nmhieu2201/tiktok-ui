import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import image from '~/assets/images'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img src={image.logo} alt="Tiktok"/>
          </div>
          <div className={cx('search')}>
            <input type="text" placeholder='Search accounts and video' spellCheck={false}/>
            <button type="" className={cx('close')}>
            <FontAwesomeIcon icon={faCircleXmark} />
              {/* Clear */}
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            {/* Loading */}
            <button type="" className={cx('search-button')}>
              {/* Search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={cx('action')}>
            
          </div>
      </div>
    </header>
  )
}

export default Header