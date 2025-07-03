let celsiusTemperatures = [ -2, 34, 56, -10 ];

let fahrenheitTemperatures = celsiusTemperatures.map(function(temp) {
    return (temp * 9/5) + 32;
});

console.log(fahrenheitTemperatures);
