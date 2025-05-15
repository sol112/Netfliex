
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import './App.css'

function App() {
  

  return (
    <>
      <div>
      <Header />
      {/* Your main content */}
      <div style={{ height: '2000px', padding: '20px' }}>
        {/* Placeholder for main content */}
        <h1 style={{ color: 'white' }}>Main Content Goes Here</h1>
      </div>
      <Footer />
      </div>
     
    </>
  )
}

export default App
