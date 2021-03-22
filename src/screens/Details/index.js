import React, { useState, useEffect } from "react";
import NewText from "../../Components/Text";
import { Container, ViewTimes, ViewInfo } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";
import { ScrollView, Image } from "react-native";

const Details = ({ navigation }) => {
  const { goBack } = useNavigation();
  return (
    <ScrollView>
      <Container>
        <NewText
          mBottom={20}
          mTop={30}
          size="title1"
          width={90}
          text="Informações dos Times"
        />
        <ViewTimes>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/atleticopr1.png")}
            />
            <NewText
              mLeft={30}
              width={50}
              size="title1"
              text="Atlético Paranaense."
            />
            <ViewInfo>
              <NewText
                text="Club Athletico Paranaense é um clube
               de futebol brasileiro, da cidade de Curitiba.
               Foi fundado em 26 de março de 1924, a partir da fusão do International
               Foot-Ball Club e do América Futebol Clube. Suas cores tradicionais são o
               preto e o vermelho, que lhe rendem a alcunha de rubro-negro."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <ViewTimes mTop={27}>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/bahia1.png")}
            />
            <NewText mLeft={30} width={50} size="title1" text="Bahia" />
            <ViewInfo>
              <NewText
                text="O Esporte Clube Bahia é um clube desportivo brasileiro de futebol da cidade de Salvador, na Bahia.
                Conhecido como simplesmente Bahia e pelo acrônimo ECB, foi fundado em 1º de janeiro de 1931 por
                ex-jogadores do Clube Bahiano de Tênis e a Associação Atlética da Bahia, agremiações que tinham
                encerrado suas atividades futebolísticas no final da década de 1920. Foi cofundador do Clube
                 dos 13 em 1987, que reunia as treze agremiações mais importantes do
                futebol brasileiro e que representavam 95% dos torcedores brasileiros na época."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <ViewTimes mTop={27}>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/botafogo1.png")}
            />
            <NewText mLeft={30} width={50} size="title1" text="Botafogo" />
            <ViewInfo>
              <NewText
                text="Botafogo de Futebol e Regatas é uma agremiação poliesportiva brasileira, com sede no bairro
               homônimo ao clube, na cidade do Rio de Janeiro. Nascido da fusão do Club de Regatas Botafogo (fundado
              para o remo em 1894) com o Botafogo Football Club (formado para o futebol em 1904), é um dos
              principais clubes do Brasil. Suas maiores glórias esportivas vêm principalmente do futebol,
              especialmente entre as décadas de 1950 e 1960, considerada sua era de ouro.
              Conhecido pela estrela de cinco pontas em seu distintivo, que lhe dá a alcunha de clube da Estrela
               Solitária, o Botafogo tem como suas cores oficiais o preto e o branco."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <ViewTimes mTop={27}>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/atleticogo1.png")}
            />
            <NewText
              mLeft={30}
              width={50}
              size="title1"
              text="Atlético Goianiense."
            />
            <ViewInfo>
              <NewText
                text="Atlético Clube Goianiense é uma agremiação esportiva brasileira da cidade de
                Goiânia, no estado de Goiás, fundada em 2 de abril de 1937.
              O Dragão, alcunha do clube, manda os seus jogos habitualmente no Estádio Antônio Accioly
              , com capacidade ampliada em 2020 para 12 500 pessoas, embora historicamente tenha atuado
              também no Estádio Olímpico Pedro Ludovico Teixeira, com capacidade para 13.500 pessoas, e as
              suas partidas com maior demanda de público tenham ocorrido no Estádio Serra Dourada, o maior da
              capital goiana."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <ViewTimes mTop={27}>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/bragantino1.png")}
            />
            <NewText mLeft={30} width={50} size="title1" text="Bragantino." />
            <ViewInfo>
              <NewText
                text="Red Bull Bragantino, também conhecido como RB Bragantino ou simplesmente Bragantino,
              é um clube esportivo brasileiro da cidade de Bragança Paulista, interior do estado de São Paulo.
               É controlado pela multinacional de bebidas energéticas Red Bull.
              O clube foi fundado originalmente como Clube Atlético Bragantino em 8 de janeiro de 1928,
              e suas cores de origem eram preto e branco. Entretanto, a partir da parceria com a empresa
              Red Bull GmbH em 2019, passou a aderir o vermelho junto ao seu tradicional alvinegro."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <ViewTimes mTop={27}>
          <ScrollView>
            <Image
              style={{
                padding: 70,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 18,
              }}
              source={require("../../Components/assets/atleticomg1.png")}
            />
            <NewText
              mLeft={30}
              width={50}
              size="title1"
              text="Atlético Mineiro."
            />
            <ViewInfo>
              <NewText
                text="O Clube Atlético Mineiro (conhecido apenas por Atlético e cujo acrônimo é CAM)
               é um clube brasileiro de futebol sediado na cidade de Belo Horizonte, Minas Gerais.
               Fundado em 25 de março de 1908 por um grupo de estudantes, tem como suas cores tradicionais o
               preto e o branco. Contudo, o clube teve como primeiro nome Athlético Mineiro Football Club .
                Seu símbolo e alcunha mais popular é o Galo, mascote oficial no final da década de 1930.
                O Atlético é um dos maiores e mais populares clubes de futebol do Brasil, possuindo uma das
                 maiores torcidas do país ."
              />
            </ViewInfo>
          </ScrollView>
        </ViewTimes>
        <Button mTop={60} text="Voltar" onPress={() => goBack()} />
        <Button
          text="Inicio"
          mTop={20}
          onPress={() => navigation.navigate("Login")}
        />
      </Container>
    </ScrollView>
  );
};

export default Details;
