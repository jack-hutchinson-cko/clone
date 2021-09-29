import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const FakeCheckbox = styled.label`
  display: block;
  width: 44px;
  height: 24px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.frenchGray};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    right: auto;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.frenchGray};
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${FakeCheckbox} {
    border-color: ${({ theme }) => theme.colors.scooter};
  }
  &:checked + ${FakeCheckbox}::before {
    transform: translateX(calc(100% + 4px));
    background-color: ${({ theme }) => theme.colors.scooter};
  }
`;
