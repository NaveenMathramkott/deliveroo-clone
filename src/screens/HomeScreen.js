import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import FeaturedCard from "../components/FeaturedCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <StatusBar />
      {/* header */}
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.spacer}>
        {/* category */}
        <View>
          <CategoryCard />
        </View>
        {/* Featured card */}
        <View>
          <FeaturedCard />
        </View>
        <View>
          <FeaturedCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#F4F9F8",
  },
  spacer: {
    paddingHorizontal: 8,
  },
});
