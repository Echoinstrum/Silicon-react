/* eslint-disable react/prop-types */
//körde disable på eslint react props då det gav errors om "missing props hela tiden" hittade lösningen på StackOverlow av användaren Gyandeep, och editerad av Kevin Ghadyani

import { useDarkMode } from "../context/DarkModeContext"
import StarRating from "./StarRating";

const TestimonialsItem = ({ testimonial }) => {
    const { isDarkMode } = useDarkMode();

  return (
    <>
        <div className={`${isDarkMode ? 'bg-white bg-opacity-5' : 'bg-white'} relative flex flex-col gap-6 p-6 rounded-lg`}>
            <span className="absolute flex items-center justify-center rounded-lg w-11 h-11 bg-primary -top-7"><i className="fa-sharp fa-solid fa-quote-left text-white text-2xl"></i></span>
            <StarRating testimonial={testimonial}/>
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