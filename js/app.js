$('document').ready(function() {
	topNavClick();
	openExternalWindow();
	// welcomeUser();
});


function openExternalWindow() {
	$('.external-link').click(function(){
  		$(this).prop("target", "_blank");
	});

	return false;
}

function topNavClick() {
	$('.nav-click').click(function() {
		if ( !$(this).hasClass("active") ) {
			$('.nav-click').removeClass("active");
			$(this).addClass("active");
		}

		hideAllContent();

		// Project Descriptions
		var kaplow1   = "I challenged myself to learn vanilla JavaScript with this project. I had originally started off learning jQuery, but I was far too curious about what was going on behind the scenes and took this as an opportunity to really learn some basic javascript. After many nights struggling over variables, writing random string and number generators, and typing 'document.getElementByID...' far too many times, I made Kaplow Quiz.",
			kaplow2   = "Kaplow Quiz was inspired by the game Keep Talking and Nobody Explodes! I had looked through a few quiz apps that others had made and noticed that they were often quizes about niche topics -- if you didn't know much about it, you were bound to fail. So I decided to try and even the playing field for all involved: the quiz randomly generates the answers to the questions and shows them to the player for four seconds. They then have 24 seconds to answer all of these questions.",
			meadow1   = "My first experience playing around with APIs! I was inspired to make this app when I found the sunset/sunrise API; I had been listening to a number of spooky story podcasts and reading a lot of short horror stories at the time. I wound up with some cascading API calls, as information from one was needed for the next, which was a rather interesting result. I used stock footage I found with creative commons licensing and edited the videos myself.",
			meadow2   = "A Calming Meadow, on the surface, is a very simple website. It shows images of fields and blades of tall grass blowing in the wind with only a prompt for your zip code. When you give this website your zipcode, it is then able to assign latitude and longitude coordinates to an api query to find out what time the sun sets in your zipcode. If the sun is still out, nothing changes. Come sundown, however, the app changes to a more menacing view and calls a current story from www.reddit.com/r/nosleep at random.",
			list1     = "Shopping List is a fairly straightforward project: I made this app as a way to give myself an introduction into Ruby on Rails. Understanding the MVC, routing, resources, migrations... it through me for a loop at first; by the end I had the swing of it, though, and had an app that creates dynamic pages, lists, and dependent child items.",
			list2     = "The hardest part of this project for me was learning about routing and making sure all of the pathing was correct. There were a number of errors that spanned the gamut from segments of code that were barking up the wrong tree to frustratingly minor spelling errors. It was a good experience and I learned quite a bit.",
			calendar1 = "This was my first freelance project -- I built a calendar app for the Orbiter 3 theater company in Philadelphia. Their focus is on producing plays written by new local playwrights and I was super excited to help them with this app.",
			calendar2 = "The calendar was built using Ruby on Rails. It was fun to work on; I implemented the OAuth gem in order to allow for twitter and facebook login/authentication.",
			relay1 = "Relay Network is a communications/technology startup located in Radnor, PA. I work there full-time as a front-end engineer. My job is focused on maintaining and developing new features for two of our applications: the client portal and our messaging platform.",
			relay2 = "Our client facing applications were originally built using the Backbone.js framework on the front-end with a back-end written almost strictly in clojure. However, we recently started to rewrite these apps in Angular 2, which I'm naturally hyped about.";
		if ( $(this).is('#nav-relay') ) {
			$('#project-title').html("Relay Network");
			$('#description1').html(relay1);
			$('#description2').html(relay2);
			$('#project-link').html("link to website");
			$('#project-link').prop("href", "http://relaynetwork.com/");
			$('#project-img-container').css("padding-top", "30px");
			$('#project-img').prop("src", "assets/keyboard.svg")
			$('#project-detail-container').show();
		} else if ( $(this).is('#nav-shoplist') ) {
			$('#project-title').html("Shopping List App");
			$('#description1').html(list1);
			$('#description2').html(list2);
			$('#project-link').html("link to project");
			$('#project-link').prop("href", "https://shopping-list-rails.herokuapp.com/");
			$('#project-img-container').css("padding-top", "30px");
			$('#project-img').prop("src", "assets/icon-basket.svg");
			$('#project-detail-container').show();
		} else if ( $(this).is('#nav-calendar') ) {
			$('#project-title').html("Orbiter 3 Donation Calendar");
			$('#description1').html(calendar1);
			$('#description2').html(calendar2);
			$('#project-link').html("link to project");
			$('#project-link').prop("href", "http://orbiter-3-calendar-production.herokuapp.com/");
			$('#project-img-container').css("padding-top", "30px");
			$('#project-img').prop("src", "assets/icon-calendar.svg")
			$('#project-detail-container').show();
		} else if ( $(this).is('#nav-meadow') ) {
			$('#project-title').html("A Calming Meadow");
			$('#description1').html(meadow1);
			$('#description2').html(meadow2);
			$('#project-link').html("link to project");
			$('#project-link').prop("href", "http://sandhage.github.io/a-calming-meadow/");
			$('#project-img-container').css("padding-top", "30px");
			$('#project-img').prop("src", "assets/icon-sun.svg");
			$('#project-detail-container').show();
		} else if ( $(this).is('#nav-about') ) {
			$('#about-me-container').show();
		} else if ( $(this).is('#nav-interests') ) {
			$('#interests-container').show();
		} else if ( $(this).is('#nav-other') ) {
			$('#other-work-container').show();
		} else if ( $(this).is('#nav-contact') ) {
			$('#contact-container').show();
		} else {
			hideAllContent();
			$('.nav-click').removeClass("active");
			$('#home-container').show();		
		}
	});
}

function hideAllContent() {
	$('#home-container').hide();
	$('#project-detail-container').hide();
	$('#about-me-container').hide();
	$('#interests-container').hide();
	$('#other-work-container').hide();
	$('#contact-container').hide();
}

// function welcomeUser() {
// 	console.log("You are in a dark room.");
// 	console.log("What do you do?");
// }