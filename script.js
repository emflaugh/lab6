function tempConverter(temp, tempScale) {
  var cToF=((temp - 32) / 1.8).toFixed(0);
  var ftoC=((temp * 1.8) + 32).toFixed(0);

  if (tempScale === "C"){
    console.log (temp + " Degrees Farenheight is equal to " + cToF + " Degrees Celsius");
  } else if (tempScale === "F") {
    console.log (temp + " Degrees Celsius is equal to " + cToF + " Degrees Farenheight");
  } else {
    console.log ("Please input C or F.")
  }
}

tempConverter(100,"C")
tempConverter(30,"F")
