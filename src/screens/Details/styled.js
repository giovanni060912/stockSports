import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: #b7bec4;
  align-items: center;
  justify-content: flex-start;
  padding: ${getRelativeSize(30)};
`;
export const ResumeRow = styled.View`
  flex-direction: row;
  width: ${getPercentageSizeWidth(85)};
  justify-content: space-around;
  padding: ${getRelativeSize(10)};
`;

export const ViewCard = styled.View`
  width: ${getPercentageSizeWidth(90)};
  background-color: #444e57;
  padding: ${getRelativeSize(5)};
  border-radius: ${(g) => g.theme.radius.medium};
`;
