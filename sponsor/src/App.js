
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loading from './pages/Loading'
import Chatwithus from './pages/Chatwithus'
import History from './pages/History'
import Packages from './pages/Packages'
import Packageview from './pages/Packageview'




export default function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Loading/>} />
    <Route path="/chatwithus" element={<Chatwithus/>} />
    <Route path="/history" element={<History/>} />
    <Route path="/packages" element={<Packages/>} />
    <Route path="/packageview" element={<Packageview/>} />
    
   </Routes>
   </BrowserRouter>

  );
}


