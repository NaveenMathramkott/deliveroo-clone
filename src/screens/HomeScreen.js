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
import { useState, useEffect } from "react";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const [featuredList, setFeaturedList] = useState([]);
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    getCategoryData();
    getRestaurantFunction();
  }, []);

  const getRestaurantFunction = async () => {
    await sanityClient
      .fetch(
        `*[_type == "featured"]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
      type->{
        name
      }
  },
}`
      )
      .then((data) => {
        setFeaturedList(data);
      })
      .catch((err) => console.log(err));
  };

  const getCategoryData = async () => {
    await sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => {
        setFeaturedCategory(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <StatusBar />
      {/* header */}
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.spacer}>
        {/* category */}
        <View>
          <CategoryCard data={featuredCategory} />
        </View>
        {/* Featured card */}
        <View>
          {featuredList?.map((item) => (
            <FeaturedCard
              key={item?._id}
              data={item?.restaurants}
              title={item?.name}
              description={item?.short_description}
            />
          ))}
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
