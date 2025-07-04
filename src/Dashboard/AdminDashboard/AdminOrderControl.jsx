import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminOrderStatusControl = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: allOrders = [], isLoading } = useQuery({
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
    <div className="p-4 bg-gradient-to-r from-green-50 via-green-100 to-green-50 h-full">
      <h2 className="text-xl font-bold mb-4">Admin Order Control</h2>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <span className="ml-4 text-green-600 font-semibold">Loading...</span>
        </div>
      ) : (
        <>
          {/* Scrollable table on small screens */}
          <div className="overflow-x-auto rounded shadow">
            <table className="table w-full min-w-[600px]">
              <thead className="bg-green-200 text-gray-700">
                <tr>
                  <th>No</th>
                  <th>Order ID</th>
                  <th>User</th>
                  <th>Status</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, idx) => (
                  <tr key={order._id} className="hover:bg-green-100">
                    <td>{idx + 1}</td>
                    <td>{order.orderId}</td>
                    <td>{order.email}</td>
                    <td className="capitalize">
                      {order.status.replace("_", " ")}
                    </td>
                    <td>
                      <select
                        className="select select-sm"
                        value={order.status}
                        onChange={(e) =>
                          updateStatus.mutate({
                            orderId: order.orderId,
                            status: e.target.value,
                          })
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
        </>
      )}
    </div>
  );
};

export default AdminOrderStatusControl;
