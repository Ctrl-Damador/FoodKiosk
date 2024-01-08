import Image from "next/image"
import useKiosk from "../hooks/useKiosk"
import Category from "./Category"

const Sidebar = () => {

  const { categories } = useKiosk()

  return (
    <>
      <div className="pt-5 pb-0">
        <Image width={310} height={110} src="/assets/img/logo.svg" alt="imagen logotipo" priority />
      </div>

      <nav className="mt-10 ">
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
      </nav>

    </>
  )
}

export default Sidebar 