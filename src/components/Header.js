import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "./Icons";

const Header = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topWrapper}>
        <View style={styles.topContainer}>
          <Image
            src={"https://links.papareact.com/wru"}
            style={styles.imageStyle}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.smallText}>Deliver Now!</Text>
            <Text style={styles.largeText}>
              Current Location
              <AntDesign name="down" size={14} color="#00CCBB" />
            </Text>
          </View>
        </View>
        <AntDesign name="user" size={24} color="#00CCBB" />
      </View>
      <View style={styles.downWrapper}>
        <View style={styles.searchInput}>
          <AntDesign name="search1" size={14} color="black" />
          <TextInput
            placeholder="Resuturants and Cusines"
            keyboardType="default"
            style={styles.input}
          />
        </View>
        <AntDesign name="filter" size={24} color="#00CCBB" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 6,
  },
  topWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  textWrapper: {
    paddingLeft: 6,
    display: "flex",
    flexDirection: "column",
  },
  smallText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  downWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  searchInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    paddingHorizontal: 6,
    flex: 1,
  },
  input: {
    paddingLeft: 4,
  },
});
