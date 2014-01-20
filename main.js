var stockdata=[];
	
$(function() {
	$('.input-append.date').datepicker({
		calendarWeeks: true,
		autoclose: true
	});

	$.getJSON('js/test.json', function(data) {
		
		for(var i = 0; i < json.length; i++) {
			stockdata.push(new Date(stockdata[i].Date).getTime()*1000 + " , " + stockdata[i].High);
		}
		showChart(1);
	});
});

function showChart(value){
	
	var values =[];
	var date = new Date("2014-01-17");
	
	switch(value){
		case 1:		
			for(var i =0;i<10;i++)
			{
				console.log(new Date(stockdata[i].Date).getTime() + " , " + stockdata[i].High);
				values.push(new Date(stockdata[i].Date).getTime(), stockdata[i].High);
			}
		break;
		
		case 2:
			for(var i =0;i<7;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		break;
		
		case 3:
			for(var i =0;i<10;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		break;
		
		case 4:
			for(var i =0;i<10;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		break;
		
		case 5:
			for(var i =0;i<10;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		break;
		
		case 6:
			for(var i =0;i<14;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		
		break;
		
		case 7:
			for(var i =0;i<12;i++)
			{
				values.push(stockdata[i].Date, stockdata[i].High);
			}
		break;
		
		case 8:
			break;
		
		case 9:
			break;
	
	}
		

	

		var plot = $.plot("#placeholder", [
			{ data: values, label: "stock price"}
		], {
			series: {
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			yaxis: {
				min: 0,
				max: 3
			},
			xaxis: 
				  {min: Date.UTC(2014, 0, 0, 0, 0), max: Date.UTC(2014, 1, 0, 0, 0),
                        mode: "time",  
                        tickSize: [1, "day"]
			 }

		});

		$("<div id='tooltip'></div>").css({
			position: "absolute",
			display: "none",
			border: "1px solid #fdd",
			padding: "2px",
			"background-color": "#fee",
			opacity: 0.80
		}).appendTo("body");

		$("#placeholder").bind("plothover", function (event, pos, item) {

			if ($("#enablePosition:checked").length > 0) {
				var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
				$("#hoverdata").text(str);
			}

			if ($("#enableTooltip:checked").length > 0) {
				if (item) {
					var x = item.datapoint[0].toFixed(2),
						y = item.datapoint[1].toFixed(2);

					$("#tooltip").html(item.series.label + " of " + x + " = " + y)
						.css({top: item.pageY+5, left: item.pageX+5})
						.fadeIn(200);
				} else {
					$("#tooltip").hide();
				}
			}
		});

		$("#placeholder").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
				plot.highlight(item.series, item.datapoint);
			}
		});

		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
}
