import { useDarkMode } from "../context/DarkModeContext"

const Faq = () => {
    const { isDarkMode } = useDarkMode();
    

    return (
      <>
          <section className="container pt-12 pb-10 md:pt-12 md:pb-8 lg:py-24 ">
              <div className="grid lg:grid-info-lg-layout grid-info-md-layout gap-x-36 gap-y-12 md:gap-y-8">
                  <div className="info-header flex flex-col gap-6 text-center lg:text-left">
                      <h2 className="text-[24px] md:text-h2 font-extrabold lg:w-[80%] md:w-[45%] w-[80%] mx-auto lg:mx-0">Any questions? Check out the FAQs</h2>
                      <p className="text-[#565973] text-[18px] w-[85%] md:w-[55%] lg:w-[100%]   mx-auto lg:mx-0">Still have unanswered questions and need to get in touch?</p>
                  </div>
                  <div className="contact hidden md:flex gap-7 lg:mb-36 max-h-36 flex-shrink">
                      <div className="flex flex-col gap-3 border rounded-lg p-3 flex-grow">
                          <i className="fa-solid fa-phone-volume text-primary text-2xl"></i>
                          <span className={` ${isDarkMode ? 'text-dimmedText' : 'text-[#565973]'} text-sm`}>Still have questions?</span>
                          <span className="flex gap-3 items-center text-primary font-semibold">Contact us<i className="fa-regular fa-arrow-right"></i></span>
  
                      </div>
                      <div className="flex flex-col gap-3 border rounded-lg p-3 flex-grow">
                          <i className="fa-solid fa-comment text-[#22C55E] text-2xl"></i>
                          <span className={` ${isDarkMode ? 'text-dimmedText' : 'text-[#565973]'} text-sm`}>Don&#39;t like phone calls?</span>
                          <span className="flex gap-3 items-center text-[#22C55E] font-semibold">Contact us<i className="fa-regular fa-arrow-right"></i></span>
                      </div>
                  </div>
                  <div className="accordion flex flex-col gap-4 text-left">
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm p-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-h3-sm font-semibold">Is any of my personal information stored in the App?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm px-4 py-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-h3-sm font-semibold">What formats can i download my transaction history in?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm px-4 py-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-h3-sm font-semibold">Can i schedule future transfers?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm px-4 py-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-h3-sm font-semibold">When can i use Banking App services?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm px-4 py-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-[h3-sm] font-semibold">Can i create my own password that is easy for me to remember?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                      <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm px-4 py-4">
                          <div className="text-xl flex items-center justify-between">
                              <h3 className="text-h3-sm font-semibold">What happens if i forget or lose my password?</h3>
                              <span className="accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100"><i className="accordion-button-arrow fa-solid fa-angle-down text-[10px]"></i></span>
                          </div>
                          <p className="accordion-toggle text-[#585C7B] text-sm hidden py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse labore quisquam recusandae architecto autem veritatis repudiandae, facilis ab officia expedita, quasi, quo odit obcaecati voluptate. Voluptatem eius optio sed quaerat maiores nisi minima perspiciatis consequuntur dolores ab praesentium obcaecati voluptatibus fuga impedit, minus ut, voluptas et dolore est temporibus?</p>
                      </div>
                  </div>
                  <a href="#" className="btn-primary md:hidden max-w-[65%] mx-auto px-8 py-4 mt-4">
                      <span>Contact us Now</span>
                  </a>
              </div>
          </section>
      </>
    )
  }
  export default Faq