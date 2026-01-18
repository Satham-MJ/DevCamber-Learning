const color = require("colors");
if (process.argv[2] == "-i") {
  console.log(`data imported...`.green.inverse);
}
if (process.argv[2] == "-d") {
  console.log(`data destroyed...`.red.inverse);
}
