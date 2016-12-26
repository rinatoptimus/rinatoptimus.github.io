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

// code for displaying sum begins
var sum = data.days;
var result = sum.reduce(function(a, b) {
    return a + b;
}, 0);
document.getElementById('sum').innerHTML = result;
// sum ends

// code for color bars begins
var randomColor = (function() {
    var golden_ratio_conjugate = 0.618033988749895;
    var h = Math.random();

    var hslToRgb = function(h, s, l) {
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return '#' + Math.round(r * 255).toString(16) + Math.round(g * 255).toString(16) + Math.round(b * 255).toString(16);
    };

    return function() {
        h += golden_ratio_conjugate;
        h %= 1;
        return hslToRgb(h, 0.5, 0.60);
    };
})();
// color bars ends

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
        return d.days + " шт.";
    })

var svg = d3.select(".container")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

var barWidth = width / data.days.length;

var bars = svg.selectAll(".bar")
    .data(newData)
    .enter().append("g")
    .attr("class", "bar")
    // this might be affected:
    .attr("transform", function(d, i) {
        return "translate(" + i * barWidth + ",0)";
    });

bars.append("rect")
    .attr("y", function(d) {
        return y(d.days);
    })
    .attr("height", function(d) {
        return height - y(d.days) + 1;
    })
    .style({
        fill: randomColor
    }) // color  bars
    .attr("width", barWidth - 1)
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

bars.append("text")
    .text(function(d) {
        return d.days;
    })
    .attr("y", function(d) {
        return y(d.days);
    })
    .attr("x", barWidth / 2)
    .style("text-anchor", "middle");

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
    .text("Заявки");

// tried to add numbers:
/*svg.selectAll("text")
 .data(data.names)
 .enter()
 .append("text")
 .text(function(d){return d;
 })
 .attr("text-anchor", "middle")
 .attr("x", function(d, i) {
 return i * (w / data.days.length) + (w / data.days.length - barPadding) / 2;
 })
 .attr("y", function(d) {
 return h - (d * 4) + 14;
 })

 .attr("font-family", "sans-serif")
 .attr("font-size", "11px")
 .attr("fill", "green");*/


/*svg.selectAll("text")
 .data(data.days)
 .enter().append("text")
 .attr("x", x)
 .attr("y", function(d){ return y(d) + y.rangeBand()/2; } )
 .attr("dx", -5)
 .attr("dy", ".36em")
 .attr("text-anchor", "end")
 .text(String);*/

/*svg.selectAll(".text")
 .data(data)
 .enter()
 .append("text")
 .attr("class","label")
 .attr("x", (function(d) { return xScale(d.names) + xScale.rangeBand() / 2 ; }  ))
 .attr("y", function(d) { return yScale(d.days) + 1; })
 .attr("dy", ".75em")
 .text(function(d) { return d.days; });*/
svg.selectAll("text").
data(data).
enter().
append("svg:text").
attr("x", function(datum, index) {
    return x(index) + barWidth;
}).
attr("y", function(datum) {
    return height - y(datum.days);
}).
attr("dx", -barWidth / 2).
attr("dy", "1.2em").
attr("text-anchor", "middle").
text(function(datum) {
    return datum.days;
}).
attr("fill", "white");

svg.append("text")
    .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .text("Города");
//

var sortOrder = false;
var sortBars = function() {

    if (sortOrder) {
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
    svg.selectAll(".bar")
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

    transition.selectAll(".bar")
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
