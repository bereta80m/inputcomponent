
import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';

function App() {
  return (
    <div className="grid w-full h-screen">
     <Sidebar />
     <Content />
    </div>
  );
}

export default App;
