import { useDarkMode } from "../context/DarkModeContext"


const Features = () => {

    const {isDarkMode} = useDarkMode();

  return (
    <>
        <section className="container grid lg:grid-cols-[1fr_2fr] gap-8 mb-12 md:mb-28">
            <div className="hidden lg:block">
                <img src="src\assets\img\TransactionsVisaOverlapping.svg" alt="Image of Iphone showing how transactions look in app" />
            </div>
            <div>
                <div>
                    <h1 className="text-h1 font-extrabold text-center lg:text-start mb-4">App Features</h1>
                </div>
                <div className="grid gap-10 lg:gap-20">
                    <p className="text-center lg:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odio itaque incidunt cumque velit quos cupiditate fuga, ea, temporibus cum officia, optio provident! Ad, vitae.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <li className="flex items-start gap-6">
                            <img src="src\assets\img\paymentCardIcon.svg" alt="Icon of a bank card referencing to Easy payments" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Easy Payments</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>Make quick and secure payments with just a few taps, simplifying your daily transactions.</p>  
                            </div>
                        </li>
                        <li className="flex items-start gap-6">
                            <img src="src\assets\img\DataSecurityIcon.svg" alt="icon of a shield referencing to data security" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Data Security</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>Your personal data is safeguarded with advanced encryption, ensuring a secure banking experience.</p>  
                            </div>
                        </li>
                        <li className="flex items-start gap-6">
                            <img src="src\assets\img\StatisticsIcon.svg" alt="icon of statistics referencing to Cost statistics" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Cost Statistics</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>Get clear insights into your spending habits, helping you stay on top of your finances.</p>  
                            </div>
                        </li>
                        <li className="flex items-start gap-6">
                            <img src="src\assets\img\SupportIcon.svg" alt="Support Icon referencing to Support 24/7" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Support 24/7</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>Our support team is available anytime, providing help whenever you need it, day or night.</p>  
                            </div>
                        </li>
                        <li className="flex items-start gap-6">
                            <img src="src\assets\img\CashbackIcon.svg" alt="Icon of wallet referencing to regular cashback" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Regular Cashback</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>Enjoy cashback on your purchases, giving you savings and rewards as you shop.</p>  
                            </div>
                        </li>
                        <li className="flex items-start gap-6 ">
                            <img src="src\assets\img\TopStandardsIcon.svg" alt="icon of a happy smiley referencing to top standards" />
                            <div className="flex flex-col gap-4">
                                <h3 className="text-h3-sm font-extrabold">Top Standards</h3>
                                <p className={`${isDarkMode ? 'text-dimmedText' : ''}`}>We maintain top standards in all services, delivering a consistently premium user experience.</p>  
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
export default Features