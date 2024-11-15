
const StarRating = ({ testimonial }) => {
    const maxStars = 5;
    const testimonialRating = testimonial.starRating
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        if(i < testimonialRating) {
            stars.push('filled');
        } else {
            stars.push('empty')
        } 
    }

  return (
    <>
        <div className="flex gap-1 mt-4">
            {stars.map((star, index) => star === 'filled' ? 
                (
                <i key={index} className="fa-solid fa-star text-[#FFBA08]" />
                ) : 
                ( 
                <i key={index} className="fa-thin fa-star" />
                )
            )}
        </div>
    </>
  )
}
export default StarRating