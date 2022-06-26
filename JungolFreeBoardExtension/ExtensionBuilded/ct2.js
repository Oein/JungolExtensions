let sc222 = document.createElement("script");
sc222.innerHTML = `
$(function(){	
	$(".btn_top").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 400);
		return false;
	});
})

function Size_pc(){
	$(".gnb_1dli").hover(function(){
		$(this).find("#gnb_2dul").stop().slideDown(400);
	},function(){
		$(this).find("#gnb_2dul").stop().slideUp(400);
	});
	$("#gnb_1dul").css("top", '');
	$("#gnb_1dul").css("height",  '');
	$("#gnb_1dul").css("text-align",  "center");
	$("html").css("overflow","visible");
	$("body").css("overflow","visible");

	$(".tab_area .tabs a").click(function(){
		var idx = $(this).index();
		$(this).parent(".tabs").children("a").removeClass("current");
		$(this).addClass("current");
		$(this).parents(".tab_area").children(".cons").children("li").removeClass("current");
		$(this).parents(".tab_area").children(".cons").children("li").eq(idx).addClass("current");
	});
}

function Size_mobile(){
	// Main
	var hdH = $("#hd").innerHeight();
		var wH = $(window).height();
		$("#gnb_1dul").css("top", hdH);
		$("#gnb_1dul").css("height",  wH - hdH);
		$("#gnb_1dul").css("text-align",  "center");

		$(".btn_mo_menu").click(function(e){
			e.preventDefault();
			if ($(this).is(".op") == true){
				$("html").css("overflow","visible");
				$("body").css("overflow","visible");
				$(".pop_bg").fadeOut();
				$("#gnb_1dul").removeClass("op");
				$(this).removeClass("op");
			} else {
				$("html").css("overflow","hidden");
				$("body").css("overflow","hidden");
				$(".pop_bg").fadeIn();
				$("#gnb_1dul").addClass("op");
				$(this).addClass("op");
			}
		});

		$("#gnb_1dul > li > a").on("click", function(e){
			if ($(this).parent().is(".mview")){
				if($(this).siblings("ul").is(".sub_gnb_2dul")){
					e.preventDefault();
					$("#gnb_1dul > li").removeClass("mview");
					$("#gnb_1dul > li #gnb_2dul").slideUp(400);
					//console.log("aaaa");
				}
			} else {
				if($(this).siblings("ul").is(".sub_gnb_2dul")){
					e.preventDefault();
					$("#gnb_1dul > li").removeClass("mview");
					$(this).parent().addClass("mview");
					$("#gnb_1dul > li #gnb_2dul").slideUp(400);
					$(this).parent().find("#gnb_2dul").slideDown(400);
					//console.log("dddd");
				}
			}
		});
}
$(window).load(function(){//사이트 최초 접속 시
	var screen_size = $(window).width();
	if(screen_size > 1040){
		Size_pc();
	}else{
		$("#gnb_1dul > li").off("mouseenter");
		$(".btn_mo_menu").off("click");
		$("#gnb_1dul > li > a").off("click");
		Size_mobile();
	}
});

$(window).resize(function(){//사이즈 리사이징 시
	var screen_size = $(window).width();
	if(screen_size > 1040){
		Size_pc();
	}else{
		$("#gnb_1dul > li").off("mouseenter");
		$(".btn_mo_menu").off("click");
		$("#gnb_1dul > li > a").off("click");
		Size_mobile();
	}
});

//v3
window.cancelAnimationFrame="";`;

document.body.appendChild(sc222);
let li = document.createElement("li");
li.className = "gnb_1dli";
li.style.zIndex = 990;

let a = document.createElement("a");
a.href = "/workbook/?freeb";
a.target = "_self";

let span = document.createElement("span");
span.innerText = "자유게시판";

a.appendChild(span);
li.appendChild(a);

setTimeout(() => {
  document.querySelector("#gnb_1dul").appendChild(li);
  console.log("ADD");
}, 1000);
document.querySelector("#gnb_1dul").appendChild(li);
