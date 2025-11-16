import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        /** Create my header with dark bcground, sticky and top 0 so it sticks to the top of the page */
        <header className="bg-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center px-10 ">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;