import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  padding: ${getRelativeSize(10)};
  width: ${getPercentageSizeWidth(100)};
`;
export const ViewTimes = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${getPercentageSizeWidth(90)};
  background-color: #c7c7c7;
  padding: ${getRelativeSize(5)};
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
`;
export const ResumeRow = styled.View`
  flex-direction: row;
  width: ${getPercentageSizeWidth(85)};
  justify-content: space-around;
  padding: ${getRelativeSize(10)};
`;
export const ButtonSecundary = styled.TouchableOpacity`
  width: ${getPercentageSizeWidth(90)};
  border-radius: ${(g) => g.theme.radius.small};
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
      background-color: ${(g) => g.theme.color.text.Primary};
    `}
`;
