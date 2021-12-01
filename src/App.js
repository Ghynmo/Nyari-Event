import './App.css';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Profile from './components/Profile'
import FollowingEvent from './components/FollowingEvent'
import CreatedEvent from './components/CreatedEvent'
import FormCreate from './components/FormCreate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail" element={<CreateEvent/>}>
          <Route path=":profile" element={<Profile/>}/>
          <Route path=":create-event" element={<FormCreate/>}/>
          <Route path=":created" element={<CreatedEvent/>}/>
          <Route path=":following-event" element={<FollowingEvent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
