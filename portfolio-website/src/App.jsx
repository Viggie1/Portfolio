import Sidebar from "./Sidebar"

function App() {

  return (
    <>
      <div className='h-screen w-lg justify-center items-center bg-green-700 text-white'>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mt-60 justify-left w-2/3">
            <h1 className="text-3xl font-bold">Evangelos Kontonotas</h1>
            <p className="text-xl pt-2 pb-8">Software Engineer</p>
            <Sidebar/>
          </div>
          <div className="mt-80 w-1/3">
            <p className="text-align-left">
              Hello this is my baout me!
              adslkfjasldkfjalksjfdlksafd
              asdfkajsdflksajdflkasjfdlkjsaflkjsadlkfjaslkdjfalksdfjalksdjflkasjfdlksadf
              asdfkljsadlkfjaslkfdjsalkjalkdsjflkasjd
              adskfljaslkfdjaslkfdjsalkfdjsalkjfdsalkdjfasdlfkjaslkdfjalksdjf
            </p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
