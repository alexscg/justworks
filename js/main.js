
	
var rate_btc, rate_eth, percent_btc = 70, percent_eth = 30;

function Get_Data(){
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
}

function Calculate_BTC_ETH_split(v){
	$('#c_bitcoin').val(v*(percent_btc/100)*rate_btc);
	$('#c_etherium').val(v*(percent_eth/100)*rate_eth);
}

function Update_BTC_ETH_split(v){
	percent_btc = v;
	percent_eth = 100 - v;
	$('#split_btc').text(percent_btc);
	$('#split_eth').text(percent_eth);
	Calculate_BTC_ETH_split($('#c_usd').val());
}

$(function() {

	Get_Data();

	$('#c_usd').on('input',function(e){
		Calculate_BTC_ETH_split($(this).val());
	});

	$('#dist_range').on('input',function(e){
		Update_BTC_ETH_split($(this).val());
	});
	
});