
import './App.css';
import Profile from './Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Resume';

function App() {
  return (
    <div className="App " >
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
       
      <Router>
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<Profile />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>
      </body>
    </div>
  );
}

export default App;
