import moment from 'moment-jalaali';
import "moment/locale/fa"
import i18n from '../i18n';

moment.updateLocale('fa', {
  jMonths: [
    'فروردین', 'اردیبهشت', 'خرداد',
    'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر',
    'دی', 'بهمن', 'اسفند'
  ],
  jWeekdays: [
    'شنبه', 'یکشنبه', 'دوشنبه',
    'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'
  ]
});

export const getFormattedDateTime = () => {
  const isPersian = i18n.language === 'fa';
  moment.locale(isPersian ? 'fa' : 'en');
  return {
    dayMonth: toPersianNumbers(moment().jDate()),
    dayName: moment().format('dddd'), // استفاده از فرمت استاندارد
    fullDate: isPersian
      ? `${toPersianNumbers(moment().jYear())} ${moment().format('jMMMM')}`
      : moment().format('DD MMM, YYYY'),
    time: isPersian
      ? toPersianNumbers(moment().format('HH:mm'))
      : moment().format('h:mm A'),
    formatted: isPersian
      ? `${moment().format('dddd')}\n${moment().jDate()} ${moment().format('jMMMM')} ${moment().jYear()} ${moment().format('HH:mm')}`
      : `${moment().format('dddd')}\n${moment().format('MMM D, YYYY')} ${moment().format('h:mm A')}`
  };
};

export const toPersianNumbers = (num: number | string) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, d => persianDigits[parseInt(d)]);
};

export const formatTemp = (temp: number) => {
  return i18n.language === 'fa' 
    ? toPersianNumbers(Math.round(temp))
    : Math.round(temp);
};