import styled from "styled-components";

export const MainWrapper = styled.div`
    height:100%;
    overflow:auto;
    .filter{
        width:100%;
        height:.7rem;
        position:fixed;
        z-index:20;
        background:#fff;
        .filter_sort{
            display:flex;
            box-shadow: 0 0 4px 0 rgba(0,0,0,.15);
            div{
                flex: 1;
                display: block;
                font-size: .24rem;
                color: #666;
                text-align: center;
                padding: .2rem 0;
                border-bottom: 1px solid #e6e6e6;
            }
        }
        .choose_sort{
            width:100;
            padding-left:.3rem;
            display:none;
            position:relative;
            z-index:11;
            background:white;
            li{
                position: relative;
                font-size: .244rem;
                color: #333;
                padding-left:.18rem;
                display: block;
                border-bottom: 1px solid #f5f5f5;
                padding: .28rem .6rem .28rem .09rem;
            }
        }
    }
    .show_main{
        padding:.7rem 0;
        width:100%;
        height:100%;
        position:relative;
        margin-top:.1rem;
        .show_list{
            position: relative;
            margin-left: .3rem;
            margin-right: .3rem;
            background-color: #fff;
            .photos{
                    img{
                    width:1.5rem;
                    height:2rem;
                    float:left;
                    position: relative;
                    left: 0;
                    top: 15px;
                    }
            }
            .info{
                padding-top: .2rem;
                margin-left: 1.8rem;
                border-bottom: 1px solid hsla(0,0%,90%,.5);
                .info_title{
                    font-size: .3rem;
                    color: #333;
                    max-height: .88rem;
                    line-height: .44rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-family: Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
                    font-weight: 600;
                }
                .info_address{
                    font-size: .24rem;
                    color: #999;
                    margin-top: .1rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .info_rank{
                    font-size: .2rem;
                    color: #999;
                    margin-top: 4px;
                    margin-bottom: .2rem;
                }
                .info_price{
                    span:nth-of-type(1){
                        position: relative;
                        top: 1px;
                        color: #ff2661;
                        font-size: .36rem;
                        font-weight: 700;
                        margin-right: 4px;
                    }
                    span:nth-of-type(2){
                        font-size:.24rem
                    }
                }
                .info_sign{
                    font-size: .24rem;
                    color: #999;
                    padding: .28rem 0;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    border-top: 0.01rem solid hsla(0,0%,90%,.5);
                }
            }
        }
    }
`