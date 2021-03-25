//                                              (1+rate)^nper -1
//  fv = -pv*(1+rate)^nper - pmt*(1+rate*type)*------------------
//                                                   rate
//

export default function fv(rate, nper, pmt, pv) {
  if (rate === 0) {
    return -pv - pmt * nper;
  }

  const interest = 1 + rate;
  const powerOfRate = Math.pow(interest, nper);

  return -pv * powerOfRate - (pmt / rate) * 1 * (powerOfRate - 1);
}

export function fvWithReturn(rate, nper, pmt, pv) {
  const deposit = -pv - pmt * nper;
  const future_value = -fv(rate, nper, pmt, pv);

  const locale = navigator.languages[0] || 'nb-NO';
  const formatter = new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 2
  });

  return {
    value: formatter.format((future_value)),
    return: formatter.format((future_value + deposit))
  }
}
