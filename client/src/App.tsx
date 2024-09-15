
import './App.css'
import Navbar from './components/bars/Navbar'
import SideBar from './components/bars/SideBar'
import MainPage from './components/main/MainPage'
import  { RecoilRoot } from "recoil"
function App() {
  return <>
  <RecoilRoot>
  <Navbar></Navbar>
      <div className='flex gap-3'>
      <SideBar></SideBar>
      <MainPage></MainPage>
      </div>
  </RecoilRoot>
      
       
  </>

}

export default App
