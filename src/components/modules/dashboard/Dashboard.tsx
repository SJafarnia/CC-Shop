import AdminDashboard from "./AdminDashboard"
import UserDashboard from "./UserDashboard"

type accessType = "ADMIN" | "BASIC"

function Dashboard({ userAccess, orders: ordersData }: { userAccess: accessType, orders: any }) {
    return (
        <div className="mx-auto py-20 sm:px-5">
            <div className="flex justify-between xs:flex-col sm:flex-row">
                {userAccess === "ADMIN" ?
                    <AdminDashboard ordersData={ordersData} /> : <UserDashboard ordersData={ordersData} />
                }
            </div>
        </div >
    )
}

export default Dashboard