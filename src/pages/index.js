import Loadable from 'react-loadable';
import Loading from "@common/loading"


const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const Cinema = Loadable({
    loader:()=>import("./cinema"),
    loading:Loading
})

const Like = Loadable({
    loader:()=>import("./like"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})


const Search = Loadable({
    loader:()=>import("./Search"),
    loading:Loading
})



const City = Loadable({
    loader:()=>import("./city"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Show = Loadable({
    loader:()=>import("./show"),
    loading:Loading
})

const Music = Loadable({
    loader:()=>import("./yinyuehui"),
    loading:Loading
})

const Pe = Loadable({
    loader:()=>import("./pe"),
    loading:Loading
})

const Fun = Loadable({
    loader:()=>import("./xiuxian"),
    loading:Loading
})

const Huj = Loadable({
    loader:()=>import("./huaju"),
    loading:Loading
})

const Detial = Loadable({
    loader:()=>import("./detial"),
    loading:Loading
})

export {
    Home,Cinema,Like,Mine,Login,Search,City,Huj,Music,Pe,Fun,Show,Detial
}