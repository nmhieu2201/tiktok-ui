import React from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleQuestion, faCoins, faEarthAmericas, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'

import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

import Button from '~/components/Button'
import styles from './Header.module.scss'
import image from '~/assets/images'

import { Menu } from '~/components/Popper';
import { MessageIcon, InboxIcon ,UploadIcon} from '~/components/Icons';
import Search from '~/components/Layout/Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

const Header = () => {

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to:'/@hieu'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to:'/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to:'/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to:'/logout',
            separate:true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok" />

                </div>

                <Search />

                <div className={cx('action')}>

                    {currentUser ? (<>
                        <Tippy content='Upload Video' placement='bottom' >
                             <button type="" className={cx('action-btn','upload')}>
                                <UploadIcon className={cx('upload-icon')} />
                                Upload
                            </button>
                        </Tippy>

                        <Tippy content='Message' placement='bottom'>
                            <button type="" className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>

                        <Tippy content='Inbox' placement='bottom'>
                            <button type="" className={cx('action-btn')}>
                                <InboxIcon />

                                <sup className={cx('sup')}>
                                    4
                                </sup>
                            </button>
                        </Tippy>

                    </>) :
                        <>
                            <Button text >Upload</Button>
                            <Button primary >Log in</Button>
                        </>
                    }
                    <Menu items={currentUser? userMenu : MENU_ITEMS} >
                        {
                            currentUser ? (<img className={cx('user-avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/978b025b124de41e9476b2a0bb76bd98~c5_100x100.jpeg?x-expires=1700305200&x-signature=HhXb98UY9LnfTM7K7UgYd%2FtpqDI%3D" alt="Quytquyt" />) : <> <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button></>
                        }
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header