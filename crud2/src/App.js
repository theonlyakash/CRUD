import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div><Routes>
          <Route exact path='/create' Component={Create} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
          <Route exact path='/read' Component={Read} />
          </Routes>
        </div>
         <Routes>
        <Route path='/update' Component={Update} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
