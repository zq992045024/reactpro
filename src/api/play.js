import http from "@utils/http";
import https from "@utils/https";
export const get_hot_api =(pageIndex=1,pageSize=10)=> http.get("/api/v2/home/recommends",{pageIndex:pageIndex,pageSize:pageSize})

// export const test =(appId="SC_I5640724439",beginDate="20180712",endDate="20180719",statisticsDate="20190901")=> http.post("/open/statistics/miniMerchantBusines",{appId:appId,beginDate:beginDate,endDate,statisticsDate:statisticsDate})

//城市列表

export const city_api = ()=>http("get","/api/v2/cities/active")

export const city_hot_api = ()=>http("get","/api/v1/cities/hot")

//api/v3/activities?pageIndex=1&categoryId=0&time=&sort=&seatMap=false&highestPrice=&lowestPrice=

export const show_api = (pageIndex=1,categoryId=1,time="",sort="",seatMap=false,highestPrice="",lowestPrice="")=>http.get("/api/v3/activities",{pageIndex,categoryId,time,sort,seatMap,highestPrice,lowestPrice})


//user

export const users_register_api = (username,password)=>https("post","/piaoniu/register",{username:username,password:password})

export const users_login_api = (username,password)=>https("post","/piaoniu/login",{username:username,password:password})

//  export const users_register_api = (username,password)=>http.post("/piaoniu/register",{username:username,password:password})

//  export const users_login_api = (username,password)=>http.post("/piaoniu/login",{username:username,password:password})

//api/v3/ticketCategories/?eventId=642107&supportSpeedPackBuy=true&b2c=true
//api/v3/ticketCategories/?eventId=765938&supportSpeedPackBuy=true&b2c=true
//买票

export const buy_tick_api = (eventId)=>http("get","/api/v3/ticketCategories/?supportSpeedPackBuy=true&b2c=true",{eventId})
