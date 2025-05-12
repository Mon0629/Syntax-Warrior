import './customstyle.css'
import Warrior from '../assets/gameasset/warrior.png';
import Night from '../assets/gameasset/night.png';
import Knight from '../assets/gameasset/knight.png';


function LandingPage() {
  return (
    <div className="fixed inset-0 flex flex-col">
        <div className='custom-gradient flex-1 flex flex-col items-start p-25'>
            <h1 className='font-[KnightWarrior] text-8xl'>Syntax Warrior</h1>
            <div className='items-start ml-0 mt-10 w-2/3 font-[Inter] italic text-justify'>
                <p> Experience the exhilarating fun of learning as you battle and game your way through our revolutionary multiplayer coding experience. 
                    Quench your insatiable thirst for knowledge while satisfying your craving for excitement. 
                    Feed your competitive spirit in epic coding battles that challenge both mind and reflexes. 
                    Click 'Play Now' to immerse yourself in heart-pounding action, 
                    where every line of code brings adrenaline-pumping thrills and triumphant victories.
                    Join a vibrant community of fellow code warriors and rise through the ranks - 
                    the ultimate fusion of education and entertainment awaits!
                </p>
            </div>
            <div className='mt-20 flex flex-col gap-5'>
                <button className='button bg-white text-[#1C1E3D] w-[13rem] hover:bg-gray-200'>
                    Play Now
                </button>
                <button className='button border border-solid border-white text-white w-[13rem] hover:bg-gray-800'>
                    Watch Tutorial
                </button>
            </div>
            <div className='absolute bottom-1 right-0 w-2/3 h-full flex flex-row justify-end items-end'>
                <img src={Knight} className='h-[300px] w-[350px] relative z-20 -mr-30'/>
                <img src={Night} className='h-[400px] w-[350px] relative z-10 -mr-60'/>
                <img src={Warrior} className='h-[700px] w-[600px]'/>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;