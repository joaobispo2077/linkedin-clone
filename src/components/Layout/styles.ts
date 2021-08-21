import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  .left-column,
  .right-column {
    display: none;
  }

  > main {
    margin: 0 30px;

    display: flex;
    justify-content: center;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
