import './styles/App.css';
import './styles/colors.css'; // define variables first
import './styles/fonts.css';  // use those variables

import Navbar from './components/Navbar'; // adjust path as needed
function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>Welcome to My Homepage</h1>
      <p>This is a React component.</p>
    </div>
  );
}

export default App;

