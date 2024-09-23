
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loading from './pages/Loading'
import Chatwithus from './pages/Chatwithus'
import History from './pages/History'
import Packages from './pages/Packages'
import Packageview from './pages/Packageview'
import Sponsordetails from './pages/Sponsordetails'
import Accountviewe from './pages/Accountviewe'
import Accountdelete from './pages/Accountdelete'
import Createpackage from './pages/Createpackage'
import Purchase from './pages/Purchase'
import Createnewpackage from './pages/Createnewpackage'






export default function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Loading/>} />
    <Route path="/chatwithus" element={<Chatwithus/>} />
    <Route path="/history" element={<History/>} />
    <Route path="/packages" element={<Packages/>} />
    <Route path="/packageview" element={<Packageview/>} />
    <Route path="/sponsordetails" element={<Sponsordetails/>} />
    <Route path="/accountviewe"  element={<Accountviewe/>} />
    <Route path="/accountdelete"  element={<Accountdelete/>} />
    <Route path="/createpackage"  element={<Createpackage/>} />
    <Route path="/purchase"  element={<Purchase/>} />
    <Route path="/createnewpackage"  element={<Createnewpackage/>} />

    
   </Routes>
   </BrowserRouter>

  );
}


