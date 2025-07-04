import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const OrderStatus = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: orderStatus = [],
    isLoading,
  } = useQuery({
    queryKey: ["order-status", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orderStatus/${user.email}`);
      return res.data;
    },
    refetchInterval: 3000,
  });

  // 👉 Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      <span className="ml-4 text-green-600 font-semibold">Loading...</span>
  </div>
    );
  }

  return (
    <div className="p-4 bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full">
      <h2 className="text-xl font-bold mb-2">Your Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderStatus.map((order, i) => (
            <tr key={i}>
              <td>{order.orderId}</td>
              <td>{order.email}</td>
              <td>{order.status.replace("_", " ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
