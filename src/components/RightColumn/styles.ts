import styled from 'styled-components';

export const Container = styled.div`
  width: 312px;

  > div:nth-child(2) {
    position: sticky;
    top: 64px;
  }

  > div + div {
    margin-top: 8px;
  }
`;
