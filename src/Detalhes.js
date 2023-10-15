import { logDOM } from "@testing-library/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setSortBy } from "./FilterSlice"
import { addQtd } from "./ProductsSlice"


export const Detalhes = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams()
    const produtos = useSelector((state) => state.products)
    const prodExibido= produtos.find((produto) => produto.id == params.id)
    
    const preco = (prodExibido.price/100).toLocaleString(undefined,{
        style: 'currency',currency: 'BRL'
    })

    console.log(params.id)
    return(
        <div>
            <img src={prodExibido.image} alt={prodExibido.name} height={"300px"} />
            <h1>{prodExibido.name}</h1>
            <h3>{prodExibido.description}</h3>
            <h3>{preco}</h3>
            <button onClick={() => navigate('/carrinho')}>comprar</button>
            <button onClick={() => navigate('/')}>Adicionar ao carrinho</button>
            quantidade:
            <select
                value={prodExibido.qtd}
                onChange={(e) => {
                    dispatch(addQtd({id: prodExibido.id , qtd: e.target.value}))
                }}
            >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
            </select>
            
            
        </div>
        
    )
}