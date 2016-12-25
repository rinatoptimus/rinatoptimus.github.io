/**
 * Created by rinat_yuldashbaev on 25.12.16.
 */
data = [
  {label: "Европа", value: 75},
  {label: "Казань", value: 614},
  {label: "Санкт-Петербург", value: 621},
  {label: "Сочи", value: 326},
  {label: "Екатеринбург", value: 191},
  {label: "Нижний Новгород", value: 193},
  {label: "Минск", value: 26},
  {label: "Великий Устюг", value: 14},
  {label: "Калининград", value: 146},
  {label: "Кострома", value: 20},
  {label: "Петрозаводск", value: 77},
  {label: "Рязань", value: 15},
  {label: "Симферополь", value: 110},
  {label: "Тверь", value: 100}
];

//  начало код вывода суммы значений
for (key in data) {
  //myArray[key] - значение ключа
  //console.log(key + " = " + data[key]);
  //console.log(data[key].value); //выводит значения
  //console.log(data.length);
}

var sum = 0;
for (var key in data) {
  sum += data[key].value;
}
;
document.getElementById('sum').innerHTML = sum;

/*for(i=0; i<=data.length; i++) {
 console.log(i);
 }*/
// конец код вывода суммы значений

// color  bars begin
var randomColor = (function () {
  var golden_ratio_conjugate = 0.618033988749895;
  var h = Math.random();

  var hslToRgb = function (h, s, l) {
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

  return function () {
    h += golden_ratio_conjugate;
    h %= 1;
    return hslToRgb(h, 0.5, 0.60);
  };
})();
// color bars end
var div = d3.select("body").append("div").attr("class", "toolTip");

var axisMargin = 20,
  margin = 40,
  valueMargin = 4,
  width = parseInt(d3.select('body').style('width'), 10),
  height = parseInt(d3.select('body').style('height'), 10),
  barHeight = (height - axisMargin - margin * 2) * 0.4 / data.length,
  barPadding = (height - axisMargin - margin * 2) * 0.6 / data.length,
  data, bar, svg, scale, xAxis, labelWidth = 0;

max = d3.max(data, function (d) {
  return d.value;
});

svg = d3.select('body')
  .append("svg")
  .attr("width", width)
  .attr("height", height);

bar = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g");
//.css({fill: randomColor}); - color everything

bar.attr("class", "bar")
  .attr("cx", 0)
  .attr("transform", function (d, i) {
    return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
  });

bar.append("text")
  .attr("class", "label")
  .attr("y", barHeight / 2)
  .attr("dy", ".35em") //vertical align middle
  .text(function (d) {
    return d.label;
  }).each(function () {
  labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
});

scale = d3.scale.linear()
  .domain([0, max])
  .range([0, width - margin * 2 - labelWidth]);

xAxis = d3.svg.axis()
  .scale(scale)
  .tickSize(-height + 2 * margin + axisMargin)
  .orient("bottom");

bar.append("rect")
  .attr("transform", "translate(" + labelWidth + ", 0)")
  .attr("height", barHeight)
  .attr("width", 0)
  .transition()
  .style({fill: randomColor})  // color  bars
  .duration(1500)
  .delay(function (d, i) {
    return i * 250
  })
  .attr("width", function (d) {
    return scale(d.value);
  });

bar.append("text")
  .attr("class", "value")
  .attr("y", barHeight / 2)
  .attr("dx", -valueMargin + labelWidth) //margin right
  .attr("dy", ".35em") //vertical align middle
  .attr("text-anchor", "end")
  .text(function (d) {
    return (d.value + " шт.");
  })
  .attr("x", function (d) {
    var width = this.getBBox().width;
    return Math.max(width + valueMargin, scale(d.value));
  });

bar
  .on("mousemove", function (d) {
    div.style("left", d3.event.pageX + 10 + "px");
    div.style("top", d3.event.pageY - 25 + "px");
    div.style("display", "inline-block");
    div.html((d.label) + "<br>" + (d.value) + "%");
  });
bar
  .on("mouseout", function (d) {
    div.style("display", "none");
  });

svg.insert("g", ":first-child")
  .attr("class", "axisHorizontal")
  .attr("transform", "translate(" + (margin + labelWidth) + "," + (height - axisMargin - margin) + ")")
  .call(xAxis);

//====================================================================
data2 = [
  {label: "Дом", value: 102},
  {label: "Квартира", value: 125},
  {label: "Хостел", value: 123},
  {label: "Гостиница", value: 127}
];


var div = d3.select("body").append("div.test").attr("class", "toolTip");

var axisMargin = 20,
  margin = 40,
  valueMargin = 4,
  width = parseInt(d3.select('body').style('width'), 10),
  height = parseInt(d3.select('body').style('height'), 10),
  barHeight = (height - axisMargin - margin * 2) * 0.4 / data2.length,
  barPadding = (height - axisMargin - margin * 2) * 0.1 / data2.length, // расст. меж барами
  data, bar, svg, scale, xAxis, labelWidth = 0;

max = d3.max(data, function (d) {
  return d.value;
});

svg = d3.select('body')
  .append("svg")
  .attr("width", width)
  .attr("height", height);


bar = svg.selectAll("g")
  .data(data2)
  .enter()
  .append("g");

bar.attr("class", "bar")
  .attr("cx", 0)
  .attr("transform", function (d, i) {
    return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
  });

bar.append("text")
  .attr("class", "label")
  .attr("y", barHeight / 2)
  .attr("dy", ".35em") //vertical align middle
  .text(function (d) {
    return d.label;
  }).each(function () {
  labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
});

scale = d3.scale.linear()
  .domain([0, max])
  .range([0, width - margin * 2 - labelWidth]);

xAxis = d3.svg.axis()
  .scale(scale)
  .tickSize(-height + 2 * margin + axisMargin)
  .orient("bottom");

bar.append("rect")
  .attr("transform", "translate(" + labelWidth + ", 0)")
  .attr("height", barHeight)
  .attr("width", 0)
  .transition()
  .duration(1500)
  .delay(function (d, i) {
    return i * 250
  })
  .attr("width", function (d) {
    return scale(d.value);
  });

bar.append("text")
  .attr("class", "value")
  .attr("y", barHeight / 2)
  .attr("dx", -valueMargin + labelWidth) //margin right
  .attr("dy", ".35em") //vertical align middle
  .attr("text-anchor", "end")
  .text(function (d) {
    return (d.value + " шт.");
  })
  .attr("x", function (d) {
    var width = this.getBBox().width;
    return Math.max(width + valueMargin, scale(d.value));
  });

bar
  .on("mousemove", function (d) {
    div.style("left", d3.event.pageX + 10 + "px");
    div.style("top", d3.event.pageY - 25 + "px");
    div.style("display", "inline-block");
    div.html((d.label) + "<br>" + (d.value) + "%");
  });
bar
  .on("mouseout", function (d) {
    div.style("display", "none");
  });

svg.insert("g", ":first-child")
  .attr("class", "axisHorizontal")
  .attr("transform", "translate(" + (margin + labelWidth) + "," + (height - axisMargin - margin) + ")")
  .call(xAxis);