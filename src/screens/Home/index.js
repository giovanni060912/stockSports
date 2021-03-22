import React, { useState, useEffect } from "react";
import { Image, ScrollView } from "react-native";
import { Container, ViewTimes } from "./styled";
import NewText from "../../Components/Text";
import Button from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const { goBack } = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/atleticopr1.png")}
          />
          <NewText
            mLeft={30}
            width={50}
            size="title1"
            text="Atlético Paranaense."
          />
        </ViewTimes>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/bahia1.png")}
          />
          <NewText mLeft={30} width={50} size="title1" text="Bahia" />
        </ViewTimes>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/botafogo1.png")}
          />
          <NewText mLeft={30} width={50} size="title1" text="Botafogo" />
        </ViewTimes>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/atleticogo1.png")}
          />
          <NewText
            mLeft={30}
            width={50}
            size="title1"
            text="Atlético Goianiense."
          />
        </ViewTimes>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/bragantino1.png")}
          />
          <NewText mLeft={30} width={50} size="title1" text="Bragantino." />
        </ViewTimes>
        <ViewTimes mTop={27}>
          <Image
            style={{ marginTop: 20, marginBottom: 20, marginLeft: 18 }}
            source={require("../../Components/assets/atleticomg1.png")}
          />
          <NewText
            mLeft={30}
            width={50}
            size="title1"
            text="Atlético Mineiro."
          />
        </ViewTimes>
        <Button mTop={60} text="Voltar" onPress={() => goBack()} />
        <Button
          text="Detalhes"
          mTop={20}
          onPress={() => navigation.navigate("Details")}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;
