import React from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import { checkoutCart } from "../../redux/actions";

//Flash Meassge
import { showMessage } from "react-native-flash-message";

//** we change this to make it take the items from the store (dynamic)
// const CoffeeCart = () => {
//   const items = [
//     {
//       drink: "Latte",
//       option: "Small",
//       quantity: 2,
//     },
//     {
//       drink: "Espresso",
//       option: "Large",
//       quantity: 1,
//     },
//   ];

const CoffeeCart = ({ items, checkout }) => {
  const cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  // if (!cartItems.length)
  return (
    <List>
      {cartItems}
      <Button
        full
        danger
        onPress={checkout}
        onPressIn={() => {
          showMessage({
            message: "Your order is on the way",
            type: "success",
            duration: 2000,
          });
        }}
      >
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

const mapStateToProps = (state) => ({ items: state.cartState.items });
const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(checkoutCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
