import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";


const get = (url,data)=>{
    let str = "";
    for(var key in data){
        str += "&" + key +"="+data[key]
    }
    url = url+"?"+str.substr(1)
    let result = fetchPro(url,{
        credentials:"include",
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json());
    return result;
}


const post = (url,data)=>{
    return  fetchPro(url,{
          method:"POST",
          headers:{
              "content-type":"application/x-www-form-urlencoded"
          },
          credentials:"include",
          body:qs.stringify(data)
      })
      .then(res=>res.json())
  }
  

export default {
    get,
    post
}