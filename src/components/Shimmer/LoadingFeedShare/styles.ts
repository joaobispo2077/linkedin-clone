import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 40px 40px 40px 12px;

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
`;
