/**
 * Created by rinat_y on 12/26/16.
 */
data = {
    names: [
        "(1) Европа",
        "(2) Казань",
        "(3) Санкт-Петербург",
        "(4) Сочи",
        "(5) Екатеринбург",
        "(6) Нижний Новгород",
        "(7) Минск",
        "(8) Великий Устюг",
        "(9) Калининград",
        "(10) Кострома",
        "(11) Петрозаводск",
        "(12) Рязань",
        "(13) Симферополь",
        "(14) Тверь"
    ],
    days: [
        75,
        614,
        621,
        326,
        191,
        193,
        26,
        14,
        146,
        20,
        77,
        15,
        110,
        100
    ]
};

// sum begin
//console.log(data.days);
var sum = data.days;
var result = sum.reduce(function(a, b) {
    return a + b;
}, 0);
document.getElementById('sum').innerHTML = result;
// sum end

// color  bars begin
var randomColor = (function(){
    var golden_ratio_conjugate = 0.618033988749895;
    var h = Math.random();

    var hslToRgb = function (h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
    };

    return function(){
        h += golden_ratio_conjugate;
        h %= 1;
        return hslToRgb(h, 0.5, 0.60);
    };
})();
// color bars end

var newData = [];
data.names.forEach(function(d, i) {
    newData.push({
        name: d,
        days: data.days[i],
        id: i
    })
});

var margin = {
        top: 20,
        right: 20,
        bottom: 200,
        left: 80
    },
    width = 1150 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .domain(newData.map(function(d) {
        return d.name;
    }))
    .rangeBands([0, width], .1);

var y = d3.scale.linear()
    .domain([0, Math.ceil(d3.max(newData, function(d) {
            return d.days
        }) / 1000) * 1000])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return d.days + " заявок";
    })

var svg = d3.select(".container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

var barWidth = width / data.days.length;

svg.selectAll("rect")
    .data(newData)
    .enter().append("rect")
// this might be affected:
    .attr("transform", function(d, i) {
        return "translate(" + i * barWidth + ",0)";
    })
    .attr("y", function(d) {
        return y(d.days);
    })
    .attr("height", function(d) {
        return height - y(d.days) + 1;
    })
    .style({fill: randomColor})  // color  bars
    .attr("width", barWidth - 1)
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.9em")
    .attr("dy", ".25em")
    .attr("transform", "rotate(-50)");

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-6em")
    .attr("dx", "-15em")
    .style("text-anchor", "end")
    .text("Заявок");

var sortOrder = false;

var sortBars = function() {

    if (sortOrder){
        var sorted = newData.sort(function(a, b) {
            return d3.descending(a.days, b.days);
        });
    } else {
        var sorted = newData.sort(function(a, b) {
            return d3.ascending(a.id, b.id);
        });
    }

    x.domain(sorted.map(function(d) {
        return d.name;
    }))
    svg.selectAll("rect")
        .sort(function(a, b) {
            if (sortOrder) {
                return d3.descending(a.days, b.days);
            } else {
                return d3.ascending(a.id, b.id);
            }
        });
    var transition = svg.transition().duration(750),
        delay = function(d, i) {
            return i * 50;
        };


    transition.select(".x.axis")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.9em")
        .attr("dy", ".25em")
        .attr("transform", "rotate(-50)")
        .delay(delay);

    transition.selectAll("rect")
        .attr("transform", function(d, i) {
            return "translate(" + i * barWidth + ",0)";
        });
}


$("#descending").on("click", function() {
    sortOrder = true;
    sortBars();
});

$("#chronological").on("click", function() {
    sortOrder = false;
    sortBars();
});
