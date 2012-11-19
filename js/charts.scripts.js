$(function ()
{
	var chart;
	$(document).ready(function()
	{
		chart = new Highcharts.Chart({
			chart: {
				renderTo: 'barchart',
				type: 'column',
				backgroundColor: "none",
				},
			credits: {
				text: 'GetActive',
				href: 'http://www.getactive.com'
				},
			exporting : {
				enabled:false	
				},
			title: {
				text: 'WEEK',
				align:'left'
				},
			xAxis: {
				categories: ['SU', 'MO', 'TU', 'WE', 'TH']
				},
			yAxis: {
				min: 0,
				gridLineWidth:0,
				title: {
					text: '',
					enabled: false,
					},
				labels: {
					enabled: false
					},
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
				},
			legend: {
				enabled: false,
				align: 'right',
				x: -100,
				verticalAlign: 'top',
				y: 20,
				floating: true,
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
				borderColor: '#CCC',
				borderWidth: 1,
				shadow: false
				},
			tooltip: {
				formatter: function()
				{
					return '<b>'+ this.x +'</b><br/>'+
					this.series.name +': '+ this.y +'<br/>'+
					'Total: '+ this.point.stackTotal;
				}
				},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
					}
				}
				},
			series: [{
				name: 'Unachived',
				color: "#0099cc",
				borderColor:"none",
				shadow:false,
				data: [5, 3, 4, 7, 2]
				}, /*{
				name: 'Jane',
				data: [2, 2, 3, 2, 1]
				}, */{
				name: 'Achived',
				color:"#00ccff",
				borderColor:"none",
				shadow:false,
				data: [5, 5, 5, 5, 5]
				}]
			});
	}
	);
}
);
$(function ()
{
	var chart;
	$(document).ready(function()
	{
		chart = new Highcharts.Chart({
			chart: {
				renderTo: 'splinechart',
				type: 'spline',
				backgroundColor: "none",
				},
			credits: {
				text: 'GetActive',
				href: 'http://www.getactive.com'
				},
			exporting : {
				enabled:false	
				},
			legend: {
				enabled: false
				},
			title: {
				text: 'Month'
				},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: { // don't display the dummy year
					month: '%e. %b',
					year: '%b'
				}
				},
			yAxis: {
				title: {
					text: ''
					},
				labels: {
					enabled: false
					},
				min: 0,
				minorGridLineWidth: 0,
				gridLineWidth: 0,
				alternateGridColor: null,
				},
			plotOptions: {
				spline: {
					lineWidth: 4,
					states: {
						hover: {
							lineWidth: 5
						}
						},
					marker: {
						enabled: false,
						states: {
							hover: {
								enabled: true,
								symbol: 'circle',
								radius: 5,
								lineWidth: 1
							}
						}
						},
					pointInterval: 86400000, // one hour
					pointStart: Date.UTC(2012, 5, 6, 0, 0, 0)
					}
				},
			series: [{
				name: 'This Month',
				data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
				7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
				8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.4,
				7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
				3.0, 3.0]
				},
			]
			,
			navigation: {
				menuItemStyle: {
					fontSize: '10px'
				}
			}
			});
	}
	);
}
);