
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(36.450701, 126.570667), //지도의 중심좌표.
	level: 100 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 7);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20);
    } else {
        clearTimeout(this.timer);
    }
};


// 인구,면적,gdp 숫자 증가 기능
var num_count = false;
var timerId = setInterval(function() {
    if(num_count == true) {
        setTimeout(function(){
            new numberCounter("population__value",51821669);
            new numberCounter("area__value",100210);
            new numberCounter("gdp__value",164218000);
        },300);
        clearInterval(timerId);
    }
}, 100);

document.addEventListener('scroll',()=>{
    if (window.scrollY > 500) {
        num_count = true;
    }
})

// 스크롤 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);    
};










