export default function getTime () {
  const time = new Date();
  const DD = time.getDate();
  const MM = time.getMonth();
  const hr = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return hr + ':' + mm + ':' + ss + ' - ' + months[MM] + ', ' +DD;
};
