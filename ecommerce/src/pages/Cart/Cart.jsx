import { useContext } from "react";
import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { LOGIN_PATH, CHECKOUT_PATH } from "../../routes/const";
import { UserContext } from "../../contexts/UserContext";
import { useProducts } from "../../hooks/products";

const Cart = () => {
  const { data } = useProducts();
  const products = data || [];
  const { isLoggedIn } = useContext(UserContext);

  const cartProducts = products.slice(0, 2);

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Items are reserved for 30 minutes</p>
      </Header>
      <CartContainer>
        {cartProducts.map((product) => (
          <CartItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name} />
            <div>
              <CartItemPrice>
                {euroSymbol}
                {product.price}
              </CartItemPrice>
              <p>{product.name}</p>
              <CartItemColor>{product.color}</CartItemColor>
            </div>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>
          Checkout
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 24px;
`;

const CartItem = styled.div`
  display: flex;

  img {
    width: 120px;
    margin-right: 8px;
    object-fit: contain;
  }
`;

const CartItemPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const CartItemColor = styled.p`
  margin-top: 8px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
