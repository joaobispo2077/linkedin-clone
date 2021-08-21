import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  & > .left-column,
  & > .right-column {
    display: none;
  }

  @media (min-width: 1180px) {
    & > .left-column,
    & > .right-column {
      display: unset;
    }

    & > .middle-column {
      margin: 0 25px 16px;
    }

    > main {
      margin: 0 30px;

      display: flex;
      justify-content: center;
    }
  }
`;
