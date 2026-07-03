/* =====================================
   Truth & Praise Church
   app.js
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------
       모바일 메뉴
    ----------------------------- */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if(menuBtn && navMenu){

        menuBtn.addEventListener("click", function(){

            navMenu.classList.toggle("active");

        });

    }

    /* -----------------------------
       다크모드
    ----------------------------- */

    const darkBtn = document.getElementById("darkMode");

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark");

    }

    if(darkBtn){

        darkBtn.addEventListener("click", function(){

            document.body.classList.toggle("dark");

            if(document.body.classList.contains("dark")){

                localStorage.setItem("theme","dark");

            }else{

                localStorage.setItem("theme","light");

            }

        });

    }

    /* -----------------------------
       오늘 날짜
    ----------------------------- */

    const todayBox=document.getElementById("today");

    if(todayBox){

        const d=new Date();

        todayBox.innerHTML=
        d.getFullYear()+"년 "
        +(d.getMonth()+1)+"월 "
        +d.getDate()+"일";

    }

    /* -----------------------------
       배너 슬라이드
    ----------------------------- */

    const slides=document.querySelectorAll(".slide");

    let index=0;

    if(slides.length>0){

        slides[index].classList.add("active");

        setInterval(function(){

            slides[index].classList.remove("active");

            index++;

            if(index>=slides.length){

                index=0;

            }

            slides[index].classList.add("active");

        },5000);

    }

    /* -----------------------------
       공지 검색
    ----------------------------- */

    const search=document.getElementById("noticeSearch");

    if(search){

        search.addEventListener("keyup",function(){

            const keyword=this.value.toLowerCase();

            document.querySelectorAll(".notice-item").forEach(function(item){

                if(item.innerText.toLowerCase().indexOf(keyword)>-1){

                    item.style.display="block";

                }else{

                    item.style.display="none";

                }

            });

        });

    }

    /* -----------------------------
       예배 카운트다운
    ----------------------------- */

    const worship=document.getElementById("countdown");

    if(worship){

        function timer(){

            const now=new Date();

            let target=new Date();

            target.setHours(11);

            target.setMinutes(0);

            target.setSeconds(0);

            if(now>target){

                target.setDate(target.getDate()+7);

            }

            const diff=target-now;

            const day=Math.floor(diff/(1000*60*60*24));

            const hour=Math.floor(diff/(1000*60*60)%24);

            const min=Math.floor(diff/(1000*60)%60);

            const sec=Math.floor(diff/1000%60);

            worship.innerHTML=

            day+"일 "
            +hour+"시간 "
            +min+"분 "
            +sec+"초";

        }

        timer();

        setInterval(timer,1000);

    }

    /* -----------------------------
       맨 위 버튼
    ----------------------------- */

    const topBtn=document.getElementById("topBtn");

    if(topBtn){

        window.addEventListener("scroll",function(){

            if(window.scrollY>300){

                topBtn.style.display="block";

            }else{

                topBtn.style.display="none";

            }

        });

        topBtn.addEventListener("click",function(){

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* -----------------------------
       카드헌금(예제)
    ----------------------------- */

    const donate=document.getElementById("donateBtn");

    if(donate){

        donate.addEventListener("click",function(){

            const name=document.getElementById("name").value;

            const amount=document.getElementById("amount").value;

            if(name===""){

                alert("성명을 입력하세요.");

                return;

            }

            if(amount===""){

                alert("헌금금액을 입력하세요.");

                return;

            }

            alert(
                "프론트엔드 예제입니다.\n\n"
                +"실제 운영 시 나이스페이먼츠 결제 API를 호출합니다."
            );

        });

    }

    /* -----------------------------
       갤러리
    ----------------------------- */

    document.querySelectorAll(".gallery img").forEach(function(img){

        img.addEventListener("click",function(){

            window.open(this.src);

        });

    });

    /* -----------------------------
       스크롤 애니메이션
    ----------------------------- */

    const cards=document.querySelectorAll(".card");

    function animation(){

        cards.forEach(function(card){

            const top=card.getBoundingClientRect().top;

            if(top<window.innerHeight-100){

                card.classList.add("show");

            }

        });

    }

    animation();

    window.addEventListener("scroll",animation);

});