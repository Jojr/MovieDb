import styled from 'styled-components/native';
import { Colors } from '../../../styles';

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  flex-grow: 1;
  width: 100px;
  height: 150px;
  border-radius: 4px;
  background-color: ${Colors.BLACK};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 5px;
`;
