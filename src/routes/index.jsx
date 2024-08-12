import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Panel = React.lazy(() => import("../pages/Panel"))
const New = React.lazy(() => import("../pages/New"))
const routes = [
    { path: PathConstants.Home, element: <Home /> },
    {path: PathConstants.Panel, element:<Panel />},
    {path: PathConstants.New, element:<New />},

];

export default routes;