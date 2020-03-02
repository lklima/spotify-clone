import styled from 'styled-components/native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '~/styles';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: ${responsiveWidth(15)}px;
  background: ${colors.secondary};
`;

export const MusicThumb = styled.Image`
  height: ${responsiveWidth(15)}px;
  width: ${responsiveWidth(15)}px;
  margin-right: 2px;
`;

export const MusicTitle = styled(TextTicker).attrs({
  loop: true,
  bounce: true,
  marqueeDelay: 1000,
  duration: 12000,
})`
  color: white;
  font-size: ${responsiveFontSize(2.4)}px;
  font-weight: 500;
`;

export const SubTtile = styled.Text`
  color: white;
  font-size: ${responsiveFontSize(2)}px;
`;

export const TitleView = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
`;

export const HeartIcon = styled(Icon).attrs({
  name: 'heart',
  color: 'white',
  size: 25,
})`
  margin-left: 10px;
  margin-right: 20px;
`;

export const PlayerIcon = styled(Icon2).attrs({
  name: 'play',
  color: 'white',
  size: 25,
})`
  margin-right: 10px;
`;
