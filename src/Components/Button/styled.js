import { getPercentageSizeWidth, getRelativeSize } from "../../utils";
import styled, { css } from "styled-components";

export const ButtonPrimary = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(90)};
  border-radius: ${(g) => g.theme.radius.small};
  background-color: ${(g) => g.theme.color.button.primary};
  padding: ${getRelativeSize(15)};
  align-items: center;
  ${({ mTop }) =>
    mTop &&
    css`
      margin-top: ${getRelativeSize(mTop)};
    `}
  ${({ Bcolor }) =>
    Bcolor &&
    css`
      background-color: ${(g) => g.theme.color.button.whitePure};
    `}
    ${({ Tcolor }) =>
    Tcolor &&
    css`
      color: ${(g) => g.theme.color.text.primary};
    `}
`;
