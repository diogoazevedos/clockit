const moment = require('moment');

const currentDate = () => moment().format('Y-M-DD');

const currentTime = () => moment().format('HH:mm');

const getDiffPeriod = (start, end) => {
  if (!start) {
    return 0;
  }
  const startLunch = moment(start, 'HH:mm');

  const endLunch = moment(end, 'HH:mm');

  return endLunch.diff(startLunch, 'minutes');
};

const getHours = time => Math.floor(time / 60);

const getMinutes = time => time % 60;

const formatTime = time => (time < 10) ? `0${time}` : time;

const getTotalWork = (record) => {
  const totalDayMinutes = getDiffPeriod(record.start_day, record.end_day);
  const totalLunchMinutes = getDiffPeriod(record.start_lunch, record.end_lunch);

  const totalWorkTime = totalDayMinutes - totalLunchMinutes;

  return `${formatTime(getHours(totalWorkTime))}:${formatTime(getMinutes(totalWorkTime))}`;
};

const workUntil = workPeriodMinutes => moment().add(workPeriodMinutes, 'minutes').format('HH:mm')

module.exports = {
  getDiffPeriod,
  getTotalWork,
  formatTime,
  getHours,
  getMinutes,
  currentDate,
  currentTime,
  workUntil,
};
