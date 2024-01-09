import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Chats from './components/Chats';

function App() {
  return (
    <div style={{fontFamily:'Avenir'}}>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/chats' element={<Chats/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
