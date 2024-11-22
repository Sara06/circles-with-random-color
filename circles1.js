(function(win, doc) {

    win.onload = init;

    function init() {
        // access the canvas element and its context
        var canvas = doc.getElementById("testCanvas");
        var context = canvas.getContext("2d");
        var ballSize = 30; //radius

         // mouse down event handler
        canvas.onmousedown = function(e) {
            // mouse x and y relative to canvas
            x = e.pageX - e.target.offsetLeft;
            y = e.pageY - e.target.offsetTop;
            
            var nextColor = randomColor();

            context.fillStyle = nextColor;
            context.beginPath();
            context.arc(x, y, ballSize, 0, Math.PI * 2);
            context.fill();
            context.closePath();
            
        };

    }

})(window, document);
