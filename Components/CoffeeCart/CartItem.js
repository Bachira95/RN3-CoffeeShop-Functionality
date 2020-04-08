import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/actions";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

const CartItem = ({ item, removeItem }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}> {item.drink} </Text>
      <Text note style={styles.option}>
        {item.option}
      </Text>
    </Left>
    <Body>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </Body>
    <Right>
      {/* here is the Button we want to use it to delete the item from cart */}
      {/* so once pressed it will call the removeItem action */}
      <Button transparent onPress={() => removeItem(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </Right>
  </ListItem>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
