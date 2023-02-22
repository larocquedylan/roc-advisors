function SolutionPage(){
    return (
        <>
        <section className="flex flex-col text-white justify-between items-center max-w-[1240px] mx-auto px-4"> 
        <h1 className="text-3xl p-6 text-yellow">Services </h1>
            <p className="py-2">The core focus of our company is offering your company a Customized Finance Team (CFT), starting with fractional CFOs. However, we also offer finance workshops that we tailor to your company.</p>
            <p className="py-2"> We meet with your team to understand your finance needs. From there, we work with our roster to propose your CFT. The primary benefit is you are able to obtain greater specialized expertise, as needed, while ensuring your reporting is delivered in a timely and accurate manner. It’s simple, you get more value for the same cost as maintaining an in house team. </p>
            <p>Workshops </p>
            <section className="flex flex-col md:flex-row">

                <div class="block max-w-sm p-6 bg-slate border border-gray-200 rounded-lg shadow hover:bg-slate-light hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 cursor-pointer">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow dark:text-white">Build a Budget</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Growing your business at warp speed or just focusing on what you love? If so, it’s easy to put budgets off to the side. However, budgets are critical to your business’s success. We work closely with you and your team to develop custom budget templates based on your historical results and team input.</p>
                </div>

                <div class="block max-w-sm p-6 bg-slate border border-gray-200 rounded-lg shadow hover:bg-slate-light hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 cursor-pointer">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow dark:text-white">Finance Educational Training</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Do you ever struggle to get your team on the same page about the company’s financial results? Finance is seldom taught and we find most managers are not well equipped with finance knowledge to drive your business forward. Invest in your team today with a one-day finance tutorial. We review your financials and build a custom one-day program to get everyone talking the same language and driving your business forward!</p>
                </div>

                <div class="block max-w-sm p-6 bg-slate border border-gray-200 rounded-lg shadow hover:bg-slate-light hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4 cursor-pointer">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-yellow dark:text-white">Prepare for Exit – Finance Due Diligence</h5>
                    <p class="font-normal dark:text-gray-400">Having your finances in good order are critical to successful exit. Invest in your business today with a financial review of your company that will identify any financial processes that could benefit from best practise, as well as how to best frame your financials. This investment could be worth millions as you exit.</p>
                </div>
            </section>
        
        </section>
        
        </>
    );
};

export default SolutionPage;