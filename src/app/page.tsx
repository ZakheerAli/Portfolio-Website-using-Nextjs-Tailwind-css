import Navbar from "./components/navbar"
import About from "./components/about"
import Skills from "./components/skills"
import Link from "next/link"
import Project from "./components/project"
import Contact from "./components/contact"
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen px-10 pt-28  bg-white flex  justify-around">
        <div className="w-full text-center mt-32">
          <h1 className="text-7xl font-extrabold text-zinc-500
          mb-5">HI, MY NAME IS <span className="text-7xl font-extrabold text-orange-500">ZAKHEER ALI</span></h1>
          <h4 className="text-4xl font-bold  mt-5 text-orange-500">FRONT END DEVELOPER</h4>
          <p className="text-lg font-semibold mt-5 mb-10 text-zinc-500 ">With a passion for design and a focus on user-centered development, I build modern, responsive websites that look great and work smoothly on any device. Whether creating dynamic resumes, interactive portfolios, or complex web applications, I am driven by a commitment to clean code and effective design.</p>
          <Link href="/contact">
            <button className="px-3 py-3 bg-orange-500 rounded-lg font-bold hover:bg-slate-300 hover:font-bold hover:text-orange-500">GET IN TOUCH</button>
          </Link>

        </div>
      </div>
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}
