import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Brands from "../Pages/Brands/Brands";
// import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import DeliveryAddress from "../Pages/DashboardPage/DeliveryAddress";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "../Components/ProductDetail";
import MyWishlist from "../Components/MyWishlist";
import CheckoutPage from "../Components/CheckoutPage";
// import CheckOutBOxCart from "../Shared/CheckOutBOxCart";
import Mycarts from "../Components/Mycarts";
import UpdatedProfile from "../Components/UpdatedProfile";
import DashboardLayout from "../MainLayout/DashboardLayout";
import AllUsers from "../Dashboard/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import Dashboard from "../Dashboard/Dashboard";
import AllOrders from "../Dashboard/AdminDashboard/AllOrders";
import ViewOrderDetails from "../Components/ViewOrderDetails";
import OrderStatus from "../Components/OrderStatus";
import ConfirmOrders from "../Dashboard/AdminDashboard/ConfirmOrders";
import DetailsConfirmOrder from "../Components/DetailsConfirmOrder";
import AddProduct from "../Dashboard/Dashboard/AddProduct";
import UpdateProduct from "../Dashboard/AdminDashboard/UpdateProduct";
import Categories from "../Pages/Categories/Categories";
import Category from "../Components/Category";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import Policy from "../Components/Policy";
import AdminOrderStatusControl from "../Dashboard/AdminDashboard/AdminOrderControl";
import NotFound from "../Components/NotFound";
import AllMessages from "../Dashboard/AdminDashboard/AllMessages";
import RefoundPolicy from "../Components/RefoundPolicy"
import ShippingPolicy from "../Components/ShippingPolicy"
import TermOfUse from "../Components/TermOfUse"
import AllProducts from "../Dashboard/Dashboard/AllProducts";
import UpdatedProduct from "../Dashboard/AdminDashboard/UpdatedProduct";
// import PersonaLinfo from "../Dashboard/UserDashboard/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brands',
                element: <Brands></Brands>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/product/:id',
                element: <ProductDetail></ProductDetail>,
                // loader: ({ params }) => fetch(`https://hms-server-five.vercel.app/product/${params.id}`)
                loader: ({ params }) => {
                    const apiUrl = import.meta.env.VITE_API_URL;
                    return fetch(`${apiUrl}/product/${params.id}`);
                }
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/about-us',
                element: <About></About>
            },
            {
                path: '/privacy-policy',
                element: <Policy></Policy>
            },
            {
                path: '/refound-policy',
                element: <RefoundPolicy></RefoundPolicy>
            },
            {
                path: '/shipping-policy',
                element: <ShippingPolicy></ShippingPolicy>
            },
            {
                path: '/terms-of-use',
                element: <TermOfUse></TermOfUse>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute>
            {/* <Dashboard></Dashboard> */}
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/address',
                element: <DeliveryAddress></DeliveryAddress>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/mycarts',
                element: <Mycarts></Mycarts>
            },
            {
                path: '/dashboard/updatedProfile',
                element: <UpdatedProfile></UpdatedProfile>
            },
            {
                path: '/dashboard/checkout',
                element: <CheckoutPage></CheckoutPage>
            },
            {
                path: '/dashboard/orderTrack',
                element: <OrderStatus></OrderStatus>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: '/dashboard/all-orders',
                element: <AdminRoute>
                    <AllOrders></AllOrders>
                </AdminRoute>
            },
            {
                path: '/dashboard/view-order/:id',
                element: <AdminRoute>
                    <ViewOrderDetails></ViewOrderDetails>
                </AdminRoute>,
                // loader: ({ params }) => fetch(`https://hms-server-five.vercel.app/view-order/${params.id}`),
                loader: ({ params }) => {
                    const apiUrl = import.meta.env.VITE_API_URL;
                    return fetch(`${apiUrl}/view-order/${params.id}`);
                }

            },
            {
                path: '/dashboard/confirm-orders',
                element: <AdminRoute>
                    <ConfirmOrders></ConfirmOrders>
                </AdminRoute>
            },
            {
                path: '/dashboard/details-confirm-order/:id',
                element: <AdminRoute>
                    <DetailsConfirmOrder></DetailsConfirmOrder>
                </AdminRoute>,
                // loader: ({ params }) => fetch(`https://hms-server-five.vercel.app/details-confirm-order/${params.id}`)
                loader: ({ params }) => {
                    const apiUrl = import.meta.env.VITE_API_URL;
                    return fetch(`${apiUrl}/details-confirm-order/${params.id}`);
                }
            },
            {
                path: '/dashboard/order-status',
                element: <AdminRoute>
                    <AdminOrderStatusControl></AdminOrderStatusControl>
                </AdminRoute>
            },
            {
                path: '/dashboard/all-messages',
                element: <AdminRoute>
                    <AllMessages></AllMessages>
                </AdminRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <AdminRoute>
                    <AddProduct></AddProduct>
                </AdminRoute>
            },
            {
                path: '/dashboard/update-product',
                element: <AdminRoute>
                    <UpdateProduct></UpdateProduct>
                </AdminRoute>
            },
            {
                path: '/dashboard/all-products',
                element: <AdminRoute>
                    <AllProducts></AllProducts>
                </AdminRoute>
            },
            {
                path: "/dashboard/product/edit/:id", // ✅ no leading slash
                element: (
                  <AdminRoute>
                    <UpdatedProduct />
                  </AdminRoute>
                ),
                loader: ({ params }) => {
                  const apiUrl = import.meta.env.VITE_API_URL;
                  return fetch(`${apiUrl}/product/edit/${params.id}`);
                }
              }
              
        ]
    }

]);

export default router