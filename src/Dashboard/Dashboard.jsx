import { useQuery } from "@tanstack/react-query";
import useAdmin from "../hooks/useAdmin";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: allUsers } = useQuery({
    queryKey: ["all-users-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stat-allusers");
      return res.data;
    },
  });

  const { data: totalOrders } = useQuery({
    queryKey: ["total-orders-money"],
    queryFn: async () => {
      const res = await axiosSecure.get("/totalMoney");
      return res.data;
    },
  });

  const totals = totalOrders?.reduce(
    (total, prev) => total + parseInt(prev.totalPrices),
    0
  );

  const { data: myOrders } = useQuery({
    queryKey: ["my-Orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-stats/${user.email}`);
      return res.data;
    },
  });

  const userTotals = myOrders?.reduce(
    (total, prev) => total + parseInt(prev.totalPrices),
    0
  );

  return (
    <div className="mt-0 p-6 bg-gradient-to-r from-green-50 via-green-100 to-green-50 min-h-screen rounded-lg shadow-lg overflow-hidden">
      <h4 className="text-3xl font-bold mb-4 text-green-900">Dashboard</h4>
      <div className="divider border-green-300"></div>

      {isAdmin ? (
        <div className="stats flex flex-col md:flex-row lg:flex-row gap-6 overflow-x-hidden">
          <div className="stat bg-white rounded-xl shadow-md p-6 flex-1 cursor-pointer transform transition duration-300 hover:scale-103 hover:shadow-xl">
            <div className="stat-figure text-green-600">
              <TfiShoppingCartFull className="text-5xl" />
            </div>
            <div className="stat-title text-green-800 font-semibold">
              Confirm Orders
            </div>
            <div className="stat-value text-green-600 text-4xl font-bold">
              {totalOrders?.length ?? 0}
            </div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex-1 cursor-pointer transform transition duration-300 hover:scale-103 hover:shadow-xl">
            <div className="stat-figure text-green-400">
              <RiMoneyDollarCircleLine className="text-5xl" />
            </div>
            <div className="stat-title text-green-700 font-semibold">
              Total Money
            </div>
            <div className="stat-value text-green-400 text-4xl font-bold">
              ${totals ?? 0}
            </div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex-1 cursor-pointer transform transition duration-300 hover:scale-103 hover:shadow-xl">
            <div className="stat-figure text-green-500">
              <FaUsers className="text-5xl" />
            </div>
            <div className="stat-title text-green-700 font-semibold">All Users</div>
            <div className="stat-value text-green-500 text-4xl font-bold">
              {allUsers?.length ?? 0}
            </div>
          </div>
        </div>
      ) : (
        <div className="stats flex flex-col md:flex-row lg:flex-row gap-6 overflow-x-hidden">
          <div className="stat bg-white rounded-xl shadow-md p-6 flex-1 cursor-pointer transform transition duration-300 hover:scale-103 hover:shadow-xl">
            <div className="stat-figure text-green-600">
              <TfiShoppingCartFull className="text-5xl" />
            </div>
            <div className="stat-title text-green-800 font-semibold">
              Total Orders
            </div>
            <div className="stat-value text-green-600 text-4xl font-bold">
              {myOrders?.length ?? 0}
            </div>
          </div>

          <div className="stat bg-white rounded-xl shadow-md p-6 flex-1 cursor-pointer transform transition duration-300 hover:scale-103 hover:shadow-xl">
            <div className="stat-figure text-green-400">
              <RiMoneyDollarCircleLine className="text-5xl" />
            </div>
            <div className="stat-title text-green-700 font-semibold">
              Total Payments
            </div>
            <div className="stat-value text-green-400 text-4xl font-bold">
              ${userTotals ?? 0}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
