// import u
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  padding: 16px;

  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomNavigation = styled.View`
  padding: 16px;

  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
