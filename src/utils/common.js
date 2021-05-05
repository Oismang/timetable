import 'intl';
import 'intl/locale-data/jsonp/en'; 

export const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const datediff = (first, second) => {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export const formatDate = (date) => {
  const join = (t, a, s) => {
    const format = (m) => {
      let f = new Intl.DateTimeFormat('en-us', m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  const format = [{day: '2-digit'}, {month: '2-digit'}, {year: 'numeric'}];

  return join(new Date(date), format, '.');
}