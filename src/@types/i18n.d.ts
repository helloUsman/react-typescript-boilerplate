import "i18next";
import en from "src/assets/locales/en.json";
import { TOptions } from "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
    };
  }

  interface TFunction {
    (key: keyof typeof en, options: TOptions<TInterpolationMap>): string;
  }
}
