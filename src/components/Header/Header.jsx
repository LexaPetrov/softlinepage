import React from 'react';
import h from "./Header.module.css"
import HeaderText from "./HeaderText";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <div className={h.header}>
            <HeaderTop />
            <HeaderText/>
        </div>
    );
}

export default Header;