const API_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

$(() => {
  $.get(API_URL, (data) => {
    console.log(data);
    document.write("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
  });
});

let func = async () => { /* async code */ }

let result = await func();
