import styled from 'styled-components';

export const OrdersContainer = styled.div`
    display: flex;
    overflow: auto;
    
    @media only screen and (max-width: 700px) {
        &{
            flex-wrap: wrap;
        }
    }
`

export const OrdersHistoryContainer = styled.div`
    width: 75%;
    margin: 0 auto;
`;

export const DetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(245, 39, 145, 0.18);

    div{
        font-family: 'Shrikhand', cursive;
    }

    span{
        color: crimson;
    }

    .price{
        color: green;
    }
`;

export const OrderHistoryAdmin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .user{
        font-size: 1.5em;
        color: white;
        background-color: rgba(69, 11, 41, 0.46);
        padding: 5px;
        border-radius: 10px;
    }
    
`;