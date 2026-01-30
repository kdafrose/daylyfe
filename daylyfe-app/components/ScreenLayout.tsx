import { View, StyleSheet } from "react-native";
import React from "react";
import Footer from "@/components/Footer";

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
