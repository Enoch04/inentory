import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 30px;

  img {
    width: 80px;
    height: 95px;
    border-radius: 50px;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;