import { useDarkMode } from "../context/DarkModeContext"

const Subscribe = () => {
    const { isDarkMode } = useDarkMode();



  return (
    <>
        <section className="container">
            <div className={`${isDarkMode ? 'bg-white bg-opacity-5' : 'bg-[#F3F6FF]'} pt-16 pb-16 rounded-lg`}>
                <div className="grid grid-cols-[auto_auto_1fr] md:grid-cols-[auto_auto_1fr] gap-10 items-center  justify-center max-w-[85%] mx-auto">
                    <div className="items-center justify-center">
                        <img src="src\assets\img\notification.svg" alt="Image of a bell referencing to subscribing for notifications" />
                    </div>
                    <div className="col-start-2 col-end-4 md:col-auto">
                        <h4 className="text-h4-sm font-extrabold">Subscribe to our <br className="lg:hidden" />newsletter<span className="hidden lg:inline"> to stay <br />informed about latest updates</span></h4>
                    </div>
                    <form className="flex items-center justify-center col-start-1 col-end-4 md:col-auto">
                        <div className="flex relative w-full lg:w-[90%] border-solid border-white">
                            <i className="flex absolute items-center inset-y-0 pl-2 fa-light fa-envelope"></i>
                            <input className={`block p-3.5 pl-10 w-full text-sm rounded-s-lg border border-gray-400 ${isDarkMode ? 'bg-white bg-opacity-0 border border-white border-opacity-15' : ''}`} type="email" placeholder="Your mail" />
                            <button className="btn-primary rounded-s-none">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}
export default Subscribe