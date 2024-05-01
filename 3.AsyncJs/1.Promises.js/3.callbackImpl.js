// task :
// 1. write a function download data from url
// 2. write a function to save that download data on  a file and return filename
// 3. write a function to upload the file written in previous step to a new url

function fetchCustom(url, fn) {
    // mimic the process
    console.log("start download from", url);
    setTimeout(function proccess() {
      console.log("download complete");
      let response = "dummy data";
      fn(response);
      console.log("ending the function");
    }, 3000);
  }
  
  function writeFile(data, fn) {
    console.log("start writing data", data);
    setTimeout(function process() {
      console.log("writing complete");
      let filename = "output.txt";
      fn(filename);
      console.log("writing ending");
    }, 4000);
  }
  
  function uploadFile(filename, newurl, fn) {
    console.log("upload started");
    setTimeout(function process() {
      console.log("FILE", filename, "upload successfully on", newurl);
      let uploadResponse = "SUCCESS";
      fn(uploadResponse);
      console.log("upload ending");
    }, 2000);
  }
  
  let response = fetchCustom(
    "www.google.com",
    function downloadCallback(response) {
      console.log("downloaded the respone", response);
      writeFile(response, function writeCallback(filenameResponse) {
        console.log("new file written is", filenameResponse);
        uploadFile(
          filenameResponse,
          "www.facebook.com",
          function uploadCallback(uploadResponse) {
            console.log("upload completed", uploadResponse);
          }
        );
      });
    }
  );
  