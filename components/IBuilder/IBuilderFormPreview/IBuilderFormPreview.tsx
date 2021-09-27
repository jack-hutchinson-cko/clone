import React, { FC, useState, useRef, useContext } from 'react';
import {
  Frames,
  FrameCardTokenizedEvent,
  FrameValidationChangedEvent,
  FrameCardTokenizationFailedEvent,
  FramePaymentMethodChangedEvent,
  FramesLanguages,
  FrameCardValidationChangedEvent,
} from 'frames-react';

import IBuilderPreview from '../IBuilderPreview';
import { CodeHandler } from '../IBuilderFrameworkTab';
import { getDataPaymentForm } from '../utils';
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
  color?: string;
  fontColor?: string;
  fontSize?: string;
  localization?: FramesLanguages;
};

const DEFAULT_COLOR = '#00122C';
const DEFAULT_FONTSIZE = '14px';
const DEFAULT_LOCALIZATION = 'EN-GB';
const PUBLIC_KEY = 'pk_test_8ac41c0d-fbcc-4ae3-a771-31ea533a2beb';

const IBuilderFormPreview: FC<IBuilderFormPreviewProps> = ({
  color,
  fontColor,
  fontSize,
  localization,
}) => {
  const [token, setToken] = useState<string>('');
  const [showErrorCvv, setShowErrorCvv] = useState<boolean>(false);
  const [showErrorCardNumber, setShowErrorCardNumber] = useState<boolean>(false);
  const [showErrorExpiryDate, setShowErrorExpiryDate] = useState<boolean>(false);
  const [showLogoPaymentMethod, setShowLogoPaymentMethod] = useState<boolean>(false);
  const [paymentMethodIcon, setPaymentMethodIcon] = useState<string>('');
  const payButtonRef = useRef<HTMLButtonElement>(null);

  const iconCardNumber = `IBuilder/card-icons/card${showErrorCardNumber ? '-error' : ''}.svg`;
  const iconExpiryDate = `IBuilder/card-icons/exp-date${showErrorExpiryDate ? '-error' : ''}.svg`;
  const iconCvv = `IBuilder/card-icons/cvv${showErrorCvv ? '-error' : ''}.svg`;

  const { codeControlState } = useContext(CodeHandler);
  const {
    color: customColor,
    fontSize: customFontSize,
    localization: customLoc,
  } = getDataPaymentForm(codeControlState);

  const selectedColor = color || customColor || DEFAULT_COLOR;
  const selectedFontColor = fontColor || DEFAULT_COLOR;
  const selectedFontSize = fontSize || customFontSize || DEFAULT_FONTSIZE;
  const selectedLocalization = localization || customLoc || DEFAULT_LOCALIZATION;

  const showPaymentMethodIcon = (paymentType?: string) => {
    setShowLogoPaymentMethod(true);

    if (paymentType) {
      const name = paymentType.toLowerCase();
      setPaymentMethodIcon(`IBuilder/card-icons/${name}.svg`);
    }
  };

  const onFormReady = () => {
    if (showErrorCvv) setShowErrorCvv(false);
    if (showLogoPaymentMethod) setShowLogoPaymentMethod(false);
    if (showErrorCardNumber) setShowErrorCardNumber(false);
    if (showErrorExpiryDate) setShowErrorExpiryDate(false);
  };

  const onFrameValidationChanged = (event: FrameValidationChangedEvent) => {
    const { element } = event;

    if (event.isValid || event.isEmpty) {
      if (element === 'card-number' && !event.isEmpty) {
        showPaymentMethodIcon();
        setShowErrorCardNumber(false);
      } else if (element === 'expiry-date') setShowErrorExpiryDate(false);
      else if (element === 'cvv') setShowErrorCvv(false);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (element === 'card-number') {
        setShowLogoPaymentMethod(false);
        setShowErrorCardNumber(true);
      } else if (element === 'expiry-date') {
        setShowErrorExpiryDate(true);
      } else if (element === 'cvv') {
        setShowErrorCvv(true);
      }
    }
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
    setToken(event.token);
  };

  const onCardValidationChanged = (event: FrameCardValidationChangedEvent) => {
    if (payButtonRef.current) {
      payButtonRef.current.disabled = !event.isValid;
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
    <IBuilderPreview
      key={JSON.stringify({ selectedFontColor, selectedFontSize, selectedLocalization })}
    >
      <FormWrapper>
        <Form method="POST" action="/payment" onSubmit={onSubmit}>
          <Frames
            config={{
              publicKey: PUBLIC_KEY,
              localization: selectedLocalization,
              style: {
                base: {
                  color: selectedFontColor,
                  fontSize: selectedFontSize,
                },
              },
            }}
            ready={onFormReady}
            frameValidationChanged={onFrameValidationChanged}
            paymentMethodChanged={onPaymentMethodChanged}
            cardTokenized={onCardTokenized}
            cardValidationChanged={onCardValidationChanged}
            cardTokenizationFailed={onCardTokenizationFailed}
          >
            <Label color={selectedColor}>Card number</Label>
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
            <Label color={selectedColor}>Security code</Label>
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
            <PayButton type="submit" disabled ref={payButtonRef} color={selectedColor}>
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
            {token && (
              <SuccessPaymentMessage>
                Card tokenization completed
                <br />
                Your card token is: <Token>${token}</Token>
              </SuccessPaymentMessage>
            )}
          </Frames>
        </Form>
      </FormWrapper>
    </IBuilderPreview>
  );
};

IBuilderFormPreview.displayName = 'IBuilderFormPreview';

export default IBuilderFormPreview;
