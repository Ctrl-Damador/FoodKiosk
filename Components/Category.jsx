import Image from "next/image"
import useKiosk from "../hooks/useKiosk"

const Category = ({category}) => {

    const { categoryCurrent, handleClickCategory } = useKiosk()

    const { name, icon, id } = category


  return (
    <div className={`${categoryCurrent?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-3 hover:bg-amber-400`}>
        <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt="Imagen icono"
        priority
        />
        <button
          type="button"
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={() => handleClickCategory(id)}
        >
          {name}
        </button>
    </div>
  )
}

export default Category