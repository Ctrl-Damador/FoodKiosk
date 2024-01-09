import useSWR from "swr"
import axios from "axios"
import AdminLayout from "../layout/AdminLayout"
import Order from "../Components/Order"

export default function Admin() {

    const fetcher = () => axios('/api/orders').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100})


    return (
        <AdminLayout page={'Admin'}>
            <h1 className="text-3xl font-black">Panel de administración</h1>
            <p className="text-2xl my-10">Administra tus ordenes</p>

            {data && data.length? data.map(order => 
                <Order
                    key={order.id}
                    order={order}
                />
            ) : <p>No hay ordenes pendientes</p> }
        </AdminLayout>

    )
}