import Layout from "../layout/Layout";
import Product from "../Components/Product";
import useKiosk from "../hooks/useKiosk";

export default function Home() {

  const { categoryCurrent } = useKiosk()

  return (
    <Layout page={`Menú ${categoryCurrent?.name}`}>
      <h1 className="text-4xl font-black">{categoryCurrent?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoryCurrent?.products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}