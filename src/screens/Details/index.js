import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Img";
import NewText from "../../Components/Text";
import { Container, ViewCard } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";

const Details = ({ navigation }) => {
  const { goBack } = useNavigation();
  const [infoCard, setInfoCard] = useState(false);
  return (
    <Container>
      <Card />
      <NewText size="title1" width={90} text="Informações dos Cartões" />
      <NewText size="title2" width={90} text="Cartão N°_1" />
      <ViewCard>
        <NewText mTop={5} text="N°:3456 **** **** 9889" />
        <NewText mTop={5} text="Validade:12/25" />
        <NewText mTop={5} text="Código de Segurança: 343" />
        <NewText mTop={5} text="Gastos Totais:400,67 R$" />
        <NewText mTop={5} text="Limite Dispoível: 1.200,98 R$" />
      </ViewCard>
      <NewText size="title2" width={90} text="Cartão N°_2" />
      <ViewCard>
        <NewText mTop={5} text="N°:4231 **** **** 0987" />
        <NewText mTop={5} text="Validade:08/23" />
        <NewText mTop={5} text="Código de Segurança: 878" />
        <NewText mTop={5} text="Gastos Totais:1.815,67 R$" />
        <NewText mTop={5} text="Limite Dispoível: 200,15 R$" />
      </ViewCard>
      <NewText size="title2" width={90} text="Cartão N°_3" />
      <ViewCard>
        <NewText mTop={5} text="N°:6798 **** **** 5412" />
        <NewText mTop={5} text="Validade:08/23" />
        <NewText mTop={5} text="Código de Segurança: 522" />
        <NewText mTop={5} text="Gastos Totais:00,0R$" />
        <NewText mTop={5} text="Limite Dispoível: 5.200,15 R$" />
      </ViewCard>
      <Button text="Voltar" mTop={20} onPress={() => goBack()} />
      <Button
        text="Inicio"
        mTop={20}
        onPress={() => navigation.navigate("Login")}
      />
    </Container>
  );
};

export default Details;
