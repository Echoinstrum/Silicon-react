const Hero = () => {
  return (
    <main className="container">
        <section className="pb-5 md:p-0 mt-6">
            <div className="md:grid md:grid-areas-layout md:grid-cols-[1fr_1fr] lg:grid-areas-desktop-layout gap-20 md:mt-12 lg:mt-44 lg:gap-8">
                <div className="grid-in-header text-center lg:text-left mb-8 md:mb-20 lg:mb-4 lg:max-w-[50%]">
                    <h1 className="text-center text-4xl md:text-5xl lg:text-[56px] md:leading-snug font-extrabold md:max-w-[80%] md:mx-auto lg:ml-0 lg:text-left">Manage All Your Money in One App</h1>
                </div>
                <div className="grid-in-content text-center md:text-left mb-8 md:mb-12 lg:max-w-[75%] lg:mb-20">
                    <p className="text-lg mb-9">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12 lg:mb-36">
                        <a className="btn-black"  href="#"><img className="mx-auto"  src="src\assets\img\appstore-light.svg.svg" alt="Appstore download button" /></a>
                        <a className="btn-black"  href="#"><img className="mx-auto"  src="src\assets\img\googleplay-light.svg.svg" alt="Google Play download button" /></a>
                    </div>
                    <a className="flex justify-center md:justify-start gap-4 items-center">
                        <span className="flex justify-center items-center border-solid rounded-full h-12 w-12 bg-white lg:mt-16"><i className="fa-solid fa-angle-down"></i></span>
                        <span className=" lg:mt-16">Discover more</span>
                    </a>
                </div>
                <div className="relative grid-in-images hidden md:block">
                    <img className="absolute -z-10 bottom-0 right-0 w-[70%] lg:w-[65%]" src="src\assets\img\iPhone 12 Pro creditcards.svg" alt="Image of Iphone showing the cards look in app" />
                    <img className="absolute -z-20 bottom-0 right-[120px] lg:right-56 w-[70%] lg:w-[65%]" src="src\assets\img\iPhone 12 Pro budget.svg" alt="Image of Iphone showing how the budget look in app" />
                </div>
            </div>
        </section>
    </main>
  )
}
export default Hero