export type WindowWithOneTrustType = Window &
  typeof globalThis & {
    OneTrust?: {
      initializeCookiePolicyHtml: () => void;
    };
  };
