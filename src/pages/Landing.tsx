import { ChevronDown, ChevronRight } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Sections } from "../styles/landing";

const Landing = () => {
  const [ mouseIn, seMouseIn ] = useState(false);

  function hide(e:MouseEvent<HTMLDivElement>){
    e.preventDefault()
    e.currentTarget.children[0].classList.toggle("hidden")
    e.currentTarget.children[1].classList.toggle("hidden")
    console.log(e.currentTarget.children[0])
  }

  return (
    <div className='flex h-[100vh] w-full justify-evenly items-center'>
      <Sections onMouseEnter={hide} onMouseLeave={hide}>
        <div className='flex'>
          <ChevronRight color="white"/>
          <h1 className="font-bold">
            About
          </h1>
        </div>

        <div className="hidden justify-middle">

          <div className='inline-flex'>
          <ChevronDown />
          <h1 className="font-bold">
            About
          </h1>
          </div>
          <h2>Who am I?</h2>
          <h2>What do I know?</h2>
          <h2>Recommendations</h2>
        </div>
      
      </Sections>
      <Sections onMouseEnter={hide} onMouseLeave={hide}>
        <div className='flex'>
          <ChevronRight color="white"/>
          <h1 className="font-bold">
            Projects
          </h1>
        </div>

        <div className="hidden justify-middle">

          <div className='inline-flex'>
          <ChevronDown />
          <h1 className="font-bold">
            Projects
          </h1>
          </div>
          <h2>Infinite-Gear</h2>
          <h2>WeWonder</h2>
          <h2>Portfolio</h2>
          <h2>Whatsapp MasSender</h2>
        </div>
      
      </Sections>
      
      <Sections onMouseEnter={hide} onMouseLeave={hide}>
        <div className='flex'>
          <ChevronRight color="white"/>
          <h1 className="font-bold">
            Contact
          </h1>
        </div>

        <div className="hidden justify-middle">

          <div className='inline-flex'>
          <ChevronDown />
          <h1 className="font-bold">
            Contact
          </h1>
          </div>
          <h2>LinkedIn</h2>
          <h2>Instagram</h2>
          <h2>Indeed</h2>
        </div>
      
      </Sections>
    </div>
  )
}

export default Landing