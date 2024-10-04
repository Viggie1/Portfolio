import Sidebar from "./Sidebar"

function App() {

  return (
    <>
      <div className='h-screen bg-green-700 text-white'>
        <div className="flex flex-row justify-center mx-auto w-full max-w-5xl">
          <div className="flex flex-col justify-start w-3/5 mt-40 px-6">
            <h1 className="text-4xl font-bold">Evangelos Kontonotas</h1>
            <p className="text-2xl pt-2 pb-8">Software Engineer</p>
            <Sidebar/>
            <div className="flex-grow"></div>
            <nav className="sticky bottom-0">Linkedin Github Email</nav>
          </div>
          <div className="w-2/5 mt-48 px-6">
            <div>
              <p className="text-left overflow-auto">
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
            <div className="mt-48">
              <nav>
                  <ol>
                    <li>Experience 1</li>
                    <li>Experience 2</li>
                    <li>Experience 3</li>
                  </ol>
              </nav>
            </div>
            <div className="mt-48">
              <nav>
                  <ol>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
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
