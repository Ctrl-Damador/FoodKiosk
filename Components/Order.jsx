import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify"
import {formatCash} from "../helpers" 

export default function Order({order}) {

    const { id, name, total, request} = order

    const completeOrder = async () => {
        try{
            await axios.post(`/api/orders/${id}`)
            toast.success('Orden Lista')
        }catch(error){
            toast.error('Hubo un error')
        }
    }

  return (
    <div className="border p-10 space-y-5">
        <h1 className="text-2xl font-bold">Orden: {id}</h1>
        <p className="text-lg font-bold">Cliente: {name}</p>

        <div>
            {request.map(food => (
                <div key={food.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image 
                            width={300}
                            height={400}
                            src={`/assets/img/${food.image}.jpg`}
                            alt={`Imagen platillo ${food.name}`}
                        
                        />
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{food.name}</h4>
                        <p className="text-lg font-bold">Cantidad: {food.amount}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-black text-2xl text-amber-500">
                Total a pagar: {formatCash(total)}
            </p>
            <button className="bg-green-500 hover:bg-green-800 text-white mt-5 md:mt-0 py-3 px-8 rounded-md uppercase font-bold"
            type="button" onClick={completeOrder}>
                Completar orden
            </button>
        </div>
    </div>
  )
}
