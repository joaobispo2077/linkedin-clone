import styled from 'styled-components';

export const Container = styled.div`
  > div {
    .bg-skeleton {
      width: 100%;
      height: 70px;

      filter: brightness(96%);
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 10px;

      padding-bottom: 175px;

      .avatar-skeleton {
        z-index: 1;
        height: 72px;
        width: 72px;

        border-radius: 50%;
        margin: -36px 0 10px;
      }

      .row-skeleton {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }
        &:nth-child(3) {
          width: 40%;
        }
      }
    }
  }
`;
