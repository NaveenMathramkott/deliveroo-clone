import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "./Icons";
import RestaurantCard from "./RestaurantCard";

const FeaturedCard = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Featured</Text>
          <Text style={styles.description}>
            Paid Placement from our Partners
          </Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <ScrollView
        style={styles.body}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(6)].map((itm) => (
          <View style={styles.spacer}>
            <RestaurantCard
              imageUrl={`https://i.pinimg.com/736x/93/55/44/9355449f3e0b98becb5db099870c1676.jpg`}
              name={`Toranto Restuarant`}
              address={`123 main street`}
              rating={4.5}
              type={"chineese"}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  mainWrapper: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    fontWeight: "300",
    fontSize: 12,
  },
  body: {
    paddingVertical: 8,
  },
  spacer: {
    marginHorizontal: 4,
  },
});
