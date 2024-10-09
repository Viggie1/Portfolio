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
                            To manage my spending more effectively and stay informed about deals, I 
                            developed Saverr, an application designed to track items I plan to purchase. 
                            Beyond just an item tracker, Saverr notifies users when tracked items go on sale, 
                            helping save money by encouraging smarter spending decisions. By automating deal 
                            notifications, the app supports both accountability and financial awareness.
                        "
                        technologies={["Java", "Spring Boot", "JavaScript", "React.js", "React Native", "PostgresSQL", "Docker"]}
                        link={'https://github.com/Viggie1/Saverr'}
                        inProgress={true}
                      />
                    </li>
                    <li className="pt-10">
                      <Card 
                        date="May 2024" 
                        title="KnightroGrade"  
                        description="
                            As a response to the frustrations caused by the outdated and cumbersome code 
                            submission tool used by our university, a team of four alumni and I developed a 
                            more efficient and user-friendly solution. Our application seamlessly integrates 
                            with professors' class structures, offering intuitive features for both students 
                            and faculty. In addition to improving submission workflows, we introduced new 
                            capabilities that enhanced the overall user experience. Our MVP has been well 
                            received, and the university is currently in discussions to deploy it on their 
                            servers.
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
                            To make it easier for my friends and me to keep track of the shows we were 
                            watching, we developed an application that allows users to share shows they've
                            watched, rate them, and recommend them to others. The platform features personal 
                            profiles, a friends list, and interactive capabilities for sharing and discussing 
                            reviews. We also implemented a recommendation system to help users discover new 
                            shows based on their friends' ratings and preferences.
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
