import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '~/styles';

export const Container = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const AlbumThumb = styled.Image`
  height: ${props => responsiveWidth(props.first ? 30 : 40)}px;
  width: ${props => responsiveWidth(props.first ? 30 : 40)}px;
`;

export const BottomView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const RandomIcon = styled(Icon).attrs({
  name: 'shuffle',
  color: colors.primary,
  size: 16,
})`
  background: ${colors.inactive};
  padding: 0 2px;
  border-radius: 2px;
  margin-right: 4px;
`;

export const AlbumTitle = styled.Text`
  color: white;
  font-size: ${responsiveFontSize(2)}px;
  font-weight: 700;
`;
