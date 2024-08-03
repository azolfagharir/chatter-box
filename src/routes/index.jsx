import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Panel = React.lazy(() => import("../pages/Panel"))
const routes = [
    { path: PathConstants.Home, element: <Home /> },
    {path: PathConstants.Panel, element:<Panel />},

];

export default routes;