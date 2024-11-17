/* eslint-disable react/prop-types */
//körde disable på eslint react props då det gav errors om "missing props hela tiden" hittade lösningen på StackOverlow av användaren Gyandeep, och editerad av Kevin Ghadyani

import TestimonialsItem from "./TestimonialsItem";

const TestimonialsList = ({ testimonialsData }) => {
  return (
    <>
            <div className="flex flex-row gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialsItem key={index} testimonial={testimonial}/>
                ))}
            </div>
    </>
  )
}
export default TestimonialsList