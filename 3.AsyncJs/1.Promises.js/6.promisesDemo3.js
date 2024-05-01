function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Going to start download"); //4 
    setTimeout(function process() {
      let data = "dummy data";
      console.log("download completed"); // 6
      resolve(data);
    }, 4000);
    console.log("Timer to mimic download started");// 5
  });
}
console.log("starting the program"); // 1
console.log("We are expecting to mimic a downloader");//2

x = fetchData("www.google.com");//3
console.log(
  "New promise object created successfully but downloading still going on"
);
