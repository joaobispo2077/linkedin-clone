import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;

  > div {
    padding: 15px 40px 50px 12px;

    display: flex;
    flex-direction: column;

    gap: 30px;

    header {
      display: flex;
      align-items: center;
      gap: 15px;

      .avatar-skeleton {
        height: 48px;
        width: 48px;

        border-radius: 50%;
        flex-shrink: 0;
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;

        flex: 1;
        gap: 10px;

        .row-skeleton {
          height: 12px;

          &:first-child {
            width: 30%;
          }

          &:nth-child(2) {
            width: 55%;
          }
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .row-skeleton {
        height: 12px;

        &:first-child {
          width: 100%;
        }

        &:nth-child(2) {
          width: 90%;
        }
      }
    }
  }

  @media (min-width: 1180px) {
    margin-top: 16px;

    .row-skeleton {
      height: 12px;
    }
  }
`;
