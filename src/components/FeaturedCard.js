import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "./Icons";
import RestaurantCard from "./RestaurantCard";

const FeaturedCard = ({ data, description, title }) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <ScrollView
        style={styles.body}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data?.map((itm) => (
          <View style={styles.spacer} key={itm?._id}>
            <RestaurantCard data={itm} />
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
