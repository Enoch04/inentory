import { OrderItemContainer, ItemDetails } from './order-item.styles';

const OrderItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <OrderItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </OrderItemContainer>
  );
};

export default OrderItem;