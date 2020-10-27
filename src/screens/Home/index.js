import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Container, ViewExtact, ResumeRow } from "./styled";
import { Logo } from "../../Components/Img";
import NewText from "../../Components/Text";
import Button from "../../Components/Button";
import { arrayCredit, arrayDebit } from "../../Components/array";

const Home = ({ navigation }) => {
  const [infoCard, setInfoCard] = useState(false);
  return (
    <Container>
      <Logo />
      <NewText text="Seja Bem-vindo!" size="title1" width={90} mTop={10} />
      <Button onPress={() => setInfoCard(false)} text="Crédito" mTop={20} />
      <Button onPress={() => setInfoCard(true)} text="Débito" mTop={10} />
      <NewText
        text="Saldo disponivel   5.000R$"
        size="title1"
        width={90}
        mTop={40}
      />
      <ScrollView>
        <ViewExtact>
          {!infoCard && (
            <View>
              {arrayCredit.map((item) => (
                <ResumeRow>
                  <NewText mTop={5} text={item.name} />
                  <NewText text={"R$" + " " + item.price} />
                </ResumeRow>
              ))}
            </View>
          )}
          {infoCard && (
            <View>
              {arrayDebit.map((item) => (
                <ResumeRow>
                  <NewText mTop={5} text={item.name} />
                  <NewText text={"R$" + " " + item.price} />
                </ResumeRow>
              ))}
            </View>
          )}
        </ViewExtact>
      </ScrollView>
      <Button
        text="Detalhes"
        mTop={20}
        onPress={() => navigation.navigate("Details")}
      />
    </Container>
  );
};

export default Home;
