import styled from "styled-components"

export const HeadTabWrapper = styled.div`
    width:100%;
    padding-top:.88rem;
    ul::-webkit-scrollbar{
        display:none
    }
    ul{
        white-space: nowrap;
        overflow-x: auto;
        display:flex;
        height:.8rem;
        li{
            color: #333;
            margin: 0 .3rem;
            padding: .2rem 0;
            a{
                font-size:.35rem;
                i:nth-of-type(1){
                    color:red;
                }
                i{
                    font-size:.4rem;
                    margin-right:.2rem;
                }
            }
        }
    }
`