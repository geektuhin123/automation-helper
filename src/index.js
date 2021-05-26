const { exec } = require("child_process");

// sudo timedatectl set-ntp false
// sudo date -s "${dateFormat('5/25/2021 20:48:22', 'UTC:mm/dd/yyyy HH:MM:ss')}" --utc
// sudo timedatectl set-timezone "Asia/Kolkata"
// sudo hwclock -w --utc

const setDateTime = (dateTime, options) => {
  // To disable NTP time synchronization
  exec(`sudo timedatectl set-ntp false`);
  // set date time
  // exec(`${sudo}date -s "${dateFormat(dateTime, 'UTC:mm/dd/yyyy HH:MM:ss')}" --utc`);
  exec(`sudo timedatectl set-time '${dateTime}'`);

  // set timezone
  if (options.timeZone) {
    exec(`sudo timedatectl set-timezone "${options.timeZone}"`);
  }
  //Sync the hardware clock.”
  exec(`sudo hwclock -w --utc`);
};

module.exports = setDateTime;
