import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
