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
          </div>
          <div className="w-2/5 mt-48 px-6">
            <p className="text-left overflow-auto">
              <section>Hello I am Evangelos Kontonotas and I am a software engineer</section>
              <br />
              <section>I make software like this</section>
              <br />
              <section>When I make software I feel happy</section>
            </p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
