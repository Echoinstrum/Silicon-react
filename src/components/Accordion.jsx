/* eslint-disable react/prop-types */
//körde disable på eslint react props då det gav errors om "missing props hela tiden" hittade lösningen på StackOverlow av användaren Gyandeep, och editerad av Kevin Ghadyani

import { useState } from "react"
import AccordionItem from "./AccordionItem"

const Accordion = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

  return (
    <div className="accordion flex flex-col gap-4 text-left">
        {faqData.map((item, index) => (
            <AccordionItem 
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            toggle ={() => handleToggle(index)}
            />
        ))}
    </div>
  )
}
export default Accordion