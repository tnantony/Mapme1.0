var serviceURL = "jsondef/api/1.0/";


$(function() {
	$.getDashboard();
	
	});


/* GET DASHBOARD DATA FROM API */
jQuery.getDashboard = function() {
	$.getJSON(serviceURL + 'user/data/dashboard/fetch', function(data) {
		
		/* TOTAL STEPS */
		$("#totalsteps span").html(data.steps.goal.daily);
		
		//alert(data.steps.steps.samples.toSource());
		//  $("#todaysteps span").html(data.steps.steps.samples);
		
		
		$("#username").html(data.profile.personaldetails.name);
		
		$("#notificationstatus").html(data.notifications.length);
		
		$("#badgesholder").getBadges(data.badges);
		
		$("#todaystatus ul").getToday(data.steps.steps.samples);
		
		}).error(function(jqXHR, textStatus, errorThrown) {
		if(window.console) {
			console.debug(errorThrown);
		}
	});}
	
	
	/* GET BADGES */
	jQuery.fn.getBadges = function(data) {
		return this.each(function() {
			var badges=[];
			$.each(data,function(key, val) {
				
				badges += "<br/>User Badge Id" + val.userbadgeid + "<br/>User Badge Id" + val.badgeid + "<br/>Status" + val.status + "<br/>Percentage" + val.percentagecompleted + "<br/><br/>";
				
				});		
			$(this).html(badges);
			});
		};
	
	
	/* GET TODAY DATA */
	jQuery.fn.getToday = function(data) {
		return this.each(function() {
			var todaydata;
			
			
			$.each(data,function(key, val) {
				var todaysteps = (val.data[1][0] == -1) ? todaysteps="NA" : todaysteps=val.data[1][0];
				var todaycals = (val.data[1][1] == -1) ? todaycals="NA" : todaycals=val.data[1][1];
				
				todaydata ='<li id="todaykms"><span></span><br/>KMS</li><li id="todaysteps"><span>' + todaysteps +'</span><br/>STEPS</li><li id="todaycals"><span>' + todaycals +'</span><br/>CALS</li>';
				});
			$(this).html(todaydata);
			
			});
};