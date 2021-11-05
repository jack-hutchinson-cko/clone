import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  cursor: initial;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 360px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cloundBurst};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
  outline: none;
  padding: 0;
  border: none;
  width: 100%;
`;

export const InputWrapper = styled.div<{ isValid: boolean }>`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.colors.border : theme.colors.danger)};
  background: ${({ theme }) => theme.colors.white};
`;

export const CurrentColor = styled.div<{ colorValue: string }>`
  height: 20px;
  background-color: ${({ colorValue }) => colorValue || '#000000'};
  border-radius: 4px;
`;

export const Label = styled.label`
  span {
    font-weight: 500;
  }
`;
