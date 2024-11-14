import { useDarkMode } from "../context/DarkModeContext"

const TestimonialsItem = ({ testimonial }) => {
    const { isDarkMode } = useDarkMode();

  return (
    <>
        <div className={`${isDarkMode ? 'bg-white bg-opacity-5' : 'bg-white'} relative flex flex-col gap-6 p-6 rounded-lg`}>
            <span className="absolute flex items-center justify-center rounded-lg w-11 h-11 bg-primary -top-7"><i className="fa-sharp fa-solid fa-quote-left text-white text-2xl"></i></span>
            <div className="flex gap-1 mt-4">
                <i className="fa-solid fa-star text-[#FFBA08]"></i>
                <i className="fa-solid fa-star text-[#FFBA08]"></i>
                <i className="fa-solid fa-star text-[#FFBA08]"></i>
                <i className="fa-solid fa-star text-[#FFBA08]"></i>
                <i className="fa-thin fa-star"></i>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-dimmedText' : ''}`}>{testimonial.comment}</p>
            <div className="flex gap-3">
                <img src={testimonial.avatarUrl} alt={testimonial.author} />
                <div className="flex flex-col">
                    <span className="text-[16px] font-bold">{testimonial.author}</span>
                    <span className="text-sm text-gray-600">{testimonial.jobRole}</span>
                </div>
            </div>
        </div>
    </>
  )
}
export default TestimonialsItem