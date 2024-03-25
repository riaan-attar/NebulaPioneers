/**
 * Created by sanps on 22-Jun-16.
 */

function drawing(id, reduceAmount) {
    var c = document.getElementById(id);
    var ctx = c.getContext('2d');
    var xMax = c.width = window.screen.availWidth;
    var yMax = c.height = window.screen.availHeight;

    var hmTimes = Math.round(xMax + yMax);

    for (var i = 0; i <= hmTimes / reduceAmount; i++) {
        var randomX = Math.floor((Math.random() * xMax) + 1);
        var randomY = Math.floor((Math.random() * yMax) + 1);
        var randomSize = Math.floor((Math.random() * 2) + 1);
        //var randomOpacityOne = Math.floor((Math.random() * 9) + 1);
        //var randomOpacityTwo = Math.floor((Math.random() * 9) + 1);
        //var randomHue = Math.floor((Math.random() * 360) + 1);
        if (randomSize > 1) {
            ctx.shadowBlur = Math.floor((Math.random() * 15) + 5);
            ctx.shadowColor = "transparent";
        }
        ctx.beginPath();

        ctx.fillStyle = "rgb(236, 236, 236)"; //+ randomOpacityOne + randomOpacityTwo + ")";
        ctx.arc(randomX, randomY, randomSize, 0, 2 * Math.PI);
        ctx.fill();
    }

}
drawing('stars1', 15);
drawing('stars2', 25);
//drawing('stars3', 45);
//drawing('stars4', 85);
//drawing('stars5', 150);
