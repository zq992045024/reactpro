import styled from "styled-components"

export const Collect = styled.div`
width:100%;
height:100%;
    .collect{
        width:100%;
        height:100%;
        padding:.2rem;
        .collect-list{
            width:97%;
            height:2.2rem;
            display:flex;
            margin:.1rem;
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            border: 1px solid #ebebeb;
        }
    }
    .list-img{
        width:25%;
        height:2.2rem;
        padding:.15rem;
        img{
            display:block;
            width:100%;
            height:100%;
            border-radius:.2rem;
        }
    }
    .list-info{
        width:75%;
        padding-left:.3rem;
        h3{
            width:5rem;
            font-size:.3rem;
            color:#000;
            line-height:.6rem;
            overflow:hidden;
            text-overflow:ellipsis; 
            white-space:nowrap;
            padding-top:.2rem;
        }
        p{
            color:#FF5E00;
            padding:.2rem;
        }
        .info_{
            padding-left:.2rem;
            span{
                color:#EFAA35;
            }
        }
    }
`