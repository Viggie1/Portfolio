import Sidebar from "./Components/Sidebar"
import Card from "./Components/Card"

function App() {

  return (
    <>
      <div className='min-h-screen bg-green-700 text-white'>
        <div className="flex flex-row justify-center mx-auto w-full max-w-5xl">
          <div className="flex flex-col justify-start w-3/5 mt-40 px-6">
            <Sidebar/>
          </div>
          <div className="w-2/5 mt-48 px-6 mb-36">
            <div>
              <p className="text-l text-left overflow-auto">
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
                      description="Wrote some software" 
                    />
                  </ol>
              </nav>
            </div>
            <div className="mt-24">
              <nav>
                  <ol>
                    <Card 
                      date="Oct 2024" 
                      title="Saverr" 
                      description="app for keeping track of savings"
                    />
                    <Card 
                      date="May 2024" 
                      title="KnightroGrade"  
                      description="code submission and grading tool"
                    />
                    <Card 
                      date="Aug 2023" 
                      title="Between Shows" 
                      description="letterboxd thingy "
                    />
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
