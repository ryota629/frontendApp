const titleValidation = (title: string): string => {
  if (!title) return 'タイトルを入力してください';

  return '';
};

const dateValidation = (date: string): string => {
  if (!date) return '日付を入力してください';
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return '正しい形式(例:2021-11-01)で日付を入力してください';

  return '';
};
class Validation {
  static formValidate = (type: string, value: string) => {
    switch (type) {
      case 'title':
        return titleValidation(value);
      case 'date':
        return dateValidation(value);
    }
  };
}

export default Validation;