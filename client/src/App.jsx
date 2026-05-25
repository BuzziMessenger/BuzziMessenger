import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import Topbar from './components/Topbar'
import './styles.css'

export default function App() {
  return (
    <div className="messenger-layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />
        <ChatWindow />
        <MessageInput />
      </div>
    </div>
  )
}
