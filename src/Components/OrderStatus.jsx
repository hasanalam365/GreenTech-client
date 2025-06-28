import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const OrderStatus = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orderStatus = [] } = useQuery({
    queryKey: ["order-status", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orderStatus/${user.email}`);
      return res.data;
    },
    refetchInterval: 3000,
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Your Orders</h2>
      <table className="table">
        <thead>
          <tr><th>ID</th><th>Email</th><th>Status</th></tr>
        </thead>
        <tbody>
          {orderStatus.map((order, i) => (
            <tr key={i}>
              <td>{order.orderId}</td>
              <td>{order.email}</td>
              <td>{order.status.replace('_', ' ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
