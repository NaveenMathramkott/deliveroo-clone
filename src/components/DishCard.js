import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { urlFor } from "../../sanity";
import { useState } from "react";
import { AntDesign } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../context/cartSlice";

const DishCard = ({ data }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const cartBucket = useSelector((state) =>
    selectCartItemsWithId(state, data?._id)
  );

  const addToCartFunction = () => {
    dispatch(addToCart(data));
  };
  const removeFromCartFunction = () => {
    dispatch(removeFromCart(data?._id));
  };

  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      onPress={() => setIsPressed(!isPressed)}
    >
      <View style={styles.leftSec}>
        <Text style={styles.dishName}>{data?.name}</Text>
        <Text style={styles.description}>{data?.short_description}</Text>
        <Text>{`$ ${data?.price}`}</Text>
        {(isPressed || cartBucket.length > 0) && (
          <View style={styles.addToCart}>
            <TouchableOpacity onPress={removeFromCartFunction}>
              <AntDesign name="minuscircle" size={24} color="#00ccbb" />
            </TouchableOpacity>
            <Text style={styles.count}>{cartBucket.length}</Text>
            <TouchableOpacity onPress={addToCartFunction}>
              <AntDesign name="pluscircle" size={24} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Image
        source={{ uri: urlFor(data?.image).url() }}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "white",
  },
  imageStyle: {
    width: 60,
    height: 60,
    objectFit: "cover",
  },
  leftSec: {
    flex: 1,
    paddingRight: 2,
  },
  dishName: {
    fontSize: 17,
    fontWeight: "400",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    paddingBottom: 4,
  },
  addToCart: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
    paddingLeft: 12,
    alignItems: "center",
  },
  count: {
    paddingHorizontal: 4,
  },
});
