import Sidebar from "./Components/Sidebar"
import Card from "./Components/Card"

function App() {

  return (
    <>
      <div className='min-h-screen bg-green-700 text-white'>
        <div className="flex flex-row justify-center mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-start w-2/5 mt-40">
            <Sidebar/>
          </div>
          <div className="w-3/5 mt-48 mb-36">
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
            <div className="mt-24">
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
                      technologies={["JavaScript", "React.js", "HTML"]}
                    />
                  </ol>
              </nav>
            </div>
            <div className="pt-10">
              <p>View Full <a href="https://www.google.com" target="_blank" className="underline">Resume</a></p>
            </div>
            <div className="mt-24">
              <nav>
                  <ol>
                    <li className="pt-2">
                      <Card 
                        date="Oct 2024" 
                        title="Saverr" 
                        description="app for keeping track of savings"
                        technologies={["JavaScript", "React.js", "HTML"]}
                      />
                    </li>
                    <li className="pt-10">
                      <Card 
                        date="May 2024" 
                        title="KnightroGrade"  
                        description="code submission and grading tool"
                        technologies={["JavaScript", "React.js", "HTML"]}
                      />
                    </li>
                    <li className="pt-10">
                      <Card 
                        date="Aug 2023" 
                        title="Between Shows" 
                        description="letterboxd thingy "
                        technologies={["JavaScript", "React.js", "HTML"]}
                      />
                    </li>
                  </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
