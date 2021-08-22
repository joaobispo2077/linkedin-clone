import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.header`
  background: var(--color-link);

  padding: 0 16px;

  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 17px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  height: 28px;
  width: 28px;

  border-radius: 50%;
  border: 1px solid var(--color-icons);
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  width: 100%;

  background: var(--color-input);
  color: var(--color-black);

  font-size: 14px;

  padding: 7.5px 8px;
  border: none;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  height: 24px;
  width: 24px;

  color: var(--color-white);

  border-radius: 4px;
  flex-shrink: 0;
`;
