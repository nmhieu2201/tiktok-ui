import React  from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem({data}) {
    return <div className={cx('wrapper')}>
                 <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                 <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    </p>
                    <span className={cx('username')}>{data.nickname}</span>
                 </div>
            </div>
}

export default AccountItem;