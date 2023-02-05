import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Body from './components/Body';
import SignUp from './components/SignUp';
import AddQuestion from './components/AddQuestion';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar/>
     
    <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/add" element = {<AddQuestion/>}/>
      <Route path = "/signUp" element = {<SignUp/>}/>
      <Route path = "/body" element = {<Body/>}/>


    </Routes>
    </div>
  );
}

export default App;
