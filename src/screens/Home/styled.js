import styled, {css} from 'styled-components'
import { getPercentageSizeWidth, getRelativeSize } from '../../utils'


export const Container = styled.View`
flex:1;
background-color:#B7BEC4;
align-items:center;
justify-content:flex-start;
padding: ${getRelativeSize(40)};
width: ${getPercentageSizeWidth(100)};

`
export const ViewExtact =styled.View`
width: ${getPercentageSizeWidth(90)};
background-color:#444E57;
padding: ${getRelativeSize(5)};
border-radius: ${g => g.theme.radius.medium};


`
export const ResumeRow = styled.View`
flex-direction:row;
width: ${getPercentageSizeWidth(85)};
justify-content:space-around;
padding: ${getRelativeSize(10)};

`
