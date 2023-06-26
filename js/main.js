//$('h1').on('click', () => {
//  alert('jQuery works!');
//});

$("h1").click(function(){
	});
	
var rate_btc, rate_eth;


$(function() {
	
		console.log("in");

	$.ajax({

		url : 'https://api.coinbase.com/v2/exchange-rates',
		type : 'GET',
		data : {
			'currency' : 'USD'
		},
		dataType:'json',
		success : function(data) {              
			rate_btc = data.data.rates.BTC;
			$("#rate_btc").text(rate_btc);
			rate_eth = data.data.rates.ETH;
			$("#rate_eth").text(rate_eth);
		},
		error : function(request,error)
		{
			alert("Request: "+JSON.stringify(request));
		}
	});
		c_bitcoin
	$('#c_usd').on('input',function(e){
		var v = $(this).val();
		$('#c_bitcoin').val(v*0.7*rate_btc);
		$('#c_etherium').val(v*0.3*rate_eth);
	});


});