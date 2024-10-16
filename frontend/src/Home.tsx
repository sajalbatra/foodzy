import ChatbotComponent from "./components/chatbot/ChatbotComponent"
import Blogs from "./components/Blogs"
import Hero from "./components/Hero"
import Menu from "./components/Menu/Menu"
import Testimonals from "./components/Testimonals"
export default function Home() {
  return (
    <>
    <Hero/>
    <Menu/>
    <ChatbotComponent />
    <Testimonals/>
    <Blogs/>
    </>
  )
}