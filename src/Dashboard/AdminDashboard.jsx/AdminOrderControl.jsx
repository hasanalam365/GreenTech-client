import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminOrderStatusControl = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: allOrders = [] } = useQuery({
    queryKey: ["admin-order-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStatus");
      return res.data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ orderId, status }) =>
      axiosSecure.patch(`/orderStatus/${orderId}`, { status }),
    onSuccess: () => queryClient.invalidateQueries(["admin-order-status"]),
  });

  const statusOptions = ["pending", "packaged", "transport", "delivery_done"];

  return (
    <div className="p-4 bg-gradient-to-r from-green-50 via-green-100 to-green-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Admin Order Control</h2>
      <table className="table">
        <thead>
          <tr><th>No</th><th>Order ID</th><th>User</th><th>Status</th><th>Change</th></tr>
        </thead>
        <tbody>
          {allOrders.map((order, idx) => (
            <tr key={order._id}>
              <td>{idx + 1}</td>
              <td>{order.orderId}</td>
              <td>{order.email}</td>
              <td>{order.status}</td>
              <td>
                <select
                  className="select select-sm"
                  value={order.status}
                  onChange={(e) =>
                    updateStatus.mutate({ orderId: order.orderId, status: e.target.value })
                  }
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status.replace("_", " ")}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderStatusControl;
