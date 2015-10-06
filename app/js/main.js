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

// ---------------- INDEX CONTENT INTRO

setTimeout(function(){
    $('.index-wrap').removeClass('hide').addClass('animated fadeIn');
},3500);

// ---------------- D3 SKILLS GRAPH

$('#run').on('click', function() {

// mbostock margin convention
var margin = { top: 20, right:10, bottom:20, left: 40 },
    width = 1000 - margin.right - margin.left,
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
    .rangeRoundBands([0,width], 0.4, 0.4);

var yScale = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");


var data = [
    {skill:"PHP", value:5},
    {skill:"CSS", value:9},
    {skill:"HTML", value:7},
    {skill:"JS", value:6},
    {skill:"Design", value:4},
  	{skill:"SQL", value:5}
  ];

//loop through the data object
  data.forEach(function(d) {
    d.num = +d.value;
    d.skill = d.skill;
  });

//specify the domains of the x and y scales
  xScale.domain(data.map(function(d) { return d.skill; }));
  yScale.domain([0, d3.max(data, function(d) { return 10; })]);

//draw the bars
  svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('height', 0)
      .attr('y', height)
      .transition().duration(2000)
      .delay(100)
      .attr ({
        'x': function (d) { return xScale(d.skill); },
        'y': function (d) { return yScale(d.num); },
        'width': xScale.rangeBand(),
        'height': function (d) { return height - yScale(d.num) }
      })
      .style('fill', function(d,i) { return 'rgb( 200, 15, ' + ((i * 20) + 40) + ')' })
      // .style('stroke', 'white')
      .style('stroke-width', '1');

//label the bars
svg.selectAll('text')
.data(data)
.enter()
.append('text')
.text(function (d) { return d.num })
.attr('x', function (d) { return xScale(d.skill) + xScale.rangeBand()/2; })
.attr('y', function(d) { return yScale(d.num) + 25; })
.style({'font-family':'Century Gothic', 'font-size':'18px', 'fill':'white', 'text-anchor':'middle'});

//draw the x Axis
svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .style({'font-family':'Century Gothic', 'font-size':'1em', 'fill':'red', 'font-weight':'bold'})
    .call(xAxis);

//draw the y Axis
svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .style({'font-family':'Century Gothic', 'font-size':'12px', 'fill':'white'});

});

// VOICE CONTROL
// if (annyang) {
//
// 	  var commands = {
// 	    'down': function(){
//         $.fn.fullpage.moveSectionDown();
//         console.log('okayyyy');
//       },
//
// 			'up': function(){
//         $.fn.fullpage.moveSectionUp();
//       },
//
//       'right': function(){
//         $.fn.fullpage.moveSlideRight();
//       },
//
//       'left': function(){
//         $.fn.fullpage.moveSlideLeft();
//       }
//
// 	  };
//
// 	  // Add our commands to annyang
// 	  annyang.addCommands(commands);
//
// 	  // Start listening.
// 	  annyang.start();
// }



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
