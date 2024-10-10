import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

function Sidebar({ refs }) {

    const scrollToSection = (ref, offset = 50) => {
        const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - offset; 
        console.log(topPosition)
        if(ref && ref.current) {
            window.scrollTo({ top: topPosition, behavior: 'smooth' })
        }
    }

    const [activeSection, setActiveSection] = useState("");  // To track the active section

    useEffect(() => {
      const observerOptions = {
        root: null, // use the viewport
        rootMargin: "-50% 0px", // start observing when the section is halfway in view
        threshold: 0
      };
  
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);  // Set active section based on the section in view
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      Object.keys(refs).forEach((key) => {
        if (refs[key]?.current) {
          observer.observe(refs[key].current);
        }
      });
  
      return () => {
        Object.keys(refs).forEach((key) => {
          if (refs[key]?.current) {
            observer.unobserve(refs[key].current);
          }
        });
      };
    }, [refs]);

    return (
        <>
            <div className="sticky top-44">
                <h1 className="text-4xl font-bold text-center lg:text-left">Evangelos Kontonotas</h1>
                <p className="text-2xl pt-2 pb-8 text-center lg:text-left">Software Engineer</p>
                <ul className="text-lg flex flex-col items-center lg:items-start">
                    {Object.keys(refs).map((key) => (
                        <li key={key} className="group flex items-center pb-2">
                            <a 
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(refs[key], 50)
                                }}
                                className={`transition-all duration-300 ease-in-out ${
                                    activeSection === key ? "translate-x-2 font-bold text-lg" : "group-hover:translate-x-2"
                                }`}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="ml-1 mt-48 flex items-center justify-center lg:justify-start">
                    <li className="pr-4">
                        <a href="https://www.linkedin.com/in/evangelos-kontonotas-420ba723b/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href="https://github.com/Viggie1" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href="mailto:evangelos.kontonotas@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                    </li>
                </ul>
            </div> 
        </>
    )
}

export default Sidebar;
