import styled from 'styled-components'

export const CityList = styled.div`
    
  background: #ebebeb;
  height: 100%;
  /* overflow: auto; */


/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}
.hot_title{
    height:1rem;
    border-bottom:1px solid #ccc;
    background:#fff;
    line-height: 1rem;
    position:relative;
    z-index:10;
    span{
        display:inline-block;
        padding-left:.4rem;
        color:#ccc;
    }
}
.hot_city_list,
.city_list_name {
  width: 95%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_list a{
  display:inline-block;
}
.hot_city_name {
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 1px solid #e6e6e6;
  border-radius:5px;
}

.city_list > div {
  width: 100%;
}
.city_list_name a{
   display:block;
    width:100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: .05rem;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.02rem;
  font-size: 0.25rem;
  text-align:center;
}
`