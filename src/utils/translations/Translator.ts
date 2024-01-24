import i18next, { TOptions } from "i18next";
import { useTranslation as _useTranslation } from "react-i18next";
import DefaultLanguageTranslations from "src/assets/locales/en.json";

export type TransKey = keyof typeof DefaultLanguageTranslations;

export type ApiErrorResponse = {
  message: string;
  content?: string;
  params: string[];
  fieldErrors: {
    [key: string]: string;
  };
  errorCode: string;
  status: number;
};

const shortenTransValue = (translationValue: string) => translationValue?.slice(0, 25);

const addToTranslationLookup = (transValue: string, [key, options]: [TransKey, TOptions?]) => {
  const shortenedTranslationValue = shortenTransValue(transValue);
  translationLookup[shortenedTranslationValue] = [key, options];
};

const translationLookup: {
  [translationValue: string]: [TransKey, TOptions?];
} = {};

export function translate(key: TransKey, options?: TOptions): string {
  const value = i18next.t(key, options);
  addToTranslationLookup(value, [key, options]);
  return value;
}

export const useTranslation = () => {
  _useTranslation();

  return {
    t: translate
  };
};

export function translateError(error: ApiErrorResponse) {
  if (!error.content) {
    return translate("TEST_KEY");
  }

  return error.content;
}
