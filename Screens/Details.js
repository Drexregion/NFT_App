import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  SubInfo,
  FocusedStatusBar,
  RectButton,
  FocusStatusBar,
  DetailsDesc,
  DetailsBid,
  CircleButton,
} from "../Components";
import { NFTData } from "../constants";
import React from "react";
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width4: "100%", height: 373 }}>
    <Image
      resizeMode="cover"
      source={data.image}
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imageUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 1}
    />
    <CircleButton
      imageUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight + 1}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  // console.log({ route });
  const { data } = route.params;
  const data1 = { ...data, hello: "world" };

  console.log("--------------------------------------");
  console.log(data1.bids);
  console.log("--------------------------------------");
  // console.log(route.params)
  console.log(data.bids);
  console.log("--------------------------------------");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} SizeFont={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data1.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold,         
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
