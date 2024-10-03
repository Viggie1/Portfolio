import Sidebar from "./Sidebar"

function App() {

  return (
    <>
      <div className='h-screen flex flex-row justify-center items-center bg-green-700 text-white'>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Evangelos Kontonotas</h1>
          <p className="pt-2 pb-8">hello</p>
          <Sidebar/>
        </div>
        <div className="px-10">
          <p>Some stupid paragraph</p>
        </div>
      </div> 

    </>
  )
}

export default App
