(function(){
    console.log('Ready, Set, Go');

    (function(){
        var sun = document.getElementById('sun');
        function placeSun() {
            var now = new Date();
            var fraction = (now.getHours()*60 + now.getMinutes())/(24*60);
            var position = fraction * 2000;
            console.log('moving the sun to ', position);
            sun.setAttributeNS(null, 'cx', position);
        }

        placeSun(); setInterval(placeSun, 60 * 1000);
    })();
})();
