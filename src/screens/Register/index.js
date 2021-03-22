import React, { useState } from "react";
import { Image } from "react-native";
import { Container, Input } from "./styled";
import ButtonPrimary from "../../Components/Button";

const Register = ({ navigation }) => {
  const requestAlth = [{ name: "12345678900", password: "123456" }];

  const [document, setDocument] = useState("");
  const [valid, setValid] = useState("");
  const handleLogin = () => {
    (requestAlth[0].name === document && requestAlth[0].password) === valid
      ? navigation.navigate("Home")
      : null;
  };

  return (
    <Container>
      <Image source={require("../../Components/assets/iconSplash1.png")} />
      <Input
        onChangeText={(text) => {
          text.length > 10 ? setDocument(text) : null;
        }}
        placeholder="CPF"
        mTop={100}
        mBottom={20}
        keyboardType="numeric"
        maxLength={11}
      />

      <Input
        onChangeText={(text) => setValid(text)}
        placeholder="Senha"
        mTop={15}
        mBottom={90}
        secureTextEntry={true}
        keyboardType="numeric"
        textContentType={"password"}
        maxLength={6}
      />
      <ButtonPrimary
        onPress={() => {
          handleLogin();
        }}
        text="Proximo"
        mTop={100}
        Bcolor
      />
    </Container>
  );
};

export default Register;
