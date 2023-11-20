
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'
import React, { useState } from 'react'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles)

const Menu = ({ children, items }) => {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParrent) {
                    setHistory((pr) => [...pr, item.children]);
                }
            }} />
        })
    }

    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12,8]}
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title="Language" onClick={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }
            }
        >
            {children}

        </Tippy>
    )
}

export default Menu

