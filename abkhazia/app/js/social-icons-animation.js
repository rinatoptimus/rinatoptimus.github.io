$(function() {
    var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    var el = document.querySelector('.bg-ok'),
        elSpan = el.querySelector('.fa-odnoklassniki'),
        // mo.js timeline obj
        timeline = new mojs.Timeline(),

        // tweens for the animation:

        // burst animation
        tween1 = new mojs.Burst({
            parent: el,
            duration: 1500,
            shape : 'circle',
            fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
            opacity: 0.6,
            childOptions: { radius: {20:0} },
            radius: {40:120},
            count: 6,
            isSwirl: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        // ring animation
        tween2 = new mojs.Transit({
            parent: el,
            duration: 750,
            type: 'circle',
            radius: {0: 50},
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: {15:0},
            opacity: 0.6,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        }),
        // icon scale animation
        tween3 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve(progress);
                elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        });

    // add tweens to timeline:
    timeline.add(tween1, tween2, tween3);

    // when clicking the button start the timeline/animation:
    el.addEventListener('click', function() {
        timeline.replay();
    });








    var scaleCurve2 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    var el2 = document.querySelector('.bg-vk'),
        elSpan2 = el2.querySelector('.fa-vk'),
        // mo.js timeline obj
        timeline2 = new mojs.Timeline(),

        // tweens for the animation:

        // burst animation
        tween1 = new mojs.Burst({
            parent: el2,
            duration: 1500,
            shape : 'circle',
            fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
            opacity: 0.6,
            childOptions: { radius: {20:0} },
            radius: {40:120},
            count: 6,
            isSwirl: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        // ring animation
        tween2 = new mojs.Transit({
            parent: el2,
            duration: 750,
            type: 'circle',
            radius: {0: 50},
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: {15:0},
            opacity: 0.6,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        }),
        // icon scale animation
        tween3 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve2(progress);
                elSpan2.style.WebkitTransform = elSpan2.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        });

    // add tweens to timeline:
    timeline2.add(tween1, tween2, tween3);

    // when clicking the button start the timeline/animation:
    el2.addEventListener('click', function() {
        timeline2.replay();
    });



    var scaleCurve3 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    var el3 = document.querySelector('.bg-fb'),
        elSpan3 = el3.querySelector('.fa-facebook'),
        // mo.js timeline obj
        timeline3 = new mojs.Timeline(),

        // tweens for the animation:

        // burst animation
        tween1 = new mojs.Burst({
            parent: el3,
            duration: 1500,
            shape : 'circle',
            fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
            opacity: 0.6,
            childOptions: { radius: {20:0} },
            radius: {40:120},
            count: 6,
            isSwirl: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        // ring animation
        tween2 = new mojs.Transit({
            parent: el3,
            duration: 750,
            type: 'circle',
            radius: {0: 50},
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: {15:0},
            opacity: 0.6,
            easing: mojs.easing.bezier(0, 1, 0.5, 1)
        }),
        // icon scale animation
        tween3 = new mojs.Tween({
            duration : 900,
            onUpdate: function(progress) {
                var scaleProgress = scaleCurve3(progress);
                elSpan3.style.WebkitTransform = elSpan3.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
            }
        });

    // add tweens to timeline:
    timeline3.add(tween1, tween2, tween3);

    // when clicking the button start the timeline/animation:
    el3.addEventListener('click', function() {
        timeline3.replay();
    });



});