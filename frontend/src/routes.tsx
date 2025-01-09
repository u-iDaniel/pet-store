import Home from "@pages/Home"
import Products from "@pages/Products";
import Shop from "@pages/Shop";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shop",
        element: <Shop/>
    },
    {
        path: "/shop/:category",
        element: <Products />
    }
];

export default routes;