function AboutPage(){
    return (
        <>
      <section className="flex flex-col mx-w-[1240px] w-full">
            <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl dark:text-white mx-auto">About Us</h1>
    
            <p class="mb-3 text-lg font-light text-gray-500 md:text-xl dark:text-gray-400 mx-width-[1240px] text-white mx-auto pl-4">ROC Advisors is led by seasoned Executive and Entrepreneur Justin LaRocque. Over the past decade, Justin has been involved in several significant organizational changes such as:</p>
            {/* <p class="font-light text-gray-500 dark:text-gray-400 max-w-[1240px] text-white mx-auto pl-4">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p> */}
            <ul class="max-w-[1000px] space-y-1 text-white list-inside dark:text-gray-400 p-4 mx-auto">
                <li class="flex items-center">
                <svg class="w-8 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Finance lead on team that led over $250 million in cost transformation over a three-year period
            </li>
            <li class="flex items-center">
                <svg class="w-8 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Led company with industry changing technology to business exit while doubling revenues in a four-year period.
            </li>
            <li class="flex items-center">
                <svg class="w-8 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Launched and Exit of condo management business with a group of partners & customer stakeholders
            </li>
            <li class="flex items-center">
                <svg class="w-8 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Financial reporting for a public company during hostile takeover and disposal of lines of business
            </li>
            <li class="flex items-center"></li> 
        </ul>
        <p class="font-light text-gray-500 dark:text-gray-400 max-w-[1240px] text-white mx-auto pl-4">Along his executive journey, Justin developed a passion for driving change and helping people and organizations reach their goals and objectives. His educational and early career background is in finance with a Chartered Accountant designation from PwC and several senior finance positions in both public and private companies, with revenues ranging from $5 million to $3 billion.</p>
    </section>
    </>
    );
};

export default AboutPage;