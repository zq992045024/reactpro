import http from "@utils/http"

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


//票牛城市
//https://m.piaoniu.com/api/v1/cities/
//https://m.piaoniu.com/api/v1/cities/hot
//https://m.piaoniu.com/api/v2/cities/active
//https://m.piaoniu.com/api/v1/activities/hottest
//https://m.piaoniu.com/api/v2/home/recommends?pageIndex=1&pageSize=10
// https://m.piaoniu.com/api/v2/activities/suggest?input=5&size=14