import React from 'react';
import h from "./Header.module.css"
import HeaderText from "./HeaderText";

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.headerTop}>
                <div className={h.headerLogo}>

                </div>
                <div className={h.headerTitle}>

                </div>
                <div className={h.headerMenu}>

                </div>
            </div>
            <HeaderText/>
        </div>
    );
}

export default Header;