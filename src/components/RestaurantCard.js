import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "./Icons";

const RestaurantCard = ({ name, imageUrl, rating, type, address, onClick }) => {
  return (
    <TouchableOpacity style={styles.mainWrapper} onPress={onClick}>
      <Image src={imageUrl} alt={name} style={styles.imageStyle} />
      <View style={styles.padding}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.detailSec}>
          <FontAwesome name="star" size={14} color="#00CCBB" />
          <Text style={styles.typo}>{rating}</Text>
          <Text style={styles.typo}>{type}</Text>
        </View>
        <View style={styles.detailSec}>
          <Ionicons name="location-outline" size={14} color="#00CCBB" />
          <Text style={styles.typo}>Nearby</Text>
          <Text style={styles.typo}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    width: 210,
    backgroundColor: "white",
  },
  padding: {
    padding: 4,
  },
  imageStyle: {
    width: "100%",
    // height: 160,
    aspectRatio: 3 / 2,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
  },
  detailSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  typo: { fontSize: 14, fontWeight: "300", paddingLeft: 4 },
});
