function calculate() {
	//获取到本金
	var principal=document.loandata.principal.value;
	//年利率转换成月利率
	var interest=document.loandata.interest.value/100;
	//年限转换成月数
	var payments=document.loandata.years.value*12;

	//var x=Math.pow(1+interest,payments);
	//var monthly=(principal*x*interest)/(x-1);
	var monthly=principal*(1+interest)/payments;
	var total = principal*(1+interest);
	var totalinterest=total - principal;

	if (!isNaN(monthly) && (monthly!= Number.POSITIVE_INFINITY) && (monthly!=Number.NEGATIVE_INFINITY)) {
		document.loandata.payment.value=round(monthly);
	document.loandata.total.value=round(total);
	document.loandata.totalinterest.value=round(totalinterest);
	}
	
}
function round(x){
	return Math.round(x*100)/100;
}