import { ISberbankRestServiceConfig } from './SberbankRestService.interface';

export interface ISberbankAcquiringNamePassCredentials {
  username: string;
  password: string;
}

export interface ISberbankAcquiringTokenCredentials {
  token: string;
}

export type ISberbankAcquiringCredentials =
  ISberbankAcquiringNamePassCredentials |
  ISberbankAcquiringTokenCredentials;

export interface ISberbankAcquiringConfig {
  credentials: ISberbankAcquiringCredentials,
  restConfig?: Partial<ISberbankRestServiceConfig>;
}

export type ISberbankOSType = 'ios' | 'android';

export interface ISberbankMethodOptionsBase {

}

export interface ISberbankMethodResponseBase {
  errorCode?: number,
  errorMessage?: string,
}

// REST METHODS OPTIONS

export interface ISberbankMethodOptionsRegister extends ISberbankMethodOptionsBase {
  orderNumber: string;
  amount: number;
  returnUrl: string;

  currency?: string;
  failUrl?: string;
  description?: string;
  language?: string;
  pageView?: string;
  clientId?: string;
  merchantLogin?: string;
  jsonParams?: string;
  sessionTimeoutSecs?: string;
  expirationDate?: string;
  bindingId?: string;
  features?: string;
  email?: string;
  phone?: string;

  // app2app
  app2app?: boolean,
  app?: {
    osType: ISberbankOSType,
    deepLink: string,
  },

  // back2app
  back2app?: boolean,
}

export interface ISberbankMethodOptionsRegisterPreAuth extends ISberbankMethodOptionsBase {
  orderNumber: string;
  amount: number;
  returnUrl: string;

  currency?: string;
  failUrl?: string;
  description?: string;
  language?: string;
  pageView?: string;
  clientId?: string;
  merchantLogin?: string;
  jsonParams?: string;
  sessionTimeoutSecs?: string;
  expirationDate?: string;
  bindingId?: string;
  features?: string;
  email?: string;
  phone?: string;

  // app2app
  app2app?: boolean,
  app?: {
    osType: ISberbankOSType,
    deepLink: string,
  },

  // back2app
  back2app?: boolean,
}

export interface ISberbankMethodOptionsDeposit extends ISberbankMethodOptionsBase {
  orderId: string;
  amount: number;
}

// REST METHODS RESPONSE

export interface ISberbankMethodResponseRegister extends ISberbankMethodResponseBase {
  orderId?: string;
  formUrl?: string;
  externalParams?: {
    sbolInactive?: boolean;
    sbolBankInvoiceId?: string;
    sbolDeepLink?: string;
  };
}

export interface ISberbankMethodResponseRegisterPreAuth extends ISberbankMethodResponseBase {
  orderId?: string;
  formUrl?: string;
  externalParams?: {
    sbolInactive?: boolean;
    sbolBankInvoiceId?: string;
    sbolDeepLink?: string;
  };
}

export interface ISberbankMethodResponseDeposit extends ISberbankMethodResponseBase {

}
