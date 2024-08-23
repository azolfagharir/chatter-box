import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Panel = React.lazy(() => import("../pages/Panel"))
const New = React.lazy(() => import("../pages/New"))
const Dashboard = React.lazy(() => import("../pages/Dashboard"))
const Signup = React.lazy(() => import("../pages/Signup"))
const routes = [
    { path: PathConstants.Home, element: <Home /> },
    {path: PathConstants.Panel, element:<Panel />},
    {path: PathConstants.New, element:<New />},
    {path: PathConstants.Signup, element:<Signup />},
    {path: PathConstants.Dashboard, element:<Dashboard />},

];

export default routes;