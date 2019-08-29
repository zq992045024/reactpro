import styled from "styled-components";


export const LoginWrapper = styled.div`
    .Login{
        width: 100%;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 50;
        top: 0;
        margin-top: 0.2rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 10rem;
        margin-top: .5rem;
        h3{
            margin-top: 1rem;
            font-size: 0.5rem;
            text-align: center;
        }
        #login{
            margin-top: 1rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 6rem;
            height: 4rem;
            #users{
                input{
                    width: 100%;
                    height: 1rem;
                    border: none;
                    color: #262626;
                    border-bottom: 1px solid #262626;
                    font-size: 0.3rem;
                    padding: 0.3rem 0;
                }
            }
            #passwords{
                input{
                    width: 100%;
                    height: 1rem;
                    border: none;
                    color: #262626;
                    border-bottom: 1px solid #262626;
                    font-size: 0.3rem;
                    padding: 0.3rem 0;
                }
            }
            button{
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                margin-top: 0.5rem;
                border: none;
                background: -webkit-linear-gradient(left, #f2295f, #ffbe2a);
                font-size: 0.3rem;
                color: #262626;
            }
            .gotoRegister{
                margin-top: .5rem;
            }
        }
    }
`