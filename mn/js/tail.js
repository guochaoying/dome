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
// 变红边框
$(function(){
		$('.guang div').hover(function() {
		$(this).css('border','1px solid red');
		$('').show();
	}, function() {
		$(this).css('border','1px solid #fff');
		$('').hide();
	});

		$('.cc').hover(function() {
		$(this).css('border','1px solid red');
		$('').show();
	}, function() {
		$(this).css('border','1px solid #ccc');
		$('').hide();
	});
		$('.xk').hover(function() {
		$(this).css('border','1px solid red');
		$('').show();
	}, function() {
		$(this).css('border','1px solid #ccc');
		$('').hide();
	});

		$('.xzbb div').hover(function() {
		$(this).css('border','1px solid red');
		$('').show();
	}, function() {
		$(this).css('border','1px solid #ccc');
		$('').hide();
	});
		$('.zeng div').hover(function() {
		$(this).css('border','1px solid red');
		$('').show();
	}, function() {
		$(this).css('border','1px solid #ccc');
		$('').hide();
	});
})
//二维码隐藏
$(function(){
	$('.ma').hover(function(){
		$('.ma1').show();
	},function(){
		$('.ma1').hide();
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
// 家用电器
$(function(){
	// 第一个
	$('.all ul.rightt li:eq(0)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left1').show();		       
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left1').hide();
	});
	$('.all .left1').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	// 第二个
	$('.all ul.rightt li:eq(1)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left2').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left2').hide();
	});
    $('.all .left2').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
    // 第三个
	$('.all ul.rightt li:eq(2)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left3').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left3').hide();
	});
    $('.all .left3').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
    // 第四个
	$('.all ul.rightt li:eq(3)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left4').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left4').hide();
	});
    $('.all .left4').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	
	$('.all ul.rightt li:gt(2)').hover(function() {
		$(this).css('background','#999395');
	}, function() {
		$(this).css('background','#6e6568');
	});
	// 第五个
	$('.all ul.rightt li:eq(4)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left5').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left5').hide();
	});
    $('.all .left5').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	
	// 第六个
	$('.all ul.rightt li:eq(5)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left6').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left6').hide();
	});
    $('.all .left6').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	
	// 第七个
	$('.all ul.rightt li:eq(6)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left7').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left7').hide();
	});
    $('.all .left7').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第八个
	$('.all ul.rightt li:eq(7)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left8').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left8').hide();
	});
    $('.all .left8').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第九个
	$('.all ul.rightt li:eq(8)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left9').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left9').hide();
	});
    $('.all .left9').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十个
	$('.all ul.rightt li:eq(9)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left10').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left10').hide();
	});
    $('.all .left10').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十一个
	$('.all ul.rightt li:eq(10)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left11').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left11').hide();
	});
    $('.all .left11').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	$('.all ul.rightt li:gt(2)').hover(function() {
		$(this).css('background','#999395');
	}, function() {
		$(this).css('background','#6e6568');
	});

	// 第十二个
	$('.all ul.rightt li:eq(11)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left12').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left12').hide();
	});
    $('.all .left12').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十三个
	$('.all ul.rightt li:eq(12)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left13').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left13').hide();
	});
    $('.all .left13').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十四个
	$('.all ul.rightt li:eq(13)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left14').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left14').hide();
	});
    $('.all .left14').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十五个
	$('.all ul.rightt li:eq(14)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left15').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left15').hide();
	});
    $('.all .left15').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// 第十六个
	$('.all ul.rightt li:eq(15)').hover(function() {
		$(this).css('background','#999395');
		$('.all .left16').show();
	}, function() {
		$(this).css('background','#6e6568');
		$('.all .left16').hide();
	});
    $('.all .left16').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	$('.all ul.rightt li:gt(2)').hover(function() {
		$(this).css('background','#999395');
	}, function() {
		$(this).css('background','#6e6568');
	});
})
//轮换图片
 $(function(){
	//数字控制图片
	$(".photo li").eq(0).show();
	$(".num li").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	 
	var index=$(this).index();
	i=index;
	$(".photo li").eq(index).fadeIn(300).siblings().fadeOut(300);
	 })
	  
	//图片自动轮播
	var i=0;
	var t=setInterval(move,1500)
	function move(){
	   i++;
	   if(i==5){
	   i=0;
	   }
	   $(".num li").eq(i).addClass("active").siblings().removeClass
	   ("active");
	   $(".photo li").eq(i).fadeIn(300).siblings().fadeOut(300);
	   } 
	$(".content").hover(function(){
		clearInterval(t)
		},function(){
			t=setInterval(move,1500);
			})

	$(".content .left").click(function(){
		moveL();
		})
	function moveL(){
	  i--;
	  if(i==-1){
	   i=4;
		 }
	$(".num li").eq(i).addClass("active").siblings().removeClass("active");
	$(".photo li").eq(i).fadeIn(300).siblings().fadeOut(300);
		   }
	$(".content .right").click(function(){
		move();
		})
	})
 //话费
  $(function(){
    $('.wan').hover(function(){
    $(this).find(".wanzong").slideDown();
    $(this).find('.wanzong').stop(true,true);
  },function(){
    $(this).find(".wanzong").slideUp();
    $(this).find(".wanzong").stop(true,true); 
  });

  $("#r2 li").eq(0).addClass("seled");
    $("#r2 li").mouseover(function(){
      $(this).addClass("seled").siblings().removeClass("seled");
      var index=$('#r2 li').index(this);
      $(".zong div").eq(index).show().siblings().hide();
    })
})
  // 第二屏的内容
var nextpos;  //下一个图片位置
var curpos = 0; //当前图片位置
$(function(){
	$('.hao').width(4800);
	$('.hao li').clone(true).appendTo('.hao');

	$('#btn').click(function(){
		if(curpos == -3600){
			curpos = -1200
		}
		nextpos = curpos -1200;
		scrollPic();
		curpos=nextpos;
	})
	$('#btn2').click(function(){
		if(curpos == 0){
			curpos = -2400
		}
		nextpos = curpos + 1200;
		scrollPic();
		curpos=nextpos;
	})
})
function scrollPic(){
	$('.hao').css('left',curpos+'px');
	$('.hao').stop().animate({'left':nextpos+'px'},1000);
}
// 图片自动轮播
$(function(){
	//手动控制轮播图
	$(".imga li").eq(0).show();
	$(".numa li").mouseover(function(){
		$(this).addClass("activea").siblings().removeClass("activea");
		var index=$(this).index();
		i=index;
		$(".imga li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
	//自动控制轮播图
	var i=0;
	var t=setInterval(move,1500);
		//核心向左运动函数
		function moveL(){
			i--; 
			if(i==-1){
				i=3;
			}
			$(".numa li").eq(i).addClass("activea").siblings().removeClass("activea");
			$(".imga li").eq(i).fadeIn(300).siblings().fadeOut(300);
		}
	//核心向右运动函数
		function move(){
		i++; 
		if(i==3){
			i=0;
		}
		$(".numa li").eq(i).addClass("activea").siblings().removeClass("activea");
		$(".imga li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}	
	$(".outa").hover(function(){//定时器的开始与结束
		clearInterval(t);
	},function(){
		t=setInterval(move,1000);
	})
})
// 觅下面的轮换
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
		if(i==5){
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
// 选项卡
$(function(){
		$("#crr li").eq(0).addClass("selected");
        $("#crr li").mouseover(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index=$('#crr li').index(this);
        $(".huozong div").eq(index).show().siblings().hide();
    })
})
$(function(){
	$('.bj').hover(function(){
		$('.ycfir2').show();
	},function(){
		$('.ycfir2').hide();
	})
})
$(function(){
	$('.hx').hover(function(){
		$('.xinyin').show();
	},function(){
		$('.xinyin').hide();
	})
})
$(function(){
	$('.zeng1').hover(function(){
		$('.yinchang').show();
	},function(){
		$('.yinchang').hide();
	})
})
$(function(){
	$(".cai .cai4 .caia1").hover(function() {
  $('.cangl').show();
}, function() {
  $('.cangl').hide();
});
$(".cai .cai4 .caia2").hover(function() {
  $('.cangl1').show();
}, function() {
  $('.cangl1').hide();
});
$(".cai .cai4 .caia3").hover(function() {
  $('.cangl2').show();
}, function() {
  $('.cangl2').hide();
});
$(".cai .cai4 .caia4").hover(function() {
  $('.cangl3').show();
}, function() {
  $('.cangl3').hide();
});
$(".cai .cai4 .caia5").hover(function() {
  $('.cangl4').show();
}, function() {
  $('.cangl4').hide();
});
$(".cai .cai4 .caia6").hover(function() {
  $('.cangl5').show();
}, function() {
  $('.cangl5').hide();
   })
})

