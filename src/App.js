import "./App.css";
import Custom_button from "./components/custom_button";
import { ReactTypical } from '@deadcoder0904/react-typical'

function App() {
  return (
    <div className="base">
      <div className="header-box">
        <div className="header-text">
          home
        </div>
        <div className="header-text">
          Instagram
        </div>
      </div>
      <div className="greeting">
      <ReactTypical
        loop={Infinity}
        steps={[
          'Hello There.....',
          1000,
          "It's Shivam Kumar", 
          1000, 
          'A software Developer', 
          1000,
          'React-Native Developer',
          1000
          
        ]}
        wrapper = "p"
      />
      </div>
    </div>
  );
}

export default App;
