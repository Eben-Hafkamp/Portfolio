$(function() {

// ---------------- FULL PAGE SCROLL

    $('#fullpage').fullpage({
        anchors: ['one', 'two', 'three', 'four'],
        navigation:true,
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5
    });

// ---------------- BURGER TOGGLE STATES

    $('.burger-button').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('goto-cross').toggleClass('goto-burger');
    });

// ---------------- BURGER NAVIGATION MOBILE PHONE

    var isOpen = false;
    $('#bars').on('click', function() {
        if(isOpen == true) {
            $('.sidebar').addClass('animated fadeOut');
            $('.sidebar').one('animationend', function() {
              $(this).removeClass('animated fadeOut').addClass('hide');
            });
            isOpen = false;
        } else {
            $('.sidebar').removeClass('hide');
            $('.sidebar').addClass('animated fadeIn');
            $('.sidebar').one('animationend', function() {
              $(this).removeClass('animated fadeIn')
            });
            isOpen = true;
        };
    });

// ---------------- SLICK CAROUSEL

    $('.slider-nav').slick({
      centerMode: true,
      centerPadding: '1em',
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true,
      speed:250,
      index: 2,
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });

// ---------------- MOUSE SCROLL KEYFRAMES INTRO

    setTimeout(function(){
        $('.mouse').addClass('show').addClass('animated fadeIn');
    }, 4000);
    setTimeout(function(){
        $('.mouse').addClass('animated fadeOut');
    }, 8000);

// ---------------- FIXED NAVIGATION BAR MOBILE PHONE

setTimeout(function(){
    $('.in').addClass('show').addClass('animated fadeIn');
}, 2500);

// ---------------- LOGO INTRO

setTimeout(function(){
    $('.container').removeClass('hide');
}, 1000);

// ---------------- D3 SKILLS GRAPH

// mbostock margin convention
var margin = { top: 20, right:10, bottom:100, left: 40 },
    width = 700 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

//g element is a container used to group objects. transformations applied to the g element are performed on all of its child elements.
var svg = d3.select('#skillGraph')
    .attr ({
      "width" : width + margin.right + margin.left,
      "height" : height + margin.top + margin.bottom
    })
    .append('g')
      .attr("transform", "translate(" + margin.left + ',' + margin.right + ')');

var xScale = d3.scale.ordinal()
    .rangeRoundBands([0,width], 0.2, 0.2);

var yScale = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");


var data = [
    {skill:"PHP", value:50},
    {skill:"CSS", value:90},
    {skill:"HTML", value:70},
    {skill:"JS", value:60},
    {skill:"Design", value:40},
  	{skill:"SQL", value:50}
  ];

//loop through the data object
  data.forEach(function(d) {
    d.num = +d.value;
    d.skill = d.skill;
    console.log(d.value);
  });

//specify the domains of the x and y scales
  xScale.domain(data.map(function(d) { return d.skill; }));
  yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

//draw the bars
  svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr ({
        'x': function (d) { return xScale(d.skill); },
        'y': function (d) { return yScale(d.num); },
        'width': xScale.rangeBand(),
        'height': function (d) { return height - yScale(d.num) }
      })







// var data = [
// 		{skill:"PHP", value:50},
// 		{skill:"CSS", value:90},
// 		{skill:"HTML", value:70},
// 		{skill:"JS", value:60},
// 		{skill:"Design", value:40},
// 		{skill:"SQL", value:50}
// 	];
//
// 	var colour = d3.scale.category10();
//
// 	var svg = d3.select("#skillGraph");
//
// 	svg.selectAll('rect')
// 		.data(data,function(d){ return d.skill})
// 		.enter()
// 		.append('rect')
// 		.attr('width',50)
// 		.attr('height',0)
// 		.attr('x',function(d,i){ return i*100})
// 		.attr('y',500)
// 		.attr('fill',function(d,i){ return colour(d.skill)})
// 		.transition()
// 		.duration(1000)
// 		.attr('height',function(d){ return d.value*5})
// 		.attr('y',function(d){ return 500 - d.value*5});
//
// 	svg.selectAll('text')
// 		.data(data,function(d){ return d.skill})
// 		.enter()
// 		.append('text')
// 		.text(function(d){ return d.skill})
// 		.attr('font-size',20)
// 		.attr('x',function(d,i){ return i*100})
// 		.attr('y',function(d){ return 500 - d.value*5 - 10});
//
// 	document.getElementById("update").onclick = function(){
//
// 		var newData = [
// 			{skill:"JS", value:60},
// 			{skill:"PHP", value:70},
// 			{skill:"D3", value:50},
// 			{skill:"Testing", value:40},
// 			{skill:"Project", value:60},
// 			{skill:"CSS", value:90},
// 			{skill:"HTML", value:90}
// 		];
//
// 		var updatedCollection = svg.selectAll('rect')
// 			.data(newData,function(d){ return d.skill});
//
// 		var updatedTextCollection = svg.selectAll('text')
// 			.data(newData,function(d){ return d.skill});
//
//
// 		updatedCollection.enter()
// 			.append('rect')
// 			.attr('width',50)
// 			.attr('height',0)
// 			.attr('x',function(d,i){ return i*100})
// 			.attr('y',500)
// 			.attr('fill',function(d,i){ return colour(d.skill)})
// 			.transition()
// 			.duration(1000)
// 			.attr('height',function(d){ return d.value*5})
// 			.attr('y',function(d){ return 500 - d.value*5});
//
// 		updatedTextCollection.enter()
// 			.append('text')
// 			.text(function(d){ return d.skill})
// 			.attr('font-size',20)
// 			.attr('x',function(d,i){ return i*100})
// 			.attr('y',function(d){ return 500 - d.value*5 - 10});
//
// 		updatedCollection.exit().remove();
// 		updatedTextCollection.exit().remove();
//
// 		updatedCollection.transition().duration(1000)
// 			.attr('x',function(d,i){ return i*100})
// 			.attr('y',function(d){ return 500 - d.value*5})
// 			.attr('height',function(d){ return d.value*5});
//
// 		updatedTextCollection.transition().duration(1000)
// 			.attr('x',function(d,i){ return i*100})
// 			.attr('y',function(d){ return 500 - d.value*5 - 10});
// 	};

// ---------------- FORM USABILITY ON MOBILE PHONE

// $('#contact-textarea').on('focus', function() {
  // console.log("Hi Eben and Shadrak!");
    //document.body.scrollTop = $('#contact-textarea').offset().top;
    //console.log($('body'));
    //$('body').scrollTo('#contact-textarea');

    $('#contact-textarea').on('focus', function() {
      var offset = $('#contact-textarea').offset();
      $('html,body').animate({
        scrollTop: offset.top
      });
    });
});
