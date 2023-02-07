// 1. Carte atvaizduosim itemus (kaina x quantity)
// 1.1 Mygtukas apmoketi numeta i login/register page
// 2. Login page
// 3. Register page
// 4. AuthContext susitvarkom, kad saugotu useri
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";

const Cart = () => {
  const { products } = useContext(ProductContext);

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
        <Button>Checkout</Button>
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
