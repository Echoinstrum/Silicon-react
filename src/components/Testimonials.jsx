const Testimonials = () => {
  return (
    <>
        <section className="hidden lg:block bg-[#F3F6FF] py-24">
            <div className="container grid grid-cols-[300px_1fr] gap-32">
                <h2 className="text-4xl font-extrabold">Clients are Loving Our App</h2>
                <div className="flex flex-row gap-6">
                    <div className="bg-white relative flex flex-col gap-6 p-6 rounded-lg">
                            <span className="absolute flex items-center justify-center rounded-lg w-11 h-11 bg-primary -top-7"><i className="fa-sharp fa-solid fa-quote-left text-white text-2xl"></i></span>
                        <div className="flex gap-1 mt-4">
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-thin fa-star"></i>
                        </div>
                        <p className="text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi aperiam aut natus, debitis maiores dicta, delectus eius veniam itaque perspiciatis beatae. Veritatis, porro asperiores?</p>
                        <div className="flex gap-3">
                            <img src="src\assets\img\testimonial-img-1.svg" alt="image of a customer on their review" />
                            <div className="flex flex-col">
                                <span className="text-[16px] font-bold">Fannie Summers</span>
                                <span className="text-sm text-gray-600">Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white relative flex flex-col gap-6 p-6 rounded-lg">
                        <span className="absolute flex items-center justify-center rounded-lg w-11 h-11 bg-primary -top-7"><i className="fa-sharp fa-solid fa-quote-left text-white text-2xl"></i></span>
                        <div className="flex gap-1 mt-4">
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                            <i className="fa-solid fa-star text-[#FFBA08]"></i>
                        </div>
                        <p className="text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi aperiam aut natus, debitis maiores dicta, delectus eius veniam itaque perspiciatis beatae. Veritatis, porro asperiores?</p>
                        <div className="flex gap-3">
                        <img src="src\assets\img\testimonial-img-2.svg" alt="image of a customer on their review" />
                            <div className="flex flex-col">
                                <span className="text-[16px] font-bold">Albert Flores</span>
                                <span className="text-sm text-gray-600">Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default Testimonials