var stockdata=[];
	
$(function() {
	$('.input-append.date').datepicker({
		calendarWeeks: true,
		autoclose: true
	});

	$.getJSON('js/test.json', function(data) {
		
		
		for(var i = 0; i < data.length; i++) {
			var val = [];
			val.push(new Date(data[i].Date).getTime());
			val.push(data[i].High);
			stockdata.push(val);
		}
		
		
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2014, 0, 8)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
			$('#value').html("$"+data[0].High);
	});
	$("#1D").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2014, 0, 17)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#7D").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2014, 0, 8)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#1M").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2013, 11, 17)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#3M").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2013, 9, 17)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#6M").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2013, 6, 17)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#1Y").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2013, 0, 17)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#YTD").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2014, 0, 1)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});
	$("#ALL").click(function () {
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(2011, 5, 1)).getTime(),
					max: (new Date(2014, 0, 17)).getTime()
				}
			});
		});

	$("#rangeDate").click(function () {
		
		var to = new Date($('#To').val());
		var from = new Date($('#From').val());
		
		if (!Date.parse(from) ) {
			alert('Please enter valid \'From\' date!');		
			return;
		}
		
		if (!Date.parse(to) ) {
			alert('Please enter valid \'To\' date!');		
			return;
		}
		
		if(from > to)
		{
			alert('Please enter valid date range!');
			return;
		}
		
		
			$.plot("#placeholder", [stockdata], {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: from.getTime(),
					max: to.getTime()
				}
			});
	});

});
