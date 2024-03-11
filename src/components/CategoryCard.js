import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { urlFor } from "../../sanity";

const CategoryCard = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.mainWrapper}
    >
      {data?.map((itm) => (
        <View style={styles.container} key={itm?._id}>
          <Image
            source={{ uri: urlFor(itm?.image).url() }}
            style={styles.imageStyle}
          />
          <Text style={styles.textStyle}>{itm?.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  mainWrapper: { paddingVe: 4, flex: 1 },
  container: {
    position: "relative",
    padding: 4,
  },
  textStyle: {
    position: "absolute",
    bottom: 4,
    left: 8,
    fontWeight: "500",
    color: "white",
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
});
