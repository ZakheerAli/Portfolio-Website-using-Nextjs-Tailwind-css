import Navbar from "../components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-full text-center px-20 pt-28 pb-10 bg-white">
                <h1 className="text-7xl mt-28 text-slate-500 font-extrabold">ABOUT <span className="text-7xl text-orange-500 font-extrabold">ME</span></h1>
                <h3 className="text-3xl mt-5 mb-12 text-slate-500 font-bold">GET TO KNOW ME!</h3>

                {/* Introduction Section */}
                <h4 className="text-2xl mt-5 text-orange-500 font-bold">INTRODUCTION</h4>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    Hello! I am Zakheer Ali, a front-end developer with a passion for creating impactful web experiences. 
                    My journey began in Web Development. I transitioned into front-end development with a strong interest in 
                    combining creativity with technology to solve real-world challenges.
                </p>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    Technical Skills and Tools: My expertise lies in using HTML, CSS, JavaScript, TypeScript, and frameworks 
                    like Next.js and Tailwind CSS. I have built a range of projects, from static websites to interactive applications, 
                    and consistently aim for pixel-perfect design and responsive layouts.
                </p>

                {/* Skills List */}
                <div className="text-lg mt-5 text-slate-500 font-bold">
                    <p>Skills Highlight:</p>
                    <ul className="list-disc list-inside">
                        <li>Languages: HTML, CSS, JavaScript, TypeScript</li>
                        <li>Frameworks: Next.js, Tailwind CSS</li>
                        <li>Tools: Git, Figma, Vercel, GitHub</li>
                    </ul>
                </div>

                {/* Experience Section */}
                <h4 className="text-2xl mt-10 text-orange-500 font-bold">EXPERIENCE</h4>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    Through my hands-on experience in building projects like an Amazon clone, dynamic resume builder, and a modern 
                    landing page with animations, I have developed a keen eye for design, usability, and efficient code. Recently, 
                    Ihave applied these skills in projects.
                </p>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    Development Philosophy: I believe that great web development goes beyond aesthetics; it’s about creating seamless, 
                    enjoyable experiences for users. I am dedicated to writing clean, maintainable code and implementing best practices 
                    in accessibility, performance, and cross-browser compatibility.
                </p>

                {/* Education Section */}
                <h4 className="text-2xl mt-10 text-orange-500 font-bold">EDUCATION</h4>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    I have completed Intermediate from SM science college. Currently, I am learning AI, Web 3.0, and Metaverse from 
                    GIAIC (Governor Initiative of Artificial Intelligence & Computing) as well as I am learning Digital Marketing and 
                    Freelancing from Bano Qabil 3.0.
                </p>
                <p className="text-lg mt-5 text-slate-500 font-bold">
                    I am a continuous learner, always exploring the latest in web technologies to stay ahead in an ever-evolving 
                    industry. Beyond coding, I’m passionate about learning AI, Web 3.0, and the Metaverse to expand my skills and 
                    contribute to the future of digital technology.
                </p>
            </div>
        </div>
    );
}
