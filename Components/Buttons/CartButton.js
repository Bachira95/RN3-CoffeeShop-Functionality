import React from "react";
import { connect } from "react-redux";
import { Icon, Text } from "native-base";

// Screen Names
import { CART } from "../../Navigation/screenNames";

const CartButton = ({ navigation, items }) => {
  let itemCount = 0;
  items.forEach((item) => (itemCount += item.quantity));
  return (
    <>
      <Text>{itemCount}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate(CART)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.cartState.items,
});
export default connect(mapStateToProps)(CartButton);
