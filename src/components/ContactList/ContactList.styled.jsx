import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
`;
