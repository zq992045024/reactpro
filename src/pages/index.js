import Loadable from "react-loadable";
import Loading from "@common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Theater = Loadable({
    loader: () => import("./theater"),
    loading: Loading
})

const Ticket = Loadable({
    loader: () => import("./ticket"),
    loading: Loading
})

const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

const City = Loadable({
    loader:() => import("./city"),
    loading:Loading
})

const Details = Loadable({
    loader: () => import("./details"),
    loading: Loading
})

const Search = Loadable({
    loader: () => import("./search"),
    loading: Loading
})

const Mydetails = Loadable({
    loader: () => import("./search/child"),
    loading: Loading
})

export {
    Home,
    Theater,
    Ticket,
    Mine,
    Login,
    City,
    Details,
    Search,
    Mydetails
}