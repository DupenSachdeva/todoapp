import { Routes, Route, BrowserRouter } from "react-router-dom";
import Create from "./Create";
import Upcoming from "./Upcoming";
const MainPage = function MainPage() {


    return <> 
    
    <Routes>
              <Route path='/upcoming' element={<Upcoming/> }>
                <Route path='/upcoming/create' element={<Create/> }></Route>
              </Route>
              
            </Routes >
            </>
        
    
    
    
}
        export default MainPage
