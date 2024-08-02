import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const ChatApp = React.lazy(() => import("../pages/ChatApp"))
const routes = [
    { path: PathConstants.Home, element: <Home /> },
    {path: PathConstants.ChatApp, element:<ChatApp />},

];

export default routes;