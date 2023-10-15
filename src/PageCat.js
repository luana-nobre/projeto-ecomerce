import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { visible } from "./Visible";
import { setShowCategoria, setSortBy } from "./FilterSlice";

export const PageCat = () => {
    const navigate = useNavigate()
    const filtros = useSelector((state) => state.filter)//filtro
    const produtos = useSelector((state) => state.products)//produtos

    const params= useParams()
    const dispatch = useDispatch();
    dispatch(setShowCategoria(params.categoria));//filtrando categoria para params.categoria
    const produtosVisiveis = visible(produtos, filtros.showCategoria, filtros.text, filtros.sortBy)//filtro dos produtos com a categoria

    return(
        <div>
            ordenar por:
            <select value={filtros.sortby} onChange={(e) => {dispatch(setSortBy(e.target.value))}}>
                <option value='price'>preço</option>
                <option value='alphabetical'>A-Z</option>
            </select>
        {produtosVisiveis.map((produto) => {
            var preco = (produto.price/100).toLocaleString(undefined,{
                style: 'currency',currency: 'BRL'
               })
            return(
                //nome, imagem e preço
                <Link className='produtos' onClick={() => navigate(`/${produto.category}/${produto.id}`)} key={produto.id}>
                    <h3>{produto.name} - {preco}</h3> 
                    <img src={produto.image} height={'150px'}/>
                </Link>
        
            )
        })}
        </div>
    )
}

