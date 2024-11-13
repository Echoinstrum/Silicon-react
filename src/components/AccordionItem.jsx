/* eslint-disable react/prop-types */
//körde disable på eslint react props då det gav errors om "missing props hela tiden" hittade lösningen på StackOverlow av användaren Gyandeep, och editerad av Kevin Ghadyani
import { useDarkMode } from "../context/DarkModeContext"

const AccordionItem = ({title, content, isOpen, toggle }) => {
    const { isDarkMode } = useDarkMode();

  return (
    <div>
        <div className="accordion-item cursor-pointer rounded-xl shadow drop-shadow-sm p-4">
            <div className="text-xl flex items-center justify-between" onClick={toggle}>
                <h3 className="text-h3-sm font-semibold">{title}</h3>
                <span className={`accordion-button flex justify-center items-center border-solid rounded-full min-h-9 min-w-9 ml-4 bg-gray-100 
                 ${isDarkMode && !isOpen ? 'bg-white bg-opacity-5' : ''} 
                 ${isOpen ? 'bg-primary text-white' : ''} 
                 ${isDarkMode && isOpen ? 'bg-primary text-white' : ''}`}>
                    <i className={`accordion-button-arrow fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} text-[10px] `} ></i>
                </span>
            </div>
            {isOpen && <p className={`accordion-toggle text-sm py-2 ${isDarkMode ? 'text-dimmedText' : 'text-[585C7B]'}`}>{content}</p>}         
        </div> 
    </div>
  )
}
export default AccordionItem