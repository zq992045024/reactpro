import styled from "styled-components"

export const UserMine = styled.div`
    width:100%;
    height: 100%;
    .mine-info{ 
        height:13rem;
        background:url(./bg.png) no-repeat 50%;
        .set{
            width:100%;
            text-align:right;
            display: inline-block;
            position:relative;
            i{
                font-size:.4rem;
                right:.3rem;
                position:absolute;
            }
        }
        .mine-info__main{
            height:3.4rem;
            background: #fff;
            -webkit-box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            margin: .73333rem .3rem 0;
            position: relative;
            .mine-head{
                height:1rem;
                position: relative;
                .mine-pic{
                    width:1.2rem;
                    height:1.2rem;
                    position:absolute;
                    top:-.3rem;
                    left:.2rem;
                    img{
                        width:100%;
                        height:100%;
                        
                    }
                }
                .mine-name{
                    display:block;
                    width:1.2rem;
                    position:absolute;
                    top:.3rem;
                    left:1.6rem;
                    font-size:.3rem;
                }
                .mine-uid{
                    display:block;
                    width:1.7rem;
                    position:absolute;
                    top:.75rem;
                    left:1.6rem;
                    font-size:.22rem;
                    color:#ccc;
                }
            }
            .mine-label{
                height:.5rem;
                position:relative;
                p{  
                    width:1.6rem;
                    height:.5rem;
                    display:inline-block;
                    text-align:right; 
                    line-height:.5rem;
                    position:absolute;
                    padding-right:.2rem;
                    right:0;
                    background:linear-gradient(-45deg,#f5dea9,#f8d583);
                    border-radius: .36rem 0 0 .36rem;
                }
            }
            .mine-cnt{
                height:1.6rem;
                margin-top:.23rem;
                display:flex;
                justify-content:space-between;
                a{      
                    width:1.62rem;
                    flex:1;
                    display:inline-block;
                    text-align:center;
                    line-height:.8rem;
                    p:first-child{
                        color:#c33;
                    } 
                    p:last-child{
                        border-right:1px solid #ccc;
                    }
                }
                a:last-child p{
                    border:none;
                }
            }    
        }
        .mine-vip{
            display:inline-block;
            width:100%;
            height:1.5rem;
            -webkit-box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            margin: .03333rem .2rem .2rem 0;
            img{
                width:100%;
            }
        }
        .mine-setting{
            height:2.96rem;
            ul{
                height:1.76rem;
                background: #fff;
                -webkit-box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                border-radius: .10667rem;
                margin: .33333rem .3rem 0;
                display:flex;
                justify-content:flex-start;
                li{
                    width:1.76rem;
                    text-align:center;
                    a{
                        display:inline-block;
                        height:100%;
                        i{
                            font-size:.35rem;
                            line-height:1rem;
                            color:orange;
                        }
                    }
                }
            }
        }
    }
`