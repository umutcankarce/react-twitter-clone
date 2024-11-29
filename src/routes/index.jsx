import {createBrowserRouter} from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Messages from "~/pages/message";
import NotFound from "~/pages/notfound";
import Notifications from "~/pages/notifications";
import Lists from "~/pages/lists";
import Bookmarks from "~/pages/bookmarks";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'explore',
                element: <Explore />
            },
            {
                path:'notifications',
                element: <Notifications />
            },
            {
                path:'messages',
                element: <Messages />
            },
            {
                path:'lists',
                element:<Lists/>
            },
            {
                path:'bookmarks',
                element:<Bookmarks/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path:'*',
                element: <NotFound />
            }
        ]
    }
    
]);

export default routes;
