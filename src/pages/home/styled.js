import styled from "styled-components"

export const HomeWrapper = styled.div`
    height:100%;
    padding-top:.88rem;
    padding-bottom:1rem;
        .banner{
        height:2rem;
        width:80%;
        margin-left:10%;
        .swiper-container{
        border-radius: .1rem;
             .swiper-slide{
                 height: 1.82rem;
                 width: 100%;   
                      img{
                       width:100%;
                    }
             }
        }
    }
    .nav{
        height: 1.6rem;
        width: 95%;
        margin-left: 0.2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 0.2rem;
        a {
        width: 20%;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: palevioletred;
            i{
                font-size:0.65rem;
            }
        }
    }
    h2{
        height: 0.8rem;
    width: 100%;
    font-weight: 700;
    color: #565656;
    font-size: 0.36rem;
    float: left;
    margin-left: 0.22rem;
    line-height: 0.8rem;
    }
    .hot{
        width:100%;
        .hotList{
            width:100%;
        }
        ul{
            display: flex;
            width: max-content;
            margin-left: 0.2rem;
        }
        h3{
            height: 0.8rem;
            width: 100%;
            font-weight: 700;
            color: #565656;
            font-size: 0.36rem;
            margin-left: 0.22rem;
            line-height: 0.8rem;
        }
        li{
            margin-right:.2rem
        }
        .hotImg img{
            height: 2.6rem;
            width: 2rem;
            background:#c33
        }
        .hotName{
            width: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 0.1rem;
            margin-bottom: 0.07rem;
            color: #262626;           
        }
        .hotPrict{
            font-size: 0.25rem;
            transform: scale(0.8);
            transform-origin: left bottom;
            display: inline-block;
            margin-left: 2px;
            color: #999;       
        }
    }
    .likeMain{
       .hoplist{
        height: 2.5rem;
        width: 7.3rem;
        padding: 0.3rem 0.3rem;
        display: flex;
        flex-direction: row;
            img{
                height: 2rem;
                width: 1.5rem;
            }
        .hopInfo{
            margin-left: 0.3rem;
            border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
            .hopInfoTitle{
                font-size: 0.3rem;
                font-weight: 600;
                line-height: 0.4rem;
            }
            .place{
                font-size: 0.24rem;
                color: #999;
                margin-top: 0.1rem;
            }
            .rank {
                font-size: 0.24rem;
                color: #999;
                margin-top: 0.1rem;
                margin-bottom: 0.2rem;
                span:nth-of-type(2) {
                    color: #ffb02e;
                    font-weight: 700;
                    margin-left: 0.1rem;
                }
            }
            .prices {
                position: relative;
                top: 1px;
                color: #ff2661;
                font-size: 0.36rem;
                font-weight: 700;
                margin-right: 4px;
                span:nth-of-type(2) {
                    font-size: 0.23rem;
                    margin-left: 0.1rem;
                    font-weight: normal;
                    color: #999;
                }
            }
        }
       }
    }

    

`