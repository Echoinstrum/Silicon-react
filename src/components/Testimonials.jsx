import { useEffect, useState } from "react";
import TestimonialsList from "./TestimonialsList";
import axios from "axios";


const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        const getTestimonialsData = async () => {
            try{
                const {data: response } = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials')
                setTestimonialsData(response)
            } catch (error) {
                console.error(error.message)
            }          
        }
            getTestimonialsData();
    }, [])

  return (
    <>
        <section className="hidden lg:block py-24">
        <div className="container grid grid-cols-[300px_1fr] gap-32">
        <h2 className="text-4xl font-extrabold">Clients are Loving Our App</h2>
            <TestimonialsList testimonialsData={testimonialsData}/>
        </div>
        </section>
    </>
  )
}
export default Testimonials