import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterText } from "./FilterSlice";

export const Header = () => {

    const filter= useSelector((state) => state.filter)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="header">
            <h1>TWIST</h1>
            <input className="header_search" value={filter.text} onChange={(e) => dispatch(setFilterText(e.target.value))} placeholder="Busque seu produto aqui"></input>
            <img className="header_cart" src='../images/carrinho.png' onClick={() => navigate('/carrinho')} height={'30px'}/>
        </div>
    )
}