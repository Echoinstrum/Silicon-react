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