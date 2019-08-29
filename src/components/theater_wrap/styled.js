import styled from "styled-components"

export const TheaterWraper = styled.div`
    width:100%;
    height:100%;
    .theater-head{
        width:100%;
        height:.86rem;
        border-bottom:1px solid #ccc;
        position: relative;
        background:#fff;
        z-index:10;
        .head_nav{
            margin:0 auto;
            height:100%;
            h3{
                height: 100%;
                width:100;
                text-align:center;
                line-height:.86rem;
                font-size:.36rem;
                font-weight:normal;
            }
        }
         
    }
    .theater_body{
        width:100%;
        height: 14rem;
        background-color: #fdfdfd;
        padding-top: .3rem;
        padding-bottom: 2.65333rem;
        .wrapper::-webkit-scrollbar{
            display:none;
        }
        .wrapper{
            height:100%;
            /* overflow:auto; */
            .content{
                width:7rem;
                margin:0 auto;
                .theater_ul{
                     width:100%;
                     overflow:auto;
                    .theater_li{
                        display:block;
                        margin-bottom:.2rem;
                        .theater-info-shows{
                            width:100%;
                            height:5.6rem;
                            background-color: #fefefe;
                            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                            border-radius: .10667rem;
                            border: 1px solid #ebebeb;
                            padding: .3rem;
                        }
                        .theater-info{
                            width:100%;
                            height:1rem;
                             a{
                                display:block;
                                .info_img{
                                    width:1rem;
                                    height:1rem;
                                    display: inline-block;
                                    img{
                                        width:100%;
                                        height:1rem;
                                        border-radius:.1rem;
                                    }
                                }
                                .info_title{
                                    height:100%;
                                    display:inline-block;
                                    h5{
                                        width: 100%;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        padding: .08rem 0 .13333rem;
                                        font-size: .35rem;
                                        color: #232323;
                                        font-weight: 700;
                                        margin-left:.2rem;
                                    }
                                    p{
                                        font-size:.28rem;
                                        padding-left:.2rem;
                                        
                                    }
                                }
                            }
                        }
                        .theater-shows{
                            width:100%;
                                .swiper-container::-webkit-scrollbar{
                                    display:none;
                                }
                            .swiper-container{
                                width:100%;
                                padding-top:.2rem;
                                overflow:hidden;
                                position: relative;
                                width:100%;
                                /* overflow-x:scroll; */
                                    ul{
                                    width:max-content;
                                    height:3.86rem;
                                    li{
                                        align-content:flex-start;
                                        width:2.6rem;
                                        height:3.5rem;
                                        margin-right:.2rem;
                                        float:left;
                                        position: relative;
                                            span{
                                                display:block;
                                                width:.15rem;
                                                height:.15rem;
                                                background:#ccc;
                                                position:absolute;
                                                border-radius:50%;
                                                left:48.88%;
                                                top:.44rem;
                                            }
                                        h6{
                                            border-bottom:2px solid #ccc;
                                            text-align:center;
                                            line-height:.5rem;
                                            color:#ccc;
                                            font-size:.25rem;
                                        }
                                        a{  
                                            width:100%;
                                            height:2.9rem;
                                            display:block;
                                            padding-top:.2rem;
                                            img{
                                                width:100%;
                                                height:100%;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
   
`