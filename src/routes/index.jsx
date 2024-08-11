import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Panel = React.lazy(() => import("../pages/Panel"))
const TicketNew = React.lazy(() => import("../pages/TicketNew"))
const routes = [
    { path: PathConstants.Home, element: <Home /> },
    {path: PathConstants.Panel, element:<Panel />},
    {path: TicketNew.Panel, element:<TicketNew />},

];

export default routes;