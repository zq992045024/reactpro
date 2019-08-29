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


//剧院
export const theater_wrap = (page=1,referer=2) => http.get("/theatre/index/getTheatreList?version=6.0.4",{page,referer})

//热门城市
export const hot_city = (referer = 2) => http.get("/city/city/getHotCityList?version=6.0.4", {referer})

//城市列表
export const sorted_city = (referer=2) => http.get("/city/city/getSortedCityList?version=6.0.4", {referer})

//详情
export const detail_data = (referer = 2) => http.get("/Schedule/Schedule/getScheduleInfo?schedular_id = 101962&version=6.0.4", { referer})

// https://m.piaoniu.com/api/v2/home/recommends?pageIndex=1&pageSize=10  票牛内容
export const theater_list = (pageIndex = 1, categoryId = 2) => http.get("/api/v3/activities?&time=&sort=&seatMap=false&highestPrice=&lowestPrice=", { pageIndex, categoryId})


export const hot_set = () => http.get("/api/v1/activities/hottest", {})

//热搜
export const hot_seach = (input,size=10) => http.get("/api/v2/activities/suggest", {input,size})