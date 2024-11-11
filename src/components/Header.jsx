import { useDarkMode } from "../context/DarkModeContext"

const Header = () => {
    const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className="container">
            <div className="items-center grid grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_auto_auto_auto] py-2 md:py-8">
                <div className="flex items-center gap-12">
                    <a href="index.html">
                        <img src="src\assets\img\siliconLogo.svg" alt="Silicon logo" />
                    </a>
                    <nav className="font-semibold hover:text-primary hover:underline active:text-primary active:underline">
                        <a href="#" className="hidden lg:block">Features</a>
                    </nav>
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        <span className="hidden md:block">Dark Mode</span>
                    </div>
                    <div className="flex gap-6 md:gap-12 items-center">
                        <label className="inline-flex cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={isDarkMode} onChange={toggleDarkMode}/>
                            <div className="relative w-11 h-6 bg-gray-600 peer-focus:outline-non rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <div className="lg:hidden tham tham-e-squeeze tham-w-6 h-6">
                            <div className="tham-box">
                                <div className="tham-inner bg-gray-600" />
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn-primary hidden  lg:block">
                        <i className="fa-thin fa-user mr-2"></i>
                        <span>Sign in / up</span>
                    </a>
                </div>
            </div>
        </header>
  )
}
export default Header