// src/components/layout/Header/Header.jsx
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <TopBar />
            <MainNav />
            <MobileMenu />
        </header>
    );
};

export default Header;
