import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Header"
import ChatBot from "./components/Chatbot"

function App() {


  return (
    <>
      <Nav />
      <Outlet/>
      <ChatBot/>
      <Footer />
    </>
  )
}

export default App
