import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Ionicons, Entypo } from "../components/Icons";
import { textShorter } from "../utils/functions";
import DishCard from "../components/DishCard";
import { urlFor } from "../../sanity";
import { useSelector } from "react-redux";
import { cartTotal, selectCartItems } from "../context/cartSlice";

const RestaurantDetailScreen = () => {
  const navigation = useNavigation();
  const {
    params: { data },
  } = useRoute();
  const cartStoreTotal = useSelector((state) => cartTotal(state));
  const cartStore = useSelector((state) => selectCartItems(state));

  console.log("cartTotal --", cartStoreTotal);
  return (
    <>
      <ScrollView
        style={styles.mainWrapper}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: urlFor(data?.image).url() }}
          style={styles.imageStyle}
        />
        <TouchableOpacity
          style={styles.backBtnStyle}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={18} color="#00CCBB" />
        </TouchableOpacity>
        <View style={styles.headerWrapper}>
          <Text style={styles.titleStyle}>{data?.name}</Text>
          <View style={styles.detailSec}>
            <FontAwesome name="star" size={14} color="#00CCBB" />
            <Text style={styles.typo}>{data?.rating} -</Text>
            <Text style={styles.typo}>{data?._type}</Text>

            <Ionicons name="location-outline" size={14} color="#00CCBB" />
            <Text style={styles.typo}>Nearby</Text>
            <Text style={styles.typo}>{textShorter(data?.address, 22)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.allergyStyle}>
          <AntDesign name="questioncircleo" size={14} color="black" />
          <Text style={styles.allergyText}>Have a food allergy?</Text>
          <Entypo name="chevron-right" size={20} color="#00CCBB" />
        </TouchableOpacity>

        <View style={{ paddingBottom: 63 }}>
          {data?.dishes?.map((itm) => (
            <DishCard data={itm} key={itm?._id} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.cartButtonSec}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartbtnFont}>{cartStore?.length}</Text>
          <Text style={styles.cartbtnFont}>Add to Cart</Text>
          <Text style={styles.cartbtnFont}>{`$ ${cartStoreTotal}`}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  backBtnStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    top: 14,
    left: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontWeight: "700",
    fontSize: 20,
  },
  headerWrapper: { backgroundColor: "white", padding: 10 },
  detailSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  typo: { fontSize: 14, fontWeight: "300", paddingHorizontal: 4 },
  allergyStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#F4F9fc",
    borderTopColor: "#F4F9Fc",
  },
  allergyText: {
    fontWeight: "600",
    fontSize: 14,
    flex: 1,
    paddingLeft: 8,
  },
  cartButtonSec: {
    position: "absolute",
    bottom: 10,
    left: 0,
    padding: 12,
    width: "100%",
    backgroundColor: "transparent",
  },
  cartButton: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#00CCBB",
    padding: 12,
    borderRadius: 4,
  },
  cartbtnFont: {
    fontWeight: "600",
    fontSize: 14,
    color: "white",
  },
});
