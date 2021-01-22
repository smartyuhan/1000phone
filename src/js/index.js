// 头部导航栏部分
$('.mark').hide();
$('.menu').hover(function(){
	$('.mark').toggle();
	return false;
})
$('.mark').hover(function(){
	$('.mark').toggle();
	return false;
});

// 轮播图部分

class Slider{
	constructor() {
	    this.pics = document.querySelectorAll('.imgs img');
		this.banner_bottom = document.querySelector('.banner_bottom')
		this.spans = document.querySelectorAll('.cirs li');
		this.bigbox = document.querySelector('.bigbox');
		this.timer = null;
		this.num = this.pics.length;
		this.cur_index = 0;
		this.slide();
		this.time();
		this.addEvent();
	}
	addEvent(){
		for(let i = 0;i < this.num;i ++){
			this.spans[i].onmouseenter = function(){
				this.cur_index = i;
				this.slide()
			}.bind(this)
		}
		
	}
	slide(){
		for(var i = 0 ;i < this.num;i ++){
			this.spans[i].style.opacity = 0.7;
			this.spans[this.cur_index].style.opacity = 1;
			this.spans[i].style.border = 'none';
			this.spans[this.cur_index].style.border = '2px solid yellow';
			this.pics[i].style.display = 'none';
			this.pics[this.cur_index].style.display = 'block';
		}
	}
	time(){
		this.timer = setInterval(() =>{
			this.cur_index ++;
				if(this.cur_index == this.num){
					this.cur_index = 0;
				}
			this.slide();
		},3000)
		this.pics.onmouseenter = function(){
			clearInterval(this.timer)
		}.bind(this)
		this.pics.onmouseleave = function(){
			this.time();
		}.bind(this)
	}
}
new Slider();

// banner bottom显隐
$('.banner_bottom').hide()
$('.banner').hover(function(){
	$('.banner_bottom').slideToggle()
})

//移动产业上滑效果
$('.li_mark').hide()
$('.list li').mouseenter(function(){
	$('.li_mark').slideToggle()
})
