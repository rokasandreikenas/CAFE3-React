import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../Cart/CartItem";
import PaymentForm from "./PaymentForm";
import { screenSize } from "../../consts/mediaQueries";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      <PaymentContainer>
        <PaymentForm />
      </PaymentContainer>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartContainer>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  max-width: ${screenSize.laptop};
  margin: 0 auto;
  display: flex;
  gap: 32px;
`;

const PaymentContainer = styled.div`
  width: 60%;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 24px;
  width: 40%;
`;
