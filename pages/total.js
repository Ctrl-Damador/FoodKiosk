import Layout from "../layout/Layout"
import { useEffect, useCallback } from "react"
import useKiosk from "../hooks/useKiosk"
import { formatCash } from "../helpers"

export default function Total() {

    const { order, name, setName, placeOrder, total } = useKiosk()

    const verifyOrder = useCallback(() => {
        return order.length === 0 || name === '' || name.length < 3
    }, [order, name])

    useEffect(() => {
        verifyOrder()
    }, [order, verifyOrder])
    

    return (
        <Layout page="Confirmar pedido">
            <h1 className="text-4xl font-black">Confirmar pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form
                onSubmit={placeOrder}
            >
                <div>
                    <label className="block uppercase text-slate-800 font-bold text-xl"
                    htmlFor="name"> 
                        Nombre
                    </label>
                    <input type="text" id="name" className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: {""} <span className="font-bold">{formatCash(total)}</span>
                    </p>
                </div>
                <div className="mt-5">
                    
                    <input 
                    type="submit"
                    className={`${verifyOrder() ? "bg-green-100" : ' bg-green-600 hover:bg-green-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"`}
                    value="confirmar orden"
                    disabled={verifyOrder()}
                    />
                </div>
            </form>
        </Layout>
    )
}