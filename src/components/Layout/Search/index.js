import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import styles from './search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const searchInputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .catch(() => setLoading(false))

    }, [searchValue])

    const handleHideResult = () => {
        setShowResult(false)
    }

    return <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive={true}
        onClickOutside={handleHideResult}
        render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    {
                        searchResult.map((result) =>
                            <AccountItem key={result.id} data={result} />
                        )
                    }
                </PopperWrapper>
            </div>
        )}
    >
        <div className={cx('search')}>
            <input ref={searchInputRef}
                value={searchValue}
                type="text"
                placeholder='Search accounts and video'
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />

            {!!searchValue && !loading && (
                <button type="" className={cx('close')} onClick={() => {
                    setSearchValue('');
                    setSearchResult([])
                    searchInputRef.current.focus();
                }}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                    {/* Clear */}
                </button>
            )}
            {
                loading &&
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            }
            {/* Loading */}

            <button type="" className={cx('search-button')}>
                {/* Search */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>
}

export default Search;