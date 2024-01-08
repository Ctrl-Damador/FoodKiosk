import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from "next/router";

const KioskContext = createContext()

const KioskProvider = ({children}) => {

    const [ categories, setCategories] = useState([])
    const [categoryCurrent, setCategoryCurrent] = useState({})
    const [ product, setProduct ] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    const GetCategories = async () => {
        const { data } = await axios('/api/categories')
        setCategories(data)
    
    }
    useEffect(() => {
      GetCategories()
    }, [])

    useEffect(() => {
        setCategoryCurrent(categories[0])
    }, [categories])

    useEffect(() => {
     const newTotal = order.reduce((total, product) => (product.price * product.amount) + total, 0)

     setTotal(newTotal)
    }, [order])
    

    const handleClickCategory = id => {
        const category = categories.filter(cat => cat.id === id)
        setCategoryCurrent(category[0])
        router.push('/')
    }
 
    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddOrder = ({categoryId, ...product}) => {
        //*Verificar si el producto ya existe en el pedido
        //* .some recorrer el objeto y devuelve true/false
        if (order.some(productState => productState.id === product.id)) {
            //*Actualizar la cantidad
            const orderUpdated = order.map(productState => productState.id === product.id ? product : productState)
            setOrder(orderUpdated)
            toast.success('Guardado correctamente ')
        }else{
            setOrder([...order, product])
            toast.success('Agregado al pedido')
        }
        setModal(false)
    }

    const handleEditAmount = id => {
        const productUpdate = order.filter(product => product.id === id)
        setProduct(productUpdate[0])
        setModal(!modal)
    }
    
    const handleDeleteProduct = id => {
        const orderUpdated = order.filter(product => product.id !== id)
        setOrder(orderUpdated)
    }

    
    const placeOrder = e => {
        e.preventDefault()

    }

    return(
        <KioskContext.Provider
            value={{
                categories,
                categoryCurrent,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                handleAddOrder,
                order,
                handleEditAmount,
                handleDeleteProduct,
                name,
                setName,
                placeOrder,
                total
            }}
        >
            {children}
        </KioskContext.Provider>
    )
}

export {
    KioskProvider
}
export default KioskContext