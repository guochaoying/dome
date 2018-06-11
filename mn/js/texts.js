//北京
$(function(){
	$('.bei').hover(function(){
		$('.nav2').show();
	},function(){
		$('.nav2').hide();
	})
})
$(function(){
		$(".to ul li").mouseover(function(){
		var index=$(".to ul li").index(this);
		$(this).addClass('.to ul li');
		$(".he>div").eq(index).show().siblings().hide();
	})
})
//二维码隐藏
$(function(){
	$('.ma').hover(function(){
		$('.ma1').show();
	},function(){
		$('.ma1').hide();
	})
})
//全部分类隐藏的部分
$(function(){
	$('.qbfl').hover(function(){
		$('.qbfly').show();
	},function(){
		$('.qbfly').hide();
	})
})
$(function(){
	$('.jd').hover(function(){
		$('.a').show();
	},function(){
		$('.a').hide();
	})	
})
$(function(){
	$('.kf').hover(function(){
		$('.b').show();
	},function(){
		$('.b').hide();
	})
})
$(function(){
	$('.wz').hover(function(){
        $('.c').show();
	},function(){
		$('.c').hide();
	})
})
//购物车
$(function(){
	$('.gou').hover(function(){
        $('.che').show();
	},function(){
		$('.che').hide();
	})
})
// 轮换照片
$(function(){
	//手动控制轮播图
	$(".imgb li").eq(0).show();
	$(".numb li").mouseover(function(){
		$(this).addClass("activeb").siblings().removeClass("activeb");
		var index=$(this).index();
		i=index;
		//alert(index)
		$(".imgb li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
	//自动控制轮播图
	var i=0;
	var t=setInterval(move,1500);
	//核心向左运动函数
	function moveL(){
		i--; 
		if(i==-1){
			i=5;
		}
		$(".numb li").eq(i).addClass("activeb").siblings().removeClass("activeb");
		$(".imgb li").eq(i).fadeIn(300).siblings().fadeOut(300);
		}
	//核心向右运动函数
		function move(){
		i++; 
		if(i==3){
			i=0;
		}
		$(".numb li").eq(i).addClass("activeb").siblings().removeClass("activeb");
		$(".imgb li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}	
	$(".outb").hover(function(){//定时器的开始与结束
		clearInterval(t);
	},function(){
		t=setInterval(move,1000);
	})
})

