import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #1947e6;
  align-items: center;
  justify-content: center;
  padding: ${getRelativeSize(10)};
`;

export const Input = styled.TextInput`
  justify-content: flex-start;
  width: ${getPercentageSizeWidth(90)};
  height: ${getPercentageSizeWidth(15)};
  border-radius: ${(g) => g.theme.radius.small};
  background-color: ${(g) => g.theme.color.button.whitePure};
  padding: ${getRelativeSize(10)};
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${mTop};
    `}
  ${({ mBottom }) =>
    mBottom &&
    css`
      margin-bottom: ${mBottom};
    `}
    ${({ Bcolor }) =>
    Bcolor &&
    css`
      background-color: ${(g) => g.theme.color.text.Primary};
    `}
`;

export const TextWan = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  width: ${getPercentageSizeWidth(90)};
`;
