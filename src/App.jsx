
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projets' element={<Projects/>}></Route>
      </Routes>
  )
}

export default App
