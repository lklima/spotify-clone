import styled from 'styled-components/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const Container = styled.SafeAreaView`
  margin-bottom: 35px;
  margin-left: 25px;
`;

export const SectionTitle = styled.Text`
  color: white;
  font-size: ${responsiveFontSize(3.3)}px;
  font-weight: bold;
  margin-bottom: 18px;
`;
