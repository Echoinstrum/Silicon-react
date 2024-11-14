import axios from "axios";
import { useDarkMode } from "../context/DarkModeContext"
import { useEffect, useState } from "react";
import Accordion from "./Accordion";

const Faq = () => {
    const { isDarkMode } = useDarkMode();
    const [loading, setLoading] = useState(true)
    const [faqData, setFaqData] = useState([])

    useEffect(() => {
        const getFaqData = async () => {
            setLoading(true);
            try{
                const {data: response} = await axios.get('https://win24-assignment.azurewebsites.net/api/faq');
                setFaqData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        getFaqData();
    }, [])

    return (
      <>
          <section className="container pt-12 pb-10 md:pt-12 md:pb-8 lg:py-24 ">
              <div className="grid lg:grid-info-lg-layout grid-info-md-layout gap-x-36 gap-y-12 md:gap-y-8">
                  <div className="info-header flex flex-col gap-6 text-center lg:text-left">
                      <h2 className="text-[24px] md:text-h2 font-extrabold lg:w-[80%] md:w-[45%] w-[80%] mx-auto lg:mx-0">Any questions? Check out the FAQs</h2>
                      <p className={`${isDarkMode ? 'text-white text-opacity-70' : ''} text-[#565973] text-[18px] w-[85%] md:w-[55%] lg:w-[100%] mx-auto lg:mx-0`}>Still have unanswered questions and need to get in touch?</p>
                  </div>
                  <div className="contact hidden md:flex gap-7 lg:mb-36 max-h-36 flex-shrink">
                      <div className={`${isDarkMode ? 'border-white border-opacity-15' : ''} flex flex-col gap-3 border rounded-lg p-3 flex-grow`}>
                          <i className="fa-solid fa-phone-volume text-primary text-2xl"></i>
                          <span className={` ${isDarkMode ? 'text-dimmedText' : 'text-[#565973]'} text-sm`}>Still have questions?</span>
                          <span className="flex gap-3 items-center text-primary font-semibold">Contact us<i className="fa-regular fa-arrow-right"></i></span>
  
                      </div>
                      <div className={`${isDarkMode ? 'border-white border-opacity-15' : ''} flex flex-col gap-3 border rounded-lg p-3 flex-grow`}>
                          <i className="fa-solid fa-comment text-[#22C55E] text-2xl"></i>
                          <span className={` ${isDarkMode ? 'text-dimmedText' : 'text-[#565973]'} text-sm`}>Don&#39;t like phone calls?</span>
                          <span className="flex gap-3 items-center text-[#22C55E] font-semibold">Contact us<i className="fa-regular fa-arrow-right"></i></span>
                      </div>
                  </div>
                  <Accordion faqData={faqData}/>
                  <a href="#" className="btn-primary md:hidden max-w-[65%] mx-auto px-8 py-4 mt-4">
                      <span>Contact us Now</span>
                  </a>
              </div>
          </section>
      </>
    )
  }
  export default Faq