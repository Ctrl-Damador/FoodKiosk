import Image from "next/image"
import { formatCash } from "../helpers"
import useKiosk from "../hooks/useKiosk"

const Product = ({ product }) => {

    const { handleSetProduct, handleChangeModal } = useKiosk()
    const { name, image, price } = product

    return (

        <div className='border p-3'>
            <Image
                src={`/assets/img/${image}.jpg`}
                alt={`Imagen Platillo ${name}`}
                width={400}
                height={500}
                priority
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCash(price)}
                </p>
                <button
                type="button"
                className="bg-orange-500 hover:bg-orange-700 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleChangeModal()
                    handleSetProduct(product)
                }}
                >
                    Agregar
                </button>
            </div>
        </div>

    )
}

export default Product