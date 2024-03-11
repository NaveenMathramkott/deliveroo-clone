import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "./Icons";
import { textShorter } from "../utils/functions";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity";

const RestaurantCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      onPress={() =>
        navigation.navigate("restaurantDetailScreen", {
          data,
        })
      }
    >
      <Image
        source={{ uri: urlFor(data?.image).url() }}
        alt={data?.name}
        style={styles.imageStyle}
      />
      <View style={styles.padding}>
        <Text style={styles.title}>{data?.name}</Text>
        <View style={styles.detailSec}>
          <FontAwesome name="star" size={14} color="#00CCBB" />
          <Text style={styles.typo}>{data?.rating} -</Text>
          <Text style={styles.typo}>{data?._type}</Text>
        </View>
        <View style={styles.detailSec}>
          <Ionicons name="location-outline" size={14} color="#00CCBB" />
          <Text style={styles.typo}>Nearby</Text>
          <Text style={styles.typo}>{textShorter(data?.address, 18)}</Text>
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
