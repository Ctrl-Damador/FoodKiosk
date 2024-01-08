import Image from "next/image"
import { formatCash } from "../helpers"
import useKiosk from "../hooks/useKiosk"

const SummaryProduct = ({ product }) => {

    const { handleEditAmount, handleDeleteProduct } = useKiosk()
    return (
        <div className="shadow p-5 mb-5 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${product.name}`}
                    src={`/assets/img/${product.image}.jpg`}
                />
            </div>
            <div className="md:w-4/6">
                <p className="text-3xl font-bold">{product.name}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {product.amount}</p>
                <p className="text-xl font-bold text-amber-500 mt-2">Precio: {formatCash(product.price)}</p>
                <p className="text-sm text-gray-700 mt-2">Subtotal: {formatCash(product.price * product.amount)}</p>
            </div>

            <div>
                <button
                    type="button"
                    onClick={() => handleEditAmount(product.id)}
                    className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                    Editar
                </button>
                <button  
                    type="button"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>


                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default SummaryProduct