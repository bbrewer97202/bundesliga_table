import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  > div {
    font-style: italic;
    margin-bottom: 1rem;
  }
`;
