import { Home, Login, Mine, Theater, Ticket, City, Details, Search, Mydetails} from "@pages"
export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue8b9"
    },
    {
        path: "/theater",
        component: Theater,
        meta: {
            flag: true
        },
        name: "剧院",
        icon: "\ue602"
    },
    {
        path: "/ticket",
        component: Ticket,
        meta: {
            flag: true
        },
        name: "票夹",
        icon: "\ue607"
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true
        },
        name: "我的",
        icon: "\ue629"
    },
]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登陆"
    },
    {
        path: "/city",
        component: City,
        meta: {
            flag: false
        },
        name: "城市"
    },
    {
        path: "/details",
        component: Details,
        meta: {
            flag: false
        },
        name: "详情页"
    },
    {
        path: "/search",
        component: Search,
        meta: {
            flag: false
        },
        name: "搜索页",
        children:{
            path: "/search/mydetails",
            component: Mydetails,
            meta: {
                flag: false
            },
            name: "详情页",
        }
    },

]

export const routeConfig = tabBarRoute.concat(noTabBarRoute);