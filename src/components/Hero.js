import Typed from 'react-typed';
import logo from "../assets/logo.png"

function Hero(){
    return (
       
            <div className="xl: max-w-[1240px] w-full mx-auto text-center flex items-center flex-col justify-center text-white">
                <img className='mx-auto w-[15rem]' src={logo} alt="roc advisors logo outline of mountain peaks"></img>
               <h4 className="md:text-5xl sm:text-6xl font-bold text-yellow"> Customized Finance Teams</h4>
               <div className='flex row-auto justify-center items-center mt-8'>  
                    <p className="md:text-3xl sm:text-4xl text-xl fomt-bold mx-1"> Fast, Flexible, and Efficient </p>
                    <Typed className='md:text-3xl sm:text-4xl text-xl fomt-bold text-white' strings={['Budgets', 'Traning', 'Consulting']} typeSpeed={90} backSpeed={60} loop />
                </div>
                <p className='mt-8 w-3/4 items-center'> With senior finance professionals retiring and junior's favoring a new workstyle, customized finance teams are the better equipped for small and medium businesses. Connect with us explore how our team can <span className='text-yellow font-bold'> decrease </span> your cost structure while <span className='text-yellow font-bold'> increasing </span> operationtionally efficiency through our accounting and finance services.</p>
                <button className='bg-white text-slate font-medium w-[200px] rounded-lg my-6 py-1' href=""> Get Started</button>
            </div>
       
    );
};

export default Hero;