import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../Components";

const Home = () => {
  const [nftData, setnftData] = useState(NFTData);

  const handleSearch = (value) => {
    console.log(value)
    if (!value.length) return setnftData(NFTData);

    const filteredData = NFTData.filter((item) => (item.name.toLowerCase().includes(String(value.toLowerCase()),0)))
    console.log(filteredData)
    // console.log(filteredData)
    // console.log(filteredData)

    if (filteredData.length) {
      setnftData(filteredData);
    } else {
      setnftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => {
              item.id;
            }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
