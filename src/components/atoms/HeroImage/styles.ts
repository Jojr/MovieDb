import styled from 'styled-components/native';
import { Colors } from '../../../styles';

export const Container = styled.View`
  width: 100%;
  background-color: ${Colors.BLACK};
`;

export const ContainerItem = styled.View`
  width: 100px;
  height: 150px;
  border-radius: 4px;
  background-color: ${Colors.BLACK};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 5px;
`;
