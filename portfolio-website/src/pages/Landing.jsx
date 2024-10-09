import Sidebar from "../Components/Sidebar"
import Card from "../Components/Card"
import { useRef, useEffect } from "react"

function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);

  const refs = {
    about: aboutRef,
    experience: expRef,
    projects: projRef
  }


  return (
    <>
      <div className='min-h-screen bg-green-700 text-white'>
        <div className="flex flex-row justify-center mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-start w-2/5 mt-40">
            <Sidebar
              refs={refs}
            />
          </div>
          <div className="w-3/5 mt-48 mb-36" ref={aboutRef}>
            <div>
              <p className="text-lg text-left overflow-auto">
                <section>
                  After initially pursuing Mechanical Engineering, I discovered my passion for coding and took a leap, 
                  switching universities to study Computer Science. Today, I'm a Computer Science graduate who has 
                  developed applications that benefit students and faculty at my alma mater.
                </section>
                <br />
                <section>
                  My true passion lies at the intersection of innovation and community impact. Whether 
                  working on side projects or professionally, I focus on solving real-world problems. As 
                  part of the Techrangers team at the University of Central Florida, I built software that 
                  had a meaningful impact on students and faculty, which ignited my passion for 
                  creating purposeful, user-centric solutions. I also enjoy combining my interests 
                  in sports and music with my projects.
                </section>
                <br />
                <section>
                  When I'm not at the computer, I'm either cooking, playing soccer,
                  or checking out local coffee shops in my area.  
                </section>
              </p>
            </div>
            <div className="mt-24" ref={expRef}>
              <nav>
                  <ol>
                    <Card 
                      date="2022-2024" 
                      title="Software Engineer" 
                      company="University of Central Florida - Center for Distributed Learning"
                      description=" At UCF, I worked on educational tools, websites, and applications, 
                                    addressing ticket requests and improving existing learning platforms. 
                                    As a full stack developer for Obojobo, I worked on improving the platform's 
                                    assessment tools and user interface, enhancing the experience for faculty. I 
                                    also served as a front-end developer for the teacher's course pages, addressing 
                                    customization requests and ensuring functionality met their needs. My role spanned 
                                    developing both frontend and backend solutions for a variety of educational tools.
                                    " 
                      technologies={["HTML", "CSS", "JavaScript", "Python", "React.js", "React Redux", "Express.js",
                                     "PostgresSQL", "Django", "AWS", "Docker"
                      ]}
                      link={'https://techrangers.cdl.ucf.edu/'}
                    />
                  </ol>
              </nav>
            </div>
            <div className="pt-10">
              <p>View Full <a href="/resume" target="_blank" className="underline">Resume</a></p>
            </div>
            <div className="mt-24" ref={projRef}>
              <nav>
                  <ol>
                    <li className="pt-2">
                      <Card 
                        date="Oct 2024" 
                        title="Saverr" 
                        description="
                          In order to keep myself accountable of spending and also help out when it came to deals,
                          I sought out to create an application that keeps track of items I want to purchase. Not only is
                          it a simple item tracker, but it also is set to send notifications when these items go on sale
                          in efforts to save myself money and keep my spending in check.  
                        "
                        technologies={["Java", "Spring Boot", "JavaScript", "React.js", "React Native", "PostgresSQL", "Docker"]}
                        link={'https://github.com/Viggie1/Saverr'}
                      />
                    </li>
                    <li className="pt-10">
                      <Card 
                        date="May 2024" 
                        title="KnightroGrade"  
                        description="
                          An application that solved the issue of a poorly implemented code submission tool previously
                          used by my alma mater. Four other alumni and myself created a new code submission and grading tool
                          that seamlessly integrated with professor's classes. Additionally, our application presented new 
                          features that made the user experience and capability better.
                        "
                        technologies={["JavaScript", "React.js", "Express.js", "PostgresSQL", "GCP", "AWS", "Docker"]}
                        link={'https://github.com/ASchrader319/CSGS'}
                      />
                    </li>
                    <li className="pt-10">
                      <Card 
                        date="Aug 2023" 
                        title="Between Shows" 
                        description="
                          In an effort to keep track of what shows everyone was watching, my friends and I created
                          an application where we can all post shows we've watched, our ratings, and if we'd recommend them
                          to each other. This included personal profiles, friendlist capabilities, interaction capabilities, 
                          and a recommendation system.
                        "
                        technologies={["JavaScript", "React.js", "React Native", "Express.js", "MongoDB", "Docker"]}
                        link={'https://github.com/nizolnier/betweenshows'}
                      />
                    </li>
                  </ol>
              </nav>
              <div className="pt-10">
                <p>View more on my <a href="https://github.com/Viggie1" target="_blank" className="underline">Github</a>!</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Landing;
