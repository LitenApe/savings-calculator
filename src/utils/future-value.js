//                                              (1+rate)^nper -1
//  fv = -pv*(1+rate)^nper - pmt*(1+rate*type)*------------------
//                                                   rate
//

export default function fv(rate, nper, pmt, pv) {
  if (rate === 0) {
    return -pv - pmt * nper;
  }

  const interest = 1 + rate;
  const powerOfPeriodes = Math.pow(interest, nper);

  return -pv * powerOfPeriodes - (pmt / rate) * 1 * (powerOfPeriodes - 1);
}

export function fvWithReturn(rate, nper, pmt, pv) {
  const deposit = -pv - pmt * nper;
  const future_value = -fv(rate, nper, pmt, pv);

  return {
    deposit: -deposit,
    value: future_value,
    return: (future_value + deposit),
  }
}
