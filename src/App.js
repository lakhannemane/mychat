import ChatSection from "./component/ChatSection";
import MediaSection from "./component/MediaSection";
import RecentSection from "./component/RecentSection";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="chat-app d-flex">
        <Sidebar />
        <RecentSection />
        <ChatSection />
        <MediaSection />
      </div>
    </div>
  );
}

export default App;
