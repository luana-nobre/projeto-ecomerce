import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, Outlet, RouterProvider, createBrowserRouter, useNavigate, useParams } from "react-router-dom";
import { setFilterText, setShowCategoria } from "./FilterSlice";
import {Carrinho} from './Carrinho';
import { PageCat } from "./PageCat";
import { Header } from "./Header";
import { Detalhes } from "./Detalhes";



function App() {
    


    const Navbar= () => {
        return(
            <div className='navbar'>
                <NavLink className={({isActive})=> isActive ? "navbar_item-clicked" : "navbar_item" } to='/'>Todos</NavLink>
                <NavLink className={({isActive})=> isActive ? "navbar_item-clicked" : "navbar_item" } to='/necessarios'>Necessários</NavLink>
                <NavLink className={({isActive})=> isActive ? "navbar_item-clicked" : "navbar_item" } to='/moveis'>Móveis</NavLink>
                <NavLink className={({isActive})=> isActive ? "navbar_item-clicked" : "navbar_item" } to='/celular'>Celular</NavLink>
            </div>
        )
    }


    const HeaderLayout = () => {
        return(
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }


    const router = createBrowserRouter([
        {
          element: 
            <div> 
              <Header/>
              <HeaderLayout />,
            </div>,
          children: [
            { path: '/', element: <PageCat /> },
            { path: '/:categoria', element: <PageCat /> },
            { path: '/carrinho', element: <Carrinho/> },
            { path: '/:categoria/:id', element: <Detalhes/>}
          ],
        },
      ]);

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;