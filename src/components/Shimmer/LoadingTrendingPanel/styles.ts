import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 10px 10px 6px;

    gap: 10px;

    .square-skeleton {
      height: 48px;
      width: 48px;
    }

    .column {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 10px;

      .row-skeleton {
        height: 10px;

        &:first-child {
          width: 60%;
        }

        &:nth-child(2) {
          width: 90%;
        }
      }
    }
  }
`;
