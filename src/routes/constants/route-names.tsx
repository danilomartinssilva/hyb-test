import AuthScreen from '../../screens/AuthScreen';
import CreditPixScren from '../../screens/CreditPixScren';
import ExtractScreen from '../../screens/ExtractScreen';
import PayScreen from '../../screens/PayScreen';
import PixScreen from '../../screens/PixScreen';
import TransferScreen from '../../screens/TransferScreen';

const AUTH_NAVIGATOR_SCREENS = {
  AUTH: 'AuthScreen',
  Component: AuthScreen,
};

const EXTRACT_NAVIGATOR_SCREENS = {
  EXTRACT: 'ExtractScreen',
  Component: ExtractScreen,
};
const PIX_NAVIGATOR_SCREENS = {
  PIX: 'PixScreen',
  Component: PixScreen,
};
const CREDIT_PIX_NAVIGATOR_SCREEN = {
  CREDIT_PIX: 'CreditPixScreen',
  Component: CreditPixScren,
};
const TRANSFER_NAVIGATOR_SCREEN = {
  TRANSFER: 'TransferScreen',
  Component: TransferScreen,
};

const PAY_NAVIGATOR_SCREEN = {
  PAY: 'PayScreen',
  Component: PayScreen,
};

export const NAVIGATORS = {
  EXTRACT_NAVIGATOR: 'ExtractStack',
  PIX_NAVIGATOR: 'PixStack',
  CREDIT_PIX_NAVIGATOR: 'CreditPixStack',
  PAY_NAVIGATOR: 'PayStack',
  TRANSFER_NAVIGATOR: 'TransferStack',
  AUTH_NAVIGATOR: 'AuthStack',
};

export const SCREENS = {
  PAY_NAVIGATOR_SCREEN,
  TRANSFER_NAVIGATOR_SCREEN,
  CREDIT_PIX_NAVIGATOR_SCREEN,
  EXTRACT_NAVIGATOR_SCREENS,
  PIX_NAVIGATOR_SCREENS,
  AUTH_NAVIGATOR_SCREENS,
};
