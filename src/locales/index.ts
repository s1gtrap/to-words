import { ConstructorOf, LocaleInterface } from '../types';

import enAe from './en-AE';
import enBd from './en-BD';
import enGh from './en-GH';
import enIe from './en-IE';
import enIn from './en-IN';
import enMm from './en-MM';
import enMu from './en-MU';
import enNg from './en-NG';
import enNp from './en-NP';
import enUs from './en-US';
import enGb from './en-GB';
import enPh from './en-PH';
import faIr from './fa-IR';
import frBe from './fr-BE';
import frFr from './fr-FR';
import guIn from './gu-IN';
import hiIn from './hi-IN';
import mrIn from './mr-IN';
import ptBR from './pt-BR';
import trTr from './tr-TR';
import nlSr from './nl-SR';
import eeEE from './ee-EE';
import koKr from './ko-KR';

const LOCALES: { [key: string]: ConstructorOf<LocaleInterface> } = {
  'ee-EE': eeEE,
  'en-AE': enAe,
  'en-BD': enBd,
  'en-GH': enGh,
  'en-IE': enIe,
  'en-IN': enIn,
  'en-MM': enMm,
  'en-MU': enMu,
  'en-NG': enNg,
  'en-NP': enNp,
  'en-US': enUs,
  'en-GB': enGb,
  'en-PH': enPh,
  'fa-IR': faIr,
  'fr-BE': frBe,
  'fr-FR': frFr,
  'gu-IN': guIn,
  'hi-IN': hiIn,
  'mr-IN': mrIn,
  'pt-BR': ptBR,
  'tr-TR': trTr,
  'nl-SR': nlSr,
  'ko-KR': koKr,
};

export default LOCALES;
