import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

function Sidebar() {
    return (
        <>
            <div className="sticky top-44">
                <h1 className="text-4xl font-bold">Evangelos Kontonotas</h1>
                <p className="text-2xl pt-2 pb-8">Software Engineer</p>
                <ul>
                    <li className="pb-2">About</li>
                    <li className="pb-2">Experience</li>
                    <li className="pb-2">Projects</li>
                </ul>
                <ul className="ml-1 mt-48 flex items-center">
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