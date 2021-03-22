import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: flex-start;
  width: ${getPercentageSizeWidth(100)};
  padding: ${getRelativeSize(10)};
`;

export const ViewTimes = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${getPercentageSizeWidth(90)};
  background-color: #c7c7c7;
  padding: ${getRelativeSize(5)};
  border-radius: ${(g) => g.theme.radius.small};
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
`;

export const ViewInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${getPercentageSizeWidth(80)};
  background-color: #c7c7c7;
  padding: ${getRelativeSize(10)};
  border-radius: ${(g) => g.theme.radius.medium};
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
`;
