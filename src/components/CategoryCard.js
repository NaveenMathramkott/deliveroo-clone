import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const CategoryCard = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.mainWrapper}
    >
      {[...Array(6)].map((itm) => (
        <View style={styles.container}>
          <Image
            src={
              data?.imageUrl ||
              `https://i.pinimg.com/564x/cb/b8/81/cbb881f543f7ee0baa71cf98b0b8f381.jpg`
            }
            style={styles.imageStyle}
          />
          <Text style={styles.textStyle}>{`Pizza`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  mainWrapper: { paddingVertical: 4 },
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
