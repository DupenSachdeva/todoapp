const   Navbar = function Navbar(){
    return<>
          <div className="shadow-sm">
            <div className="container">
               <div className="flex justify-between items-center mt-4 ">
                   <div className="text-2xl text-pretty text-primary text-bold px-4 mb-4">
                           Todo
                   </div>
                   <div className="flex items-center gap-4 mb-4">
                   <ul className="flex items-center gap-6 cursor-pointer">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Todos</li>
                   </ul>
                   <button className="text-white text-xl bg-gradient-to-r from-primary to-secondary rounded-md px-4 py-1 scale-105 mx-4">
                        ADD
                   </button>
                   </div>
               </div>
               </div>
          </div>
        
    </>
}
export default Navbar