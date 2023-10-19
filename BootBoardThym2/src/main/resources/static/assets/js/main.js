

/* 부위에 따른 넘버링*/
/*
머리 : 1 (주의할 점 : 3개의 함수중, font함수를 제외한 앞에 두 함수는 넘버링이 붙지 않음)
장 : 2


*/



/* 머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리머리*/
/* 머리부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light1');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.04) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.04) + 'px';

        
        headLight.style.top = '5.5%'; // 원하는 위치로 조절
        headLight.style.left = '48%'; // 원하는 위치로 조절
        
    }

/* 머리부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div1');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '3%'; // 원하는 위치로 조절
    headLightDiv.style.left = '4.5%'; // 원하는 위치로 조절
}

/* 머리부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize1() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div1').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize1);
window.addEventListener('resize', adjustFontSize1);




/*장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장장*/
/* 장부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition2() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light2');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.05) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.05) + 'px';
        
        headLight.style.top = '38.5%'; // 원하는 위치로 조절
        headLight.style.left = '48%'; // 원하는 위치로 조절
        
    }

/* 장부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv2() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div2');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '17%'; // 원하는 위치로 조절
    headLightDiv.style.left = '7.7%'; // 원하는 위치로 조절
}

/* 장부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize2() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div2').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize2);
window.addEventListener('resize', adjustFontSize2);


/*팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치팔꿈치*/
/* 팔꿈치부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition3() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light3');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.025) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.025) + 'px';
        
        headLight.style.top = '39%'; // 원하는 위치로 조절
        headLight.style.left = '42%'; // 원하는 위치로 조절
        
    }

/* 팔꿈치부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv3() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div3');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '36.5%'; // 원하는 위치로 조절
    headLightDiv.style.left = '9.7%'; // 원하는 위치로 조절
}

/* 팔꿈치부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize3() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div3').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize3);
window.addEventListener('resize', adjustFontSize3);


/*무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎무릎*/
/* 무릎부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition4() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light4');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.025) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.025) + 'px';
        
        headLight.style.top = '70.5%'; // 원하는 위치로 조절
        headLight.style.left = '46%'; // 원하는 위치로 조절
        
    }

/* 무릎부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv4() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div4');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '51.5%'; // 원하는 위치로 조절
    headLightDiv.style.left = '11.5%'; // 원하는 위치로 조절
}

/* 무릎부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize4() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div4').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize4);
window.addEventListener('resize', adjustFontSize4);


/* 목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목목*/
/* 목부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition5() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light5');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.025) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.025) + 'px';
        
        headLight.style.top = '14.7%'; // 원하는 위치로 조절
        headLight.style.left = '48.8%'; // 원하는 위치로 조절
        
    }

/* 목부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv5() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div5');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '5%'; // 원하는 위치로 조절
    headLightDiv.style.left = '71.5%'; // 원하는 위치로 조절
}

/* 목부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize5() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div5').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize5);
window.addEventListener('resize', adjustFontSize5);


/* 위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위위*/
/* 위부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition6() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light6');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.04) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.04) + 'px';
        
        headLight.style.top = '29%'; // 원하는 위치로 조절
        headLight.style.left = '50%'; // 원하는 위치로 조절
        
    }

/* 위부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv6() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div6');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '20%'; // 원하는 위치로 조절
    headLightDiv.style.left = '67.4%'; // 원하는 위치로 조절
}

/* 위부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize6() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div6').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize6);
window.addEventListener('resize', adjustFontSize6);


/* 전립선전립선전립선전립선전립선전립선전립선전립선전립선전립선전립선전립선*/
/* 전립선부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition7() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light7');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.04) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.04) + 'px';
        
        headLight.style.top = '48%'; // 원하는 위치로 조절
        headLight.style.left = '48.3%'; // 원하는 위치로 조절
        
    }

/* 전립선부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv7() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div7');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '50%'; // 원하는 위치로 조절
    headLightDiv.style.left = '63.6%'; // 원하는 위치로 조절
}

/* 전립선부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize7() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div7').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize7);
window.addEventListener('resize', adjustFontSize7);

/* 발목발목발목발목발목발목발목발목발목발목발목발목발목*/
/* 발목부분 빨간색 원의 위치를 조정하는 함수*/
function adjustHeadLightPosition8() {
        var humanModel = document.getElementById('human_model');
        var headLight = document.getElementById('light8');
        
        headLight.style.position = 'absolute';
        humanModel.style.position = 'relative'; // human_model도 relative로 설정
        
        headLight.style.width = (humanModel.offsetWidth * 0.02) + 'px';
        headLight.style.height = (humanModel.offsetWidth * 0.02) + 'px';
        
        headLight.style.top = '84.5%'; // 원하는 위치로 조절
        headLight.style.left = '51.6%'; // 원하는 위치로 조절
        
    }

