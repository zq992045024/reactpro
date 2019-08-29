import styled from 'styled-components'

export const BuyWrapper = styled.div`
    height:100%;
    .bottom-con {
        height: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        .kf {
            width: 1.2rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
        }
        .buy {
            background-color: #ff2661;
            flex: 1;
            font-size: .32rem;
            line-height:1rem;
            height: 100%;
            color: #fff;
            text-align: center;
            box-sizing: border-box;
        }
    }
    .buyBackground{
        display:none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .buyBox{
        height:80%;
        width:100%;
        max-height: max-content;
        overflow-y: visible;
        font-size: 14px;
        background: red;
        display:none;
    }
`