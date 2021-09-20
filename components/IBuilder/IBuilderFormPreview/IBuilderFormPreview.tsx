import React, { FC, ReactNode, useState, useRef } from 'react';
import {
  Frames,
  FrameCardTokenizedEvent,
  FrameValidationChangedEvent,
  FrameCardTokenizationFailedEvent,
  FramePaymentMethodChangedEvent,
  FramesLanguages,
} from 'frames-react';

import IBuilderPreview from '../IBuilderPreview';
import {
  FormWrapper,
  Form,
  Label,
  DateAndCode,
  InputContainer,
  IconContainer,
  PayButton,
  StyledCardNumber,
  StyledExpiryDate,
  StyledCvv,
  SuccessPaymentMessage,
  Token,
  CardNumberError,
  ExpiryDateError,
  CvvError,
} from './IBuilderFormPreview.styles';

type IBuilderFormPreviewProps = {
  color: string;
  fontSize: string;
  localization: FramesLanguages;
};

const PUBLIC_KEY = 'pk_test_8ac41c0d-fbcc-4ae3-a771-31ea533a2beb';

const IBuilderFormPreview: FC<IBuilderFormPreviewProps> = ({
  color = '',
  fontSize = '14px',
  localization = 'EN-GB',
}) => {
  const payButtonRef = useRef<HTMLButtonElement>(null);
  const [successMessage, setSuccessMessage] = useState<ReactNode>(null);
  const [paymentMethodIcon, setPaymentMethodIcon] = useState<string>('');
  const [showLogoPaymentMethod, setShowLogoPaymentMethod] = useState<boolean>(false);
  const [showErrorCardNumber, setShowErrorCardNumber] = useState<boolean>(false);
  const [showErrorExpiryDate, setShowErrorExpiryDate] = useState<boolean>(false);
  const [showErrorCvv, setShowErrorCvv] = useState<boolean>(false);

  const iconCardNumber = `IBuilder/card-icons/card${showErrorCardNumber ? '-error' : ''}.svg`;
  const iconExpiryDate = `IBuilder/card-icons/exp-date${showErrorExpiryDate ? '-error' : ''}.svg`;
  const iconCvv = `IBuilder/card-icons/cvv${showErrorCvv ? '-error' : ''}.svg`;

  const showPaymentMethodIcon = (paymentType?: string) => {
    setShowLogoPaymentMethod(true);

    if (paymentType) {
      const name = paymentType.toLowerCase();
      setPaymentMethodIcon(`IBuilder/card-icons/${name}.svg`);
    }
  };

  const onFrameValidationChanged = (event: FrameValidationChangedEvent) => {
    const { element } = event;
    if (event.isValid || event.isEmpty) {
      if (element === 'card-number') {
        if (!event.isEmpty) {
          showPaymentMethodIcon();
        } else {
          setShowErrorCardNumber(false);
        }
      } else if (element === 'expiry-date') setShowErrorExpiryDate(false);
      else if (element === 'cvv') setShowErrorCvv(false);
      return;
    }

    if (element === 'card-number') {
      setShowLogoPaymentMethod(false);
      setShowErrorCardNumber(true);
    } else if (element === 'expiry-date') setShowErrorExpiryDate(true);
    else if (element === 'cvv') setShowErrorCvv(true);
  };

  const onPaymentMethodChanged = (event: FramePaymentMethodChangedEvent) => {
    const pm = event.paymentMethod;

    if (!pm) {
      setShowLogoPaymentMethod(false);
    } else {
      setShowErrorCardNumber(false);
      showPaymentMethodIcon(pm);
    }
  };

  const onCardTokenized = (event: FrameCardTokenizedEvent) => {
    setSuccessMessage(
      <>
        Card tokenization completed
        <br />
        Your card token is: <Token>${event.token}</Token>
      </>,
    );
  };

  const onCardValidationChanged = () => {
    if (payButtonRef.current) {
      payButtonRef.current.disabled = !Frames.isCardValid();
    }
  };

  const onCardTokenizationFailed = (error: FrameCardTokenizationFailedEvent) => {
    // eslint-disable-next-line no-console
    console.log('CARD_TOKENIZATION_FAILED: %o', error);
    Frames.enableSubmitForm();
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Frames.submitCard();
  };

  return (
    <IBuilderPreview>
      <FormWrapper>
        <Form method="POST" action="/payment" onSubmit={onSubmit}>
          <Frames
            config={{
              publicKey: PUBLIC_KEY,
              localization,
              style: {
                base: {
                  fontSize,
                  color,
                },
              },
            }}
            frameValidationChanged={onFrameValidationChanged}
            paymentMethodChanged={onPaymentMethodChanged}
            cardTokenized={onCardTokenized}
            cardValidationChanged={onCardValidationChanged}
            cardTokenizationFailed={onCardTokenizationFailed}
          >
            <Label>Card number</Label>
            <InputContainer>
              <IconContainer>
                <img src={iconCardNumber} alt="PAN" />
              </IconContainer>
              <StyledCardNumber />
              <IconContainer type="payment-method" isShown={showLogoPaymentMethod}>
                <img src={paymentMethodIcon} alt="Payment method" />
              </IconContainer>
              <IconContainer type="error" isShown={showErrorCardNumber}>
                <img src="IBuilder/card-icons/error.svg" alt="error" />
              </IconContainer>
            </InputContainer>
            <Label>Security code</Label>
            <DateAndCode>
              <div>
                <InputContainer>
                  <IconContainer>
                    <img src={iconExpiryDate} alt="Expiry date" />
                  </IconContainer>
                  <StyledExpiryDate />
                  <IconContainer type="error" isShown={showErrorExpiryDate}>
                    <img src="IBuilder/card-icons/error.svg" alt="error" />
                  </IconContainer>
                </InputContainer>
              </div>
              <div>
                <InputContainer>
                  <IconContainer>
                    <img src={iconCvv} alt="CVV" />
                  </IconContainer>
                  <StyledCvv />
                  <IconContainer type="error" isShown={showErrorCvv}>
                    <img src="IBuilder/card-icons/error.svg" alt="error" />
                  </IconContainer>
                </InputContainer>
              </div>
            </DateAndCode>
            <PayButton type="submit" disabled ref={payButtonRef} color={color}>
              Pay £25.00
            </PayButton>

            <div>
              <CardNumberError isShown={showErrorCardNumber}>
                Please enter a valid card number
              </CardNumberError>
              <ExpiryDateError isShown={showErrorExpiryDate}>
                Please enter a valid expiry date
              </ExpiryDateError>
              <CvvError isShown={showErrorCvv}>Please enter a valid cvv code</CvvError>
            </div>
            {successMessage && <SuccessPaymentMessage>{successMessage}</SuccessPaymentMessage>}
          </Frames>
        </Form>
      </FormWrapper>
    </IBuilderPreview>
  );
};

IBuilderFormPreview.displayName = 'IBuilderFormPreview';

export default IBuilderFormPreview;
