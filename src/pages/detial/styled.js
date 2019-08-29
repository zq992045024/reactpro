import styled from "styled-components"

export const DetialWrapper = styled.div`
    height:100%;
    .back{
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        height: 1.8rem;
        background: #fff;
    }
    .detial_main{
        .header{
            height: 8rem;
            .pic_bg{
                width: 100%;
                height: 4.5rem;
                margin-top: 1.8rem;
                background-size: cover;
                -webkit-filter: blur(19px);
                filter: blur(19px);
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
            }
            .headerTitle{
                height: 4.8rem;
                .headertop{
                    height: 3.5rem;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                    z-index: 2;
                    img{
                        margin-top: 0.5rem;
                        margin-left: 0.5rem;
                        width: 2.3rem;
                        height: 2.832rem;
                    }
                    .mainTitle{
                        width: 3.5rem;
                        margin-top: 0.5rem;
                        margin-left: 0.5rem;
                        height: 2.8rem;
                        h4{
                            font-size: 0.34rem;
                            font-weight: 700;
                            min-height: 0.8rem;
                            line-height: 0.44rem;
                            color: #fff;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin-bottom: 0.26rem;
                            margin-left: 0.12rem;
                        }
                        p{
                            margin-bottom: 0.25rem;
                            font-size: 0.3rem;
                            height: 0.4rem;
                            font-weight: 600;
                            color: #fdb146;
                            margin-left: 0.12rem;
                        }
                        span:nth-type-of(1){
                            font-weight: 700;
                            font-size: 0.4rem;
                        }
                        span:nth-type-of(2){
                            font-size: 0.2rem;
                            margin-left: 0.15rem;
                        }
                    }
                }
                .comment{
                    margin: 0.32rem 0.3rem;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: row;
                    flex-direction: row;
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                    .likes{
                        background: rgb(0, 0, 0, 0.4);
                        height: 0.6rem;
                        border-radius: 0.08rem;
                        line-height: 0.6rem;
                        text-align: center;
                        font-size: 0.28rem;
                        width: 45%;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        position: relative;
                        z-index: 5;
                        color: #fff;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        i{
                            font-size: 0.3rem;
                            margin-right: 0.3rem;
                        }
                        .active{
                            color:red
                        }
                        .actives{
                            color:white;
                        }
                    }
                    .my_commont{
                        background: rgb(0, 0, 0, 0.4);
                        height: 0.6rem;
                        border-radius: 0.08rem;
                        line-height: 0.6rem;
                        text-align: center;
                        font-size: 0.28rem;
                        width: 45%;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        position: relative;
                        z-index: 5;
                        color: #fff;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        i{
                            font-size: 0.3rem;
                            margin-right: 0.3rem;
                        }
                    }
                }
                .headerBottom{
                    height: 4rem;
                    padding-left: 0.3rem;
                    position: relative;
                    z-index: 5;
                    div{
                        height: 1rem;
                        border-bottom: 1px solid #f5f5f5;
                        padding: 0.32rem 0;
                        font-size: 0.3rem;
                    }
                }
            }
        }
    }
`