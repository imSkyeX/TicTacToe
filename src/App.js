import './App.css';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
// import Pruebavanta from './components/Pruebavanta'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<MainMenu />}/>
        <Route path='/singleplayer' element={<h1>singleplayer</h1>}/>
        <Route path='/multiplayer' element={<h1>multiplayer</h1>}/>
        {/* <Route path='multiplayer:id' element={<h1>singleplayer</h1>}/>     ID O SOCKET?             */}
      </Routes>
    </div>
  );
}

export default App;
