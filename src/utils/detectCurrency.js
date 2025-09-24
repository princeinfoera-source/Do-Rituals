const currencySymbols = {
  USD: "$",
  INR: "₹",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  RUB: "₽",
  AUD: "A$",
  CAD: "C$",
  NZD: "NZ$",
  SGD: "S$",
  HKD: "HK$",
  KRW: "₩",
  BRL: "R$",
  ZAR: "R",
  AED: "د.إ",
  SAR: "﷼",
  TRY: "₺",
  THB: "฿",
  MYR: "RM",
  PHP: "₱",
  PKR: "₨",
  BDT: "৳",
  NGN: "₦",
  KES: "KSh",
  EGP: "£",
  ARS: "$",
  MXN: "$",
  CLP: "$",
  COP: "$",
  PEN: "S/",
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  CZK: "Kč",
  HUF: "Ft",
  ILS: "₪",
  VND: "₫",
  IDR: "Rp",
  LKR: "Rs",
  MAD: "DH",
  TWD: "NT$",
  UAH: "₴",
  RON: "lei",
  BGN: "лв",
  HRK: "kn",
  ISK: "kr",
};


export async function fetchCurrencyConversionInfo() {
  try {
    const geoRes = await fetch("https://ipapi.co/json/");
    const geoData = await geoRes.json();
    const currencyCode = geoData.currency || "INR";
    const countryName = geoData.country_name || "Unknown Country";

    const ratesRes = await fetch("https://open.er-api.com/v6/latest/INR");
    const ratesData = await ratesRes.json();

    const conversionRate = ratesData.rates[currencyCode] || 1;
    const symbol = currencySymbols[currencyCode] || currencyCode;

    return {
      conversionRate,
      currencyCode,
      countryName,
      symbol,
    };
  } catch (e) {
    return {
      conversionRate: 1,
      currencyCode: "INR",
      countryName: "India",
      symbol: "₹",
    };
  }
}
