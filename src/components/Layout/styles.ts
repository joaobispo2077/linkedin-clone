import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  > span {
    margin-top: 48px;
    display: flex;
  }

  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }

  @media (min-width: 1180px) {
    > main {
      margin: 0 30px;

      display: flex;
      justify-content: center;
    }

    > span {
      margin-top: 52px;
      display: flex;
      padding: 8px 0;
    }

    .left-column,
    .right-column,
    .ad-banner {
      display: unset;
    }

    .middle-column {
      margin: 0 25px 16px;
    }
  }
`;
