import { Divider } from "@mui/material";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MouseEvent, useState } from "react";
import WhoAmI from "../Components/WhoAmI";
import { Main, Sections } from "../styles/landing";

const Landing = () => {
  const [ mouseIn, seMouseIn ] = useState(false);

  function hide(e:MouseEvent<HTMLDivElement>){
    e.preventDefault()
    e.currentTarget.children[0].classList.toggle("hidden")
    e.currentTarget.children[1].classList.toggle("hidden")
    console.log(e.currentTarget.children[0])
  }

  return (
    <Main className="absolute overflow-hidden">
    <div className='flex h-[100vh] w-full justify-evenly items-center relative'>
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
          <a href="/whoami" className="block">Who am I?</a>
          <a className="block">What do I know?</a>
          <a className="block">Recommendations</a>
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
      <Divider/>
    </div>
    <div className='flex h-screen w-full relative'>
      <WhoAmI/>
    </div>
    </Main>
  )
}

export default Landing
