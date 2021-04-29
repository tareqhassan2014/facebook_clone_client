import { faComment, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, IconButton } from '@material-ui/core';
import { AppsSharp, ExpandMore, Home, Notifications, OndemandVideo, Search, SportsEsports, StorefrontOutlined } from '@material-ui/icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook logo" />
                <div className="header__input">
                    <Search />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option__active">
                    <Home fontSize='large' className="headr__middle__icon"/>
                </div>
                <div className="header__option">
                    <OndemandVideo fontSize='large' className="headr__middle__icon"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize='large' className="headr__middle__icon"/>
                </div>
                <div className="header__option">
                <FontAwesomeIcon icon={faUsers} size='2x' className="headr__middle__icon" />
                </div>
                <div className="header__option">
                    <SportsEsports fontSize='large' className="headr__middle__icon"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Tareq</h4>
                </div>
                <IconButton>
                    <AppsSharp />
                </IconButton>
                <IconButton>
                    <FontAwesomeIcon icon={faComment} />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;