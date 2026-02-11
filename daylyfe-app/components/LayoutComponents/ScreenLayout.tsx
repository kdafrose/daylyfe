import { View, StyleSheet} from "react-native";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function ScreenLayout({ children}: { children: React.ReactNode}) {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>

      <View style={styles.bottomContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F8E1CD",
  },
  content: {
    flex: 1,
  },
  bottomContainer:{
    position:'relative'
  },
  headerContainer:{
    position:'relative'
  }
});
