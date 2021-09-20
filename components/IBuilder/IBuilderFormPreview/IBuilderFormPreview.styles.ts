import styled, { css } from 'styled-components';
import { CardNumber, ExpiryDate, Cvv } from 'frames-react';

export const FormWrapper = styled.main`
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 8px;
`;

export const Form = styled.form`
  width: 412px;
  margin: 0 6px;

  div + label {
    margin-top: 16px;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.cardFormPrimary};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  height: 48px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 24px;
`;

type IconContainerProps = {
  isShown?: boolean;
  type?: 'payment-method' | 'error';
};

const getStylesForIconContainer = ({ isShown, type }: IconContainerProps) => {
  switch (type) {
    case 'payment-method':
      return css`
        transform: translateY(-50%) rotateY(90deg);
        transition: opacity 0.15s ease-out;
        top: 50%;
        right: 14px;
        width: 22px;
        margin: 0;

        ${isShown &&
        css`
          opacity: 1;
          transition: all 0.4s ease-out;
          transform: translateY(-50%) rotateY(0deg);
        `}

        img {
          width: 100%;
        }
      `;

    case 'error':
      return css`
        right: 0;

        img {
          display: none;

          ${isShown && 'display: block;'}
        }
      `;

    default:
      return '';
  }
};

export const IconContainer = styled.div<IconContainerProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 20px;
  margin: 12px;

  ${getStylesForIconContainer}
`;

const Input = css`
  flex: 1 1 auto;
  padding-left: 38px;
  border: solid 1px ${({ theme }) => theme.colors.cardFormInputBorder};
  border-radius: 4px;

  &.frame--activated {
    opacity: 1;
    box-shadow: ${({ theme }) => theme.shadows.cardForm[3]};
  }

  &.frame--activated.frame--focus {
    box-shadow: ${({ theme }) => theme.shadows.cardForm[2]};
  }

  &.frame--activated.frame--invalid {
    border: solid 1px ${({ theme }) => theme.colors.cardFormInputInvalid};
    box-shadow: ${({ theme }) => theme.shadows.cardFormInvalid};
  }
`;

export const StyledCardNumber = styled(CardNumber)`
  ${Input}
`;
export const StyledExpiryDate = styled(ExpiryDate)`
  ${Input}
`;
export const StyledCvv = styled(Cvv)`
  ${Input}
`;

export const DateAndCode = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  > div:nth-child(1) {
    width: 55.715%;
  }

  > div:nth-child(2) {
    width: 45.719%;
  }
`;

export const PayButton = styled.button<{ color: string }>`
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  height: 48px;
  width: 100%;
  background-color: ${({ theme, color }) => color || theme.colors.cardFormPrimary};
  box-shadow: ${({ theme, color }) => color || theme.shadows.cardForm[0]};

  &:active {
    background-color: ${({ theme, color }) => color || theme.colors.cardFormBtnActive};
    box-shadow: ${({ theme, color }) => color || theme.shadows.cardForm[0]};
  }

  &:hover {
    background-color: ${({ theme, color }) => color || theme.colors.cardFormBtnHover};
    box-shadow: ${({ theme, color }) => color || theme.shadows.cardForm[1]};
  }

  &:disabled {
    background-color: ${({ theme, color }) => color || theme.colors.cardFormBtnDisabled};
    box-shadow: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export const SuccessPaymentMessage = styled.p`
  color: ${({ theme }) => theme.colors.cardFormPrimary};
  line-height: 1.4;
`;

export const Token = styled.span`
  color: ${({ theme }) => theme.colors.cardFormToken};
  font-size: 0.9rem;
  font-family: monospace;
`;

type ErrorMessageProps = {
  isShown: boolean;
};

const ErrorMessage = css<ErrorMessageProps>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.cardFormError};
  font-size: 0.9rem;
  margin: 8px 0 0 1px;
  font-weight: 300;
`;

export const CardNumberError = styled.span<ErrorMessageProps>`
  ${ErrorMessage}
`;
export const ExpiryDateError = styled.span<ErrorMessageProps>`
  ${ErrorMessage}
`;
export const CvvError = styled.span<ErrorMessageProps>`
  ${ErrorMessage}
`;
