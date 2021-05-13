import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import Siderow from './Siderow/Siderow';

const Sidebar = () => {
    return (
        <div className="sidebar w-30">
            <Siderow src="https://avatars.githubusercontent.com/u/73466036?v=4" title="Tareq Hassan" />
            <Siderow Icon={LocalHospital} title='COVID-19 Information Center' />
            <Siderow Icon={EmojiFlags} title='Pages' />
            <Siderow Icon={People} title='Friends' />
            <Siderow Icon={Chat} title='Messenger' />
            <Siderow Icon={Storefront} title='Marketplace' />
            <Siderow Icon={VideoLibrary} title='Videos' />
            <Siderow Icon={ExpandMoreOutlined} title='More' />
        </div>
    );
};

export default Sidebar;