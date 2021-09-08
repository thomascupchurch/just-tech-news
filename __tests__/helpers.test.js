test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

  const {format_date} = require('../utils/helpers');

  test('format_plural() correctly pluralizes words', () => {
      
      expect(format_plural('Tiger', 2)).toBe('Tigers');
      expect(format_plural('Lion', 1)).toBe('Lion');
  });

  const {format_plural} = require('../utils/helpers');