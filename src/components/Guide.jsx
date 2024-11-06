const Guide = () => {
  return (
    <>
        <section className="bg-[#F3F6FF]">
            <div className="container grid gap-10 text-center justify-center">
                <div className="pt-16">
                        <h1 className="text-h1">How Does It Work?</h1>
                </div>
                <div className="grid md:grid-cols-[1fr_1fr_1fr] justify-center items-center">
                    <img className="w-full hidden lg:block" src="src\assets\img\Iphone12ProMyBudgetNotchCut.svg" alt="Image of Iphone showing your budget" />
                    <img className="w-full hidden md:block lg:hidden" src="src\assets\img\yourCardsCutNotch.svg" alt="Image of Iphone showing your cards" />
                    <img className="w-full hidden lg:block"  src="src\assets\img\Iphone12ProYourCard.svg" alt="Image of Iphone showing your cards" />
                    <img className="w-full md:block lg:hidden"  src="src\assets\img\Iphone12ProBalance.svg" alt="Image of Iphone showing showing your balance" />
                    <img className="w-full hidden lg:block opacity-80" src="src\assets\img\MyBalanceCutNotch.svg" alt="Image of Iphone showing your balance" />
                    <img className="w-full hidden md:block lg:hidden" src="src\assets\img\transferCutNotch.svg" alt="Image of Iphone showing transfers in app" />
                </div>
                <div className="flex flex-col gap-4 sm:max-w-[60%] md:max-w-[70%] mx-auto pb-14">
                    <h3 className="text-h3-sm font-extrabold sm:block md:hidden">Transfers to people from your contact list</h3>
                    <h3 className="text-h3 font-extrabold hidden md:block lg:hidden">Step 3. Transfers to people from your contact list</h3>
                    <h3 className="text-h3 font-extrabold hidden lg:block">Latest transaction history</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, repellat modi optio dolorem amet possimus sunt.</p>
                </div>
            </div>
        </section>
    </>
  )
}
export default Guide