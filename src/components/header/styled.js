import styled from "styled-components";

export const HeaderWrapper = styled.div`
width:100%;
height:0.88rem;
display:flex;
flex-direction:row;
justify-content:space-between;
position:fixed;
top:0;
z-index:10;
background:#fff;
    #city{
        width: 1.5rem;
  font-weight: 500;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 12px;
  margin-right: 9px;
        i{
            font-size: 0.3rem;
        }
        span{
            height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.3rem;
        }
    }
    #search{
        background: #f5f5f5;
    height: .6rem;
    margin-top: .1rem   ;
    width: 3.5rem;
    font-size: .3rem;
    border-radius: .3rem;
    border: none;
    flex:1;
        i{
            line-height: .6rem;
    font-size: .3rem;
    margin-left: .3rem;
        }
        span{
            color: #999;
    font-size: .25rem;
    line-height: .6rem ;
    margin-left: .25rem;
        }
    }
    #mine{
        overflow:hidden;
  margin-top: .1rem;
        i{
            font-size: .5rem;
    margin-left: .3rem;
    padding: .8rem .2rem;
        }
    }

`

