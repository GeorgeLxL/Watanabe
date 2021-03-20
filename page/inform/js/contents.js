
(function($) {

	
	$(function(){
		$('input[type=text],textarea,select').focus(function(){
		$(this).addClass('input-focus');
		}).blur(function(){
			$(this).removeClass('input-focus');
		});
	});
	
	$(function(){
		var errorInput = $('.error-input');
		for(var i=0,m=errorInput.length;i<m;i++){
			if($(errorInput[i]).val() == ""){
				$(errorInput[i]).addClass('error-input');	
			}else{
				$(errorInput[i]).removeClass('error-input');	
			}
		}
		$('.error-input').focus(function(){
		$(this).removeClass('error-input');
		}).blur(function(){
			if($(this).val() == ""){
				$(this).addClass('error-input');	
			}
		});
	});
	
	$(function(){
		var spanItem = $('span');
		for(var i=0,m=spanItem.length;i<m;i++){
			if($(spanItem[i]).css('font-style') == 'italic'){
				$(spanItem[i]).addClass('font-italic');
			}
		}
	});
	
	$(function(){
		$("#validate-button").bind('click', function() {
			var inquery, fullname, companyName, address1, address2, address3, address4, email, emailCoform;
			$(".error-txt").remove();
			$(".error-description").remove();
			var flag = true;
			inquery = $("#inquery").val();
			fullname = $("#fullname").val();
			companyName = $("#companyName").val();
			address1 = $("#address1").val();
			address2 = $("#address2").val();
			address3 = $("#address3").val();
			address4 = $("#address4").val();
			email = $("#email").val();
			emailCoform = $("#emailConform").val();

			$("#inquery-ensure").val(inquery);
			$("#fullname-ensure").val(fullname);
			$("#companyName-ensure").val(companyName);
			$("#address-ensure").val(address1 + "" + address2 +"" +  address3 +"" +  address4);
			$("#email-ensure").val(email);
			var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (inquery == "") {
				flag = false;
				$("#inquery").parent().before("<p class='error-txt'>お問い合わせ内容は必須です。</p>");
			}
			if (fullname == "") {
				flag = false;
				$("#fullname").parent().before("<p class='error-txt'>お名前は必須です。</p>");
			}
			if (email == "") {
				flag = false;
				$("#email").parent().before("<p class='error-txt'>メールアドレスは必須です。</p>");
			}
			if (!mailformat.test(email.toLowerCase()) && email !== "") {
				flag = false;
				$("#email").parent().before("<div class='error-description'><p class='lead'>"+ 
				"ご入力されたメールアドレスは登録できない形式のメールアドレスです。<br>お手数をおかけしますが、他のアドレスでご利用いただくようお願いします。</p>"+
				"<p><strong>＜登録できない、よくあるメールアドレスの例＞</strong></p><ul>"+
					"<li>アットマーク（@）の直前やメールアドレスの先頭にピリオド (.) がある（例: .xxxx.@xxxxxx）</li>"+
					"<li>アットマーク（@）より前で、ピリオド (.) が連続している（例: xx..xx@xxxxxx）</li>"+
					"<li>半角英数字と一部の記号（. ! # $ % &amp; ' * + - / = ? ^ _ ` { | } ~）以外の文字列を含んでいる</li>"+
					"<li>アットマーク（@）より後ろに存在しないドメインを指定している</li></ul></div>");
			}
			// return re.test(email.toLowerCase());
			if (email !== "" && email !== emailCoform) {
				flag = false;
				$("#emailConform").parent().before("<p class='error-txt'>ご入力されたメールアドレスに誤りはございませんか？</p>");
			}
			if ($("#check").prop("checked") == false) {
				flag = false;
				$("#check").parent().before("<p class='error-txt'>規約等への同意は必須です。</p>")
			}
			alert(flag);
			if (flag) {
				$(".data-input").toggleClass("display");
				$(".data-input").toggleClass("undisplay");
				$(".form-conf").toggleClass("display");
				$(".form-conf").toggleClass("undisplay");
			}
		});
		$("#send-exec").bind('click'), function(event) {
			// event.preventDefault();
			// var form = $(this);
			// $.ajax({
			// 	url:"sendMail.php",
			// 	method: "post",
			// 	data: form.serialize,
			// 	success: function(response) {
			// 		if (response=="success") {
			// 		document.location.href = "complete.html";
			// 		} else {
			// 			$("#member_form_validity").html("メールの送信に失敗しました。");
			// 		}
			// 	}
			// 	error: function(xhr, status, err) {
			// 		$("#member_form_validity").html("エラーが発生しました。");
			// 	} 
			// });
		}
	});


	
})(jQuery);