/* 발목부분 div의 위치를 조정하는 함수*/
function adjustHeadLightPositionDiv8() {
    var humanModel = document.getElementById('human_model');
    var headLightDiv = document.getElementById('light_div8');

    headLightDiv.style.position = 'absolute';
    humanModel.style.position = 'relative'; // human_model도 relative로 설정

    headLightDiv.style.top = '63%'; // 원하는 위치로 조절
    headLightDiv.style.left = '60%'; // 원하는 위치로 조절
}

/* 발목부분 container의 크기에 따라 글자 크기 조정*/
function adjustFontSize8() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var fontSize = containerWidth * 0.02; // 원하는 비율로 조절 (2%)
    document.querySelector('#light_div8').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', adjustFontSize8);
window.addEventListener('resize', adjustFontSize8);


/* f5 여러번 눌렀을때 위치 안변하도록*/
/*1*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition);
    window.addEventListener('resize', adjustHeadLightPosition);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition);  

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv);
    window.addEventListener('resize', adjustHeadLightPositionDiv);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv);  

/*2*/	
	document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition2);
    window.addEventListener('resize', adjustHeadLightPosition2);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition2); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv2);
    window.addEventListener('resize', adjustHeadLightPositionDiv2);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv2); 

/*3*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition3);
    window.addEventListener('resize', adjustHeadLightPosition3);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition3); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv3);
    window.addEventListener('resize', adjustHeadLightPositionDiv3);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv3); 

/*4*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition4);
    window.addEventListener('resize', adjustHeadLightPosition4);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition4); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv4);
    window.addEventListener('resize', adjustHeadLightPositionDiv4);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv4); 

/*5*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition5);
    window.addEventListener('resize', adjustHeadLightPosition5);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition5); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv5);
    window.addEventListener('resize', adjustHeadLightPositionDiv5);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv5); 

/*6*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition6);
    window.addEventListener('resize', adjustHeadLightPosition6);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition6); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv6);
    window.addEventListener('resize', adjustHeadLightPositionDiv6);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv6); 

/*7*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition7);
    window.addEventListener('resize', adjustHeadLightPosition7);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition7); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv7);
    window.addEventListener('resize', adjustHeadLightPositionDiv7);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv7); 

/*8*/
    document.removeEventListener('DOMContentLoaded', adjustHeadLightPosition8);
    window.addEventListener('resize', adjustHeadLightPosition8);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPosition8); 

	document.removeEventListener('DOMContentLoaded', adjustHeadLightPositionDiv8);
    window.addEventListener('resize', adjustHeadLightPositionDiv8);
    document.addEventListener('DOMContentLoaded', adjustHeadLightPositionDiv8); 



/* 이미지를 클릭했을 때 상호작용*/

/*위에서 전역변수로 안불러온거 후회하는중*/

/*이미지들 다 불러옴*/
const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');
const light4 = document.getElementById('light4');
const light5 = document.getElementById('light5');
const light6 = document.getElementById('light6');
const light7 = document.getElementById('light7');
const light8 = document.getElementById('light8');

/*간단한 정보를 제공해주는 div들 다 불러옴*/
const light_div1 = document.getElementById('light_div1');
const light_div2 = document.getElementById('light_div2');
const light_div3 = document.getElementById('light_div3');
const light_div4 = document.getElementById('light_div4');
const light_div5 = document.getElementById('light_div5');
const light_div6 = document.getElementById('light_div6');
const light_div7 = document.getElementById('light_div7');
const light_div8 = document.getElementById('light_div8');


/*각 이미지별 번호에 해당하는 div를 제외하고는 나머지는 hidden 클래스 부여*/
light1.addEventListener('click', function() {
    light_div1.classList.remove('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light2.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.remove('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light3.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.remove('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light4.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.remove('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light5.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.remove('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light6.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.remove('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.add('hidden');
});

light7.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.remove('hidden');
	light_div8.classList.add('hidden');
});

light8.addEventListener('click', function() {
    light_div1.classList.add('hidden');
	light_div2.classList.add('hidden');
	light_div3.classList.add('hidden');
	light_div4.classList.add('hidden');
	light_div5.classList.add('hidden');
	light_div6.classList.add('hidden');
	light_div7.classList.add('hidden');
	light_div8.classList.remove('hidden');
});


/* 마우스 클릭효과*/
// 클릭 이벤트 핸들러를 정의
      function clickEffect(e) {
          var d = document.createElement("div");
          d.className = "clickEffect";
          d.style.top = e.clientY + "px";
          d.style.left = e.clientX + "px";
          document.body.appendChild(d);
          d.addEventListener('animationend', function() {
              d.parentElement.removeChild(d);
          });
      }

      // 클릭 이벤트 핸들러를 문서에서 제거
      document.removeEventListener('click', clickEffect);

      // 기존 div 태그에 클릭 이펙트를 추가
      var divElements = document.querySelectorAll('div'); // 여기에서 'div'는 기존 div 태그를 선택하는 선택자
      for (var i = 0; i < divElements.length; i++) {
          divElements[i].addEventListener('click', function(e) {
              clickEffect(e);
          });
      }

      // 문서 전체에서 클릭 이벤트를 처리하지 않도록 이벤트 전파를 막기 위한 코드
      document.addEventListener('click', function(e) {
          e.stopPropagation();
      });

