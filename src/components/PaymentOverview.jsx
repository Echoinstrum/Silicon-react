import { useDarkMode } from "../context/DarkModeContext"

const PaymentOverview = () => {
    const { isDarkMode } = useDarkMode();

  return (
    <>
        <section className="hidden lg:block py-32">
            <div className="container grid justify-center">
                <div className="grid grid-cols-[50%_50%] grid-rows-[500px_500px] gap-16 justify-center items-center w-[75%] mx-auto">
                    <div className="flex flex-col items-start gap-10">
                        <h3 className="text-h3 font-extrabold">Make your money <br /> transfer simple and clear</h3>
                        <div className="flex flex-col gap-4">
                            <span className={`flex gap-2 items-center ${isDarkMode ? 'text-dimmedText' : ''}`}><i className="fa-sharp fa-light fa-circle-check text-primary"></i> Banking transactions are free or you</span>
                            
                            <span className={`flex gap-2 items-center ${isDarkMode ? 'text-dimmedText' : ''}`}><i className="fa-sharp fa-light fa-circle-check text-primary"></i> No monthly cash commission</span>
                            
                            <span className={`flex gap-2 items-center ${isDarkMode ? 'text-dimmedText' : ''}`}><i className="fa-sharp fa-light fa-circle-check text-primary"></i> Manage payments and transactions online</span>
                        </div>
                        <a href="#" className="btn-primary hidden  lg:block px-6 py-3">
                            <span className="text-sm font-semibold mr-2">Learn more</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="flex justify-start relative">
                        <img className="mb-24" src="src\assets\img\SmallBalanceStatistic.svg" alt="small image of checking your balance" />
                        <img className="absolute bottom-10 right-3" src="src\assets\img\SendMoneyToContact.svg" alt="small image showing easy accessible contacts for sending money" />
                    </div>
                    <div className="relative">
                        <img className="h-[450px]" src="src\assets\img\ContactsList.svg" alt="small image showing a contact list" />
                        <img className="absolute bottom-16 right-5" src="src\assets\img\CreditCard.svg" alt="small image of a credit card" />
                    </div>
                    <div className="flex flex-col items-start gap-12">
                        <h3 className="text-h3 font-extrabold">Receive payment from international bank details</h3>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-4">
                                <span className="flex items-center justify-center w-12 h-12 bg-[rgba(99,102,241,0.08)] rounded-lg">
                                    <img className="w-6 h-6" src="src\assets\img\BankCardIcon.svg" alt="Icon of a bank card referencing to managing payments easy online" />
                                </span>
                                <span className={`flex-1 ${isDarkMode ? 'text-dimmedText' : ''}`}>Manage your payments online. Lorem ipsum dolor sit amet consectetur</span> 
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="flex items-center justify-center w-12 h-12 bg-[rgba(99,102,241,0.08)] rounded-lg">
                                    <img className="w-6 h-6" src="src\assets\img\WalletIcon.svg" alt="Icon of a wallet referencing to easily checking your balance" />
                                </span>
                                <span className={`flex-1 ${isDarkMode ? 'text-dimmedText' : ''}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus culpa alias</span> 
                            </div>
                        </div>
                        <a href="#" className="btn-primary hidden lg:block px-6 py-3">
                            <span className="text-sm font-semibold mr-2">Learn more</span>
                            <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default PaymentOverview