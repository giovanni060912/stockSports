import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const TextNew = styled.Text`
  font-size: 20;

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
    ${({ mLeft }) =>
    mLeft &&
    css`
      margin-left: ${mLeft};
    `}
    ${({ mRight }) =>
    mRight &&
    css`
      margin-right: ${mRight};
    `}

${({ Bcolor }) =>
    Bcolor &&
    css`
      background-color: ${(g) => g.theme.Bcolor[Bcolor]};
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${getPercentageSizeWidth(width)};
    `}

    ${({ align }) =>
    align &&
    css`
      align-items: ${aling};
    `}

${({ size }) =>
    size &&
    css`
      font-size: ${(g) => g.theme.text[size]};
    `}
`;
