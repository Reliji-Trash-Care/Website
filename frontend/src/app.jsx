import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SideBarWrapper } from './components/SideBarWrapper/SideBarWrapper';
import React from 'react'
import { LandingPage } from './screens/LandingPage'
import { TentangKami } from './screens/TentangKami/TentangKami'
import { Layanan } from './screens/Layanan/Layanan'
import { BeritaGuest } from './screens/BeritaGuest/BeritaGuest'
import { BeritaDetailHot } from './screens/BeritaDetailHot/BeritaDetailHot'
import { BeritaDetailLatest } from './screens/BeritaDetailLatest/BeritaDetailLatest'
import { Login } from './screens/Login/Login'
import { SignUp } from './screens/SignUp/SignUp'
import { Home } from "./screens/Home/Home";
import { BeritaUser } from "./screens/BeritaUser/BeritaUser";
import { BeritaDetailHotUser } from "./screens/BeritaDetailHotUser/BeritaDetailHotUser";
import { SetelanProfil } from './screens/Setelan/SetelanProfil'
import { DeteksiUser } from './screens/DeteksiUser/DeteksiUser'
import { HomeAdmin } from "./screens/HomeAdmin/HomeAdmin";
import { SetelanGanti } from "./screens/Setelan/SetelanGanti";
import { SetelanNotifikasi } from "./screens/Setelan/SetelanNotifikasi";
import { JadwalSampahAdmin } from "./screens/JadwalSampahAdmin/JadwalSampahAdmin";
import { DetailInputJadwal } from "./screens/DetailInputJadwal/DetailInputJadwal"; 
import { InputBerita } from "./screens/InputBerita/InputBerita";
import { ListBerita } from "./screens/ListBerita/ListBerita";
import { TagihanAdmin } from "./screens/TagihanAdmin/TagihanAdmin";
import { ChatPengelolaAdmin } from "./screens/ChatPengelolaAdmin/ChatPengelolaAdmin";
import { DeteksiAdmin } from "./screens/DeteksiAdmin/DeteksiAdmin";
import { TagihanPilih } from "./screens/TagihanPilih/TagihanPilih";
import { TagihanBelum } from './screens/TagihanBelum/TagihanBelum';
import { JadwalSampahUser } from './screens/JadwalSampahUser/JadwalSampahUser';
import { DeteksiUpload } from './screens/DeteksiUpload/DeteksiUpload'
import { ChatPengelolaUser } from './screens/ChatPengelolaUser/ChatPengelolaUser';
import { ForgotPassword } from "./screens/ForgotPassword/ForgotPassword";
import { TagihanStatus } from "./screens/TagihanStatus/TagihanStatus";
import { TagihanSelesai } from './screens/TagihanSelesai/TagihanSelesai';
import { BeritaLatestUser } from './screens/BeritaLatestUser/BeritaLatestUser';
import { SetelanProfilAdmin } from './screens/Setelan/SetelanProfilAdmin';
import { SetelanNotifikasiAdmin } from './screens/Setelan/SetelanNotifikasiAdmin';
import { SetelanGantiAdmin } from './screens/Setelan/SetelanGantiAdmin';
// import WastePrediction from './components/WastePrediction';
import WhatsApp from './screens/WhatsApp/WhatsApp';
import { DeteksiUserAI } from './screens/DeteksiUser/DeteksiUserAI';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* <SideBarWrapper /> */}
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/tentangkami' element={<TentangKami/>} />
    <Route path='/layanan' element={<Layanan/>} />
    <Route path='/beritaguest' element={<BeritaGuest/>} />
    <Route path='/beritadetailhot' element={<BeritaDetailHot/>} />
    <Route path='/beritadetaillatest' element={<BeritaDetailLatest/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/forgotpassword' element={<ForgotPassword/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/beritauser' element={<BeritaUser/>} />
    <Route path='/beritadetailuser' element={<BeritaDetailHotUser/>} />
    <Route path='/beritalatestuser' element={<BeritaLatestUser/>} />
    <Route path='/setelanprofil' element={<SetelanProfil/>} />
    <Route path='/setelanprofiladmin' element={<SetelanProfilAdmin/>} />
    <Route path='/jadwalsampahuser' element={<JadwalSampahUser/>} />
    <Route path='/tagihanbelum' element={<TagihanBelum/>} />
    <Route path='/tagihanpilih' element={<TagihanPilih/>} />
    <Route path='/tagihanstatus' element={<TagihanStatus/>} />
    <Route path='/tagihanselesai' element={<TagihanSelesai/>} />
    <Route path='/chatpengelolauser' element={<ChatPengelolaUser/>} />
    <Route path='/deteksiuser' element={<DeteksiUser/>} />
    <Route path='/deteksiupload' element={<DeteksiUpload/>} />
    <Route path='/homeadmin' element={<HomeAdmin/>} />
    <Route path='/setelanganti' element={<SetelanGanti/>} />
    <Route path='/setelangantiadmin' element={<SetelanGantiAdmin/>} />
    <Route path='/setelannotifikasi' element={<SetelanNotifikasi/>} />
    <Route path='/setelannotifikasiadmin' element={<SetelanNotifikasiAdmin/>} />
    <Route path='/jadwalsampahadmin' element={<JadwalSampahAdmin/>} />
    <Route path='/detailinputjadwalsampah' element={<DetailInputJadwal/>} />
    <Route path='/inputberita' element={<InputBerita/>} />
    <Route path='/listberita' element={<ListBerita/>} />
    <Route path='/tagihanadmin' element={<TagihanAdmin/>} />
    <Route path='/chatpengelolaadmin' element={<ChatPengelolaAdmin/>} />
    <Route path='/deteksiadmin' element={<DeteksiAdmin/>} />
    {/* <Route path='/wasteprediction' element={<WastePrediction/>} /> */}
    <Route path='/whatsapp' element={<WhatsApp/>} />
    <Route path='/deteksiai' element={<DeteksiUserAI/>} />
  
    </Routes>
    </div>
    </Router>
  )
}

export default App

