if (process.argv[2] === undefined) return;

const alarmTimers = process.argv.slice(2);
const sortedAlarmTimers = alarmTimers.sort((a, b) => a - b);

for (const char of sortedAlarmTimers) {
  const strToNum = Number(char);
  if (char < 0) continue;
  if (isNaN(strToNum)) continue;
  console.log(strToNum);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(char));
}