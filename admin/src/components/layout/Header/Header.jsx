import React from "react";
import SearchBar from "./SearchBar";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            <SearchBar />
            <div className="flex items-center space-x-4">
                <NotificationBell />
                <UserMenu />
            </div>
        </header>
    );
};

export default Header;
