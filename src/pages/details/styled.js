import styled from "styled-components"

export const Detail = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    font-family: Arial, "微软雅黑", sans-serif;
    font-size: 0.59733rem;
    color: #666;
    background-color: #f0f0f0;
    .content{
        height:13rem;
        overflow:auto;
        padding-bottom:.3rem;
    }
    .content::-webkit-scrollbar{
        display:none;
    }
    .navbar{
        width:100%;
        height:1rem!important;
        backface-visibility: hidden;
        margin: 0;
        border-bottom: 1px solid #e7e7e7;
        width: 100%;
        height: 1.87733rem;
        font-size: 0.72533rem;
        color: #212121;
        .navbar-inner {
            height:1rem!important;
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            -webkit-box-pack: justify;
            .left{
                height:100%;
                display: flex;
                z-index: 5;
                justify-content: flex-start;
                align-items: center;
                transform: translate3d(0, 0, 0);
                position: absolute;
                left:.2rem;
                line-height:1rem;
            }
            .center {
                height:100%;
                display: flex;
                overflow: hidden;
                margin: 0 auto;
                font-size: 0.32533rem;
                text-align: center;
                white-space: nowrap;
                align-items: center;
                display: block;
                padding: 0 2.56rem;
                line-height:1rem;
            }
            .right {
                height:100%;
                display: flex;
                z-index: 5;
                flex-shrink: 0;
                justify-content: flex-start;
                align-items: center;
                transform: translate3d(0, 0, 0);
                position: absolute;
                right:.3rem;
            }
        }    
    }
    .category-container {
        background: #fff;
        height:2rem;
        .category-wrap {
            height:100%;
            margin: 0 0.53333rem 0;
            padding: 0.576rem 0;
            display: flex;
            border-radius: 0.21333rem;
            box-shadow: 0.10667rem 0.10667rem 0.21333rem rgba(178, 178, 178, 0.1);
            .cate-link {
                width:2.2rem;
                height:100%;
                display: block;
                text-align: center;
                flex: 1;
                justify-content:center;
                .img-box{
                    display: inline-block;
                    width:.8rem;
                    height:.8rem;
                    text-align: center;
                    img{
                        width: 100%;
                        height:100%;
                    }
                }
                p{
                    text-align: center;
                    font-size:.25rem;
                }
                 
            }
        }
    }
    .hot-wrap{
        .title {
            font-size: 0.368rem;
            color: #333;
            padding: 0.42667rem 0.23333rem 0.21333rem;
            font-weight: bold;
            background: #fff;
            position: relative;
        }
        .show-wrap{
            .list-wrap {
                padding: 0 0.53333rem;
                background: #fff;
                .show-item {
                    width:100%;
                    display: block;
                    height: 2.87333rem;
                    padding: 0.32rem 0;
                    border-bottom: 1px solid #e6e6e6;
                    position: relative;
                    .show-left {
                        width: 1.78rem;
                        height: 100%;
                        margin-right: 0.53333rem;
                        position: relative;
                        border: 1px solid #f2f2f2;
                        display:inline-block;
                        img{
                           width:1.78rem;
                           height:2.38rem;
                        }
                    }
                    .show-right{
                        width:4.1rem;
                        display:inline-block;
                       .title{
                           font-size:.25rem;
                           padding:0;
                           color:#666;
                            line-height:.45rem;;
                       }
                       .show-time{
                           font-size:.2rem;
                           color:#ccc;
                           padding-top:.2rem;
                       }
                       .show-venue{
                           font-size:.2rem;
                           color:#ccc;
                           padding-top:.1rem;
                       }
                       .price{
                           font-size:.3rem;
                            color:#ff7919;
                            padding-top:.1rem;
                       }
                    }
                }
            }
        }
    }

`