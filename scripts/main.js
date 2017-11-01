/**
 * <code>main</code>
 *
 * @author sw.nam
 * @since 2017-09-19
 */


/* 지도 데이터 마커 정보 */
var MARKER_INFO = {
    DISASTER_SITE : {icon: "http://labs.google.com/ridefinder/images/mm_20_purple.png", type: 0},
    COLLECTION_COMPANY : {icon: "http://labs.google.com/ridefinder/images/mm_20_green.png", type: 1},
    STAGING_SITE : {icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png", type: 2}
};


/*재해 발생지역 관련 정보가 담긴 object
* name : 발생지역 이름
* address: 발생지역 주소
* position: 좌표 값 (lat: 위도, lng: 경도)
* icon : 맵에 표시되는 아이콘 (보라색 화살표)
* type : site type
* index : 발생 폐기물 총량 , UI 에서 값을 입력
**/
var DISASTER_SITE = [
    {
        name: "발생지역",
        //address: "서울시 관악구 봉천로 411",
        position: {lat: 37.483109, lng: 126.945601},
        icon: MARKER_INFO.DISASTER_SITE.icon,
        type: MARKER_INFO.DISASTER_SITE.type,
        index: 0 // 발생 폐기물 총량
    }
];


var mainDiv;

// variables
var map;
var txt;
var repeatTimer;

var time;

var totalWorkingTime;
var totalDistance;
var selectedStagingSite;
var selectedCollectionCompany ;




/**
 * 브라우저 구성에 필요한 엘레먼트 생성
 */
function createComponent() {
    console.log("createComponent()");
    mainDiv = $(".main").append(
        "<div class='inputArea' style='position: absolute; left: 50px; top: 0px; width: 500px; height: 250px; background-color: rgba(0,0,0,0.1); border: solid 3px black;'>" +

         "<span style = 'position: absolute; left: 20px; top: 50px;'> 폐기물 발생지역 입력 </span>" +
         "<span style = 'position: absolute; left: 20px; top: 100px;'>위도(lat): </span>" +
         "<input type='text' id='startLat' style='position: absolute; left: 80px; top: 99px; width: 150px;'value='37.483109'>" +
         "<span style = 'position: absolute; left: 250px; top: 100px;'>경도(lng): </span>" +
         "<input type='text' id='startLng' style='position: absolute; left: 315px; top:99px; width: 150px;'value='126.945601'>" +
         "<span style = 'position: absolute; left: 20px; top: 150px;'>폐기물 발생량 :</span>" +
         "<input type='text' id='totalAmount' style='position: absolute; left: 140px; top: 149px; width: 150px;'value='400'>" +
         "<input type='button' id='searching' style='position: absolute; left:20px; top: 200px; ' onclick= 'cbCalculateButton()' value ='Calulate' >" +
         "<div class= 'currentTime' style='position:absolute; left: 100px; top: 200px; width: 300px; '>년/월/일/시/분" +
            "<input type='text' id='year' style='position: absolute; left: 100px; width: 50px;' value='2017'>" +
            "<input type='text' id='month' style='position: absolute; left: 160px; width: 50px;'>" +
            "<input type='text' id='day' style='position: absolute; left: 220px;width: 50px;'>" +
            "<input type='text' id='hour' style='position: absolute; left: 280px; width: 50px;'>" +
            "<input type='text' id='minutes' style='position: absolute; left: 340px; width: 50px;'>" +
        "</div>"+
         "<input type='button' id='searching' style='position: absolute; left:20px; top: 200px; ' onclick= 'cbCalculateButton()' value ='Calulate' >" +
         "</div>"+
         "<div id='map' style='position: absolute; left: 50px; top: 400px; width: 900px; height: 500px;'></div>"+
         "<div class='loadingArea' style='position: absolute; left: 50px; top: 400px; width: 900px; height: 500px; background-color: rgba(255,255,255,0.7); visibility: hidden;'>" +
               "<span id='title' style = 'position: absolute; top: 200px; width: 900px; text-align: center; font-size: 25px;'>잠시만 기다려주세요..</span>" +
               "<span id='processing' style = 'position: absolute; top: 250px; width: 900px; text-align: center; font-size: 25px;'>0/0</span>" +
        "</div>"+
         "<div id='scanImgArea' style='position: absolute; left: 50px; top: 1000px; width: 900px; height: 540px; background-color: rgb(222,222,239);visibility: hidden;'>" +
         "<span id=scanText style='position:absolute; top: 10px;'>Pointer cloud of disaster site</span>" +
         "<img id=scanImg style='position:absolute; top: 50px; width: 900px; height: 490px;' src='images/disasterSite.png'>" +
         "</div>"+
         "<div class= 'infoArea' style = 'position: absolute; left: 50px; top: 1600px; width: 900px; height: 500px; visibility: hidden;'>" +
         "<span id='disasterSiteName' style='position: absolute; top:10px; font-size: 25px; color: purple'>Waste information</span>"+
         "<div id='disasterInfo' style= 'margin-top:50px; margin-left: 1px; width: 898px; height: 70px; border: solid 2px black; background-color: white;'></div>"+
         "</div>"+
        "</div>"
    );
};

/**
 * 지도를 생성하고 정보를 지도 위에 매핑한다..
 */
function setResultOnMap() {
    console.log("setResultOnMap()");

    //폐기물 발생지 마커 표시
    addMarkersOnMap(DISASTER_SITE[0]);
    //수거 업체 마커 표시
    var i;
    for(i =0; i< COLLECTION_COMPANY.length; i++) {

        if(COLLECTION_COMPANY[i].selected == true) {
            addMarkersOnMap(COLLECTION_COMPANY[i]);
           // drawRouteOnMap(COLLECTION_COMPANY[i].response);
        }
    }
    //처리장 마커 표시
    for(i =0; i< STAGING_SITE.length; i++) {
        if(STAGING_SITE[i].selected == true){
            addMarkersOnMap(STAGING_SITE[i]);
           // drawRouteOnMap(STAGING_SITE[i].response);
        }
    }
};

/**
 * 매핑된 정보를 기반으로 list를 생성한다.
 */
function setInfo() {
    console.log("setInfo()");

    setDisasterInfo();
    addCollectionCompanyInfo();
    addStagingSiteInfo();
    addWorkingTimeInfo();

}

function setDisasterInfo() {
    mainDiv.find(".infoArea #disasterInfo").html
    (
        "<"+DISASTER_SITE[0].name +"> <br>"+
        "폐기물 발생 량(톤) :   "+DISASTER_SITE[0].index+"<br> "+
        "위치정보           :   "+DISASTER_SITE[0].position.lat+",  "+DISASTER_SITE[0].position.lng

    );
}
/**
 * 수거업체 정보를 리스트 영역에 추가
 */
function addCollectionCompanyInfo() {
    console.log("addCollectionCompanyInfo()");
    var infoArea = mainDiv.find(".infoArea");
    infoArea.find(".collectionCompanyInfoTitle").remove();
    infoArea.find(".collectionCompanyInfoContent").remove();
    var titleArea = makeElement({
        tag: "<span />",
        attrs: {
            class: "collectionCompanyInfoTitle",
            css: {
                position: "absolute" ,top: 140, "font-size": 25, color : "green"
            }
        },
        text: "Waste Collection Company",
        parent:infoArea
    });

    for(var i =0; i < COLLECTION_COMPANY.length; i ++) {
        if(!COLLECTION_COMPANY[i].selected) {
            continue;
        }
        var listArea = makeElement({
            tag: "<div />",
            attrs: {
                class: "collectionCompanyInfoContent",
                css: {
                    "margin-top": 50, left: 1, width: 898, height: 310, "border-style" : "solid","border-width": 2, "background-color" : "white"
                }
            },
            parent: infoArea
        });
        listArea.html(
            "<"+COLLECTION_COMPANY[i].name +"> <br><br>"+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "구분               :   "+COLLECTION_COMPANY[i].companyCat+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "주소               :   "+COLLECTION_COMPANY[i].address+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "전화 번호          :   "+COLLECTION_COMPANY[i].phone+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "위치정보           :   "+COLLECTION_COMPANY[i].position.lat+",  "+COLLECTION_COMPANY[i].position.lng+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "재해 현장 도달 시간 (분) : " +COLLECTION_COMPANY[i].duration+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "재해 현장과의 거리(km) : " +COLLECTION_COMPANY[i].distance+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "처리 능력(톤/회)       : " +COLLECTION_COMPANY[i].ability
        );
    }

}

/**
 * 처리장 정보를 리스트 영역에 추가
 */
function addStagingSiteInfo() {
    console.log("addStagingSiteInfo()");

    var infoArea = mainDiv.find(".infoArea");
    infoArea.find(".stagingSiteInfoTitle").remove();
    infoArea.find(".stagingSiteInfoContent").remove();
    var titleArea = makeElement({
        tag: "<span />",
        attrs: {
            class: "stagingSiteInfoTitle",
            css: {
                position: "absolute" ,"margin-top": 25, "font-size": 25, color: "navy"
            }
        },
        text: "Waste Staging Site",
        parent:infoArea
    });

    for(var i =0; i < STAGING_SITE.length; i ++) {
        if(!STAGING_SITE[i].selected) {
            continue;
        }
        var listArea = makeElement({
            tag: "<div />",
            attrs: {
                class: "stagingSiteInfoContent",
                css: {
                    "margin-top": 50, left: 1, width: 898, height: 390, "border-style" : "solid","border-width": 2, "background-color" : "white"
                }
            },
            parent: infoArea
        });
        listArea.html(
            "<"+STAGING_SITE[i].name +"> <br><br>"+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "주소               :   "+STAGING_SITE[i].address+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "면적               :   "+STAGING_SITE[i].siteArea+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "위치정보           :   "+STAGING_SITE[i].position.lat+",  "+STAGING_SITE[i].position.lng+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "위치 형태           :   "+STAGING_SITE[i].siteType+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "현장 간 왕복 소요시간 (분) : " + 2*STAGING_SITE[i].duration+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "재해 현장과의 거리(km) : " +STAGING_SITE[i].distance+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "처리 능력(톤/일)    : " +STAGING_SITE[i].ability+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "운영 형태          : " +STAGING_SITE[i].companyCat+"<br> "+
            "------------------------------------------------------------------------------------------------------------------------<br>"+
            "비고              : " +STAGING_SITE[i].note+"<br> "
        );
    }

}

/**
 *  계산 결과를 리스트 영역에 표시
 */
function addWorkingTimeInfo() {
    console.log("workingTimeInfo");

    var infoArea = mainDiv.find(".infoArea");
    infoArea.find(".workingTimeInfoTitle").remove();
    infoArea.find(".workingTimeInfoContent").remove();

    var titleArea = makeElement({
        tag: "<span />",
        attrs: {
            class: "workingTimeInfoTitle",
            css: {
                position: "absolute" ,"margin-top": 25, "font-size": 25, color: "red"
            }
        },
        text: "Conclusion - Require time for waste clearance",
        parent: infoArea
    });

    var listArea = makeElement({
        tag: "<div />",
        attrs: {
            class: "workingTimeInfoContent",
            css: {
                "margin-top": 50, left: 1, width: 898, height: 280, "border-style" : "solid","border-width": 2, "background-color" : "white"
            }
        },
        parent: infoArea
    });

    // 화면에 표시할 값 세팅

    if(!time) {
        time = new Date();
    }
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    var hour = time.getHours();
    var minutes = time.getMinutes();

    var txt1 = "";
    var txt2 = "";
    for(var i =0; i < selectedCollectionCompany.length; i++) {
        txt1 += selectedCollectionCompany[i].name+", ";
        if(i % 5 == 0) {
            txt1 += "\n"+"          ";
        }
    }
    for(i =0; i < selectedStagingSite.length; i++) {
        txt2 += selectedStagingSite[i].name+", ";
        if(i % 5 == 0) {
            txt2 += "\n"+"          ";
        }
    }
    //totalWorkingTime;

    var tmpTime = time.getTime() + totalWorkingTime*60*1000;
    var timeAfterWorking = new Date(tmpTime);
    var afterYear = timeAfterWorking.getFullYear();
    var afterMonth = timeAfterWorking.getMonth()+1;
    var afterDay = timeAfterWorking.getDate();
    var afterHour = timeAfterWorking.getHours();
    var afterMinutes = timeAfterWorking.getMinutes();

    listArea.html(

        "<br> 작업 시작 시간 : "+year+"년 "+month+"월 "+day+"일 "+hour+"시 "+minutes+"분 <br>"+
        "------------------------------------------------------------------------------------------------------------------------<br>"+
        "작업 완료 시간 : "+afterYear+"년 "+afterMonth+"월 "+afterDay+"일 "+afterHour+"시 "+afterMinutes+"분 <br>"+
        "------------------------------------------------------------------------------------------------------------------------<br>"+
        "작업 소요 시간 : 약 "+Math.ceil(totalWorkingTime/60)+"시간 ("+totalWorkingTime+"분)<br>"+
        "------------------------------------------------------------------------------------------------------------------------<br>"+
        "선정 수집 업체 : "+txt1+"<br>"+
        "------------------------------------------------------------------------------------------------------------------------<br>"+
        "선정 처리장 : "+txt2+"<br>"+
        "------------------------------------------------------------------------------------------------------------------------<br>"

    );

}
/**
 * 폐기물 발생 지역, 처리업체, 처리장을 지도에 표시한다
 * @param options
 */
function addMarkersOnMap(options) {
    console.log("addMarkersOnMap "+options);
    var marker;

    marker = new google.maps.Marker({
        position: options.position,
        title: options.name,
        icon : {
            url : options.icon,
            size: new google.maps.Size(50, 50)
        }
    });
    marker.setMap(map);

    var contentString;

    if(options.type == MARKER_INFO.DISASTER_SITE.type) {
        contentString =
            options.name+
            '<br>'+
            "========================================="+
            '<br>'+
            "위치     : "+options.position.lat+","+options.position.lng+
            '<br>'+
            "폐기물 양(톤) : "+options.index;
    }else if(options.type === MARKER_INFO.STAGING_SITE.type){
        contentString =
            options.name+
            '<br>'+
            "========================================="+
            '<br>'+
            "주소     : "+options.address+
            '<br>'+
            "면적(m3) : "+options.siteArea+
            '<br>'+
            "처리 능력(톤/일)    : "+options.ability+
            '<br>'+
            "현장 - 처리장 간 이동 소요 시간(분) : " +options.duration+
            '<br>'+
            "재해 현장과의 거리(km)     : "+options.distance;

    }else if(options.type === MARKER_INFO.COLLECTION_COMPANY.type){
        contentString =
            options.name+
            '<br>'+
            "========================================="+
            '<br>'+
            "구분     : "+options.companyCat+
            '<br>'+
            "주소     : "+options.address+
            '<br>'+
            "전화 번호 : "+options.phone+
            '<br>'+
            "처리 능력(톤/회)    : "+options.ability+
            '<br>'+
            "재해 현장 도달 시간(분) : " +options.duration+
            '<br>'+
            "재해 현장과의 거리(km)     : "+options.distance;
    }
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    return marker;
};

/**
 * 지도에 표시된 마커들의 중앙 좌표를 구한다.
 * @param positons
 */
function getCenterPoint(positions) {
    console.log("getCenterPoint() " + JSON.stringify(positions));

    var centerPoint;
    var averageLat =0;
    var averageLng =0;


    for(var i =0; i < positions.length; i++) {
        averageLat += positions[i].position.lat;
        averageLng += positions[i].position.lng;
    };

    averageLat = averageLat / positions.length;
    averageLng = averageLng / positions.length;

    centerPoint = {lat: averageLat, lng: averageLng};
    console.log("centerPoint = " +JSON.stringify(centerPoint));
    return centerPoint;
}

/**
 * 입력된 좌표의 경로를 찾아 그려준다
 */
function calculateRoute(options) {
    console.log("calculateRoute() origin:" +JSON.stringify(options.origin)+" destination: "+JSON.stringify(options.destination));

    // directiosSearvice 객체 생성(길찾기 용)
    var directionsService = new google.maps.DirectionsService();

    var request = {
        destination: options.destination,
        origin: options.origin,
        travelMode: 'TRANSIT',
        transitOptions: {
            arrivalTime: new Date(2017,9,4,10,00,00),
            modes: ['BUS']
        },
    };

    // Pass the directions request to the directions service.
    directionsService.route(request, function(response, status) {
        console.log("onCalculateRoute");
        console.log("status : "+status);
        var result;
        console.log("탐색업체이름 : "+options.name);
        if (status == 'OK' ) {
            //COLLECTION_COMPANY[options.index].response = response;
           // tmpVar = response;
            result = { distance : response.routes[0].legs[0].distance.text, duration: response.routes[0].legs[0].duration.value};
            console.log("총 거리 = "+result.distance);
            console.log("총 시간 = "+result.duration);

            //type, index 로 판단하여 property 추가
            if(options.type == MARKER_INFO.COLLECTION_COMPANY.type) {
                COLLECTION_COMPANY[options.index].distance = result.distance;
                COLLECTION_COMPANY[options.index].duration = Math.floor(result.duration/60);
                COLLECTION_COMPANY[options.index].response = response;
            }else {
                STAGING_SITE[options.index].distance = result.distance;
                STAGING_SITE[options.index].duration = Math.floor(result.duration/60);
                STAGING_SITE[options.index].response = response;
            }

        }else if(status == "ZERO_RESULTS") {
         //   alert("검색 결과가 없습니다.");
            txt = "";
            return ;
        }
    });
}


/**
 * 각 위치간 거리를 계산한다.
 */

function drawRouteOnMap(response) {
    console.log("drawRouteOnMap()");

    var directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true
    });
    if(response) {
        directionsRenderer.setDirections(response);
    }

}

/**
 * calculate 버튼 callback
 */
function cbCalculateButton() {
    console.log("cbCalculateButton()");

    var startLat = (document.getElementById("startLat").value)*1;
    var startLng = (document.getElementById("startLng").value)*1;
    var totalAmount = (document.getElementById("totalAmount").value)*1;


    if(!startLat || !startLng || !totalAmount ||
        !isNumber(startLat) || !isNumber(startLng) || !isNumber(totalAmount)) {
        alert("입력 정보가 올바르지 않습니다.");
        return ;
    }

    //작업 시작 시간 설정, 없으면 현재 시간 기준으로 처리
    var tmpYear, tmpMonth, tmpDay, tmpHour, tmpMinutes = undefined;

    tmpYear = (document.getElementById("year").value)*1;
    tmpMonth = (document.getElementById("month").value)*1;
    tmpDay = (document.getElementById("day").value)*1;
    tmpHour = (document.getElementById("hour").value)*1;
    tmpMinutes = (document.getElementById("minutes").value)*1;

    if(!tmpYear || !tmpMonth || !tmpDay || tmpHour === undefined || tmpMinutes === undefined) {
        console.log("현재 시간으로 설정합니다");
        time = new Date();
    }else {
        console.log("입력한 시간으로 설정합니다.");
        time = new Date(tmpYear,tmpMonth-1,tmpDay,tmpHour,tmpMinutes,00);
    }
    console.log(" time : "+time);


    var disasterSite = {lat: startLat, lng: startLng};

    //0. flag 초기화
    for(var i =0; i < STAGING_SITE.length; i++) {
        STAGING_SITE[i].selected = false;
    }
    for(var i =0; i < COLLECTION_COMPANY.length; i++) {
        COLLECTION_COMPANY[i].selected = false;
      //  COLLECTION_COMPANY[i].ability = getAbility(COLLECTION_COMPANY[i].equip);
    }

    //1. 발생지역 업데이트
    DISASTER_SITE[0].index = totalAmount;
    DISASTER_SITE[0].position = disasterSite;

    map = new google.maps.Map(document.getElementById('map'), {
        center: DISASTER_SITE[0].position,
        zoom: 14
    });

    mainDiv.find(".infoArea").css({visibility: "hidden"});
    mainDiv.find("#scanImgArea").css({visibility: "hidden"});
    mainDiv.find(".loadingArea").css({visibility:"inherit"});
    mainDiv.find(".loadingArea #title").text("잠시 기다려주세요..");
    mainDiv.find(".loadingArea #processing").text("데이터 로드중입니다...");

    //2. 경로 체크
    // 각 운송업체, 처리장 별 폐기물 발생 지점으로부터 의 경로 drawing
    var idx = 0;
    repeatTimer = setInterval(function() {
        console.log("collection company looping");
        calculateRoute({
            origin: COLLECTION_COMPANY[idx].position,
            destination: DISASTER_SITE[0].position,
            type: MARKER_INFO.COLLECTION_COMPANY.type,
            index : idx,
            name : COLLECTION_COMPANY[idx].name
        });
        mainDiv.find(".loadingArea #title").text("수집업체 경로 탐색중입니다..");
        mainDiv.find(".loadingArea #processing").text(idx+" / "+COLLECTION_COMPANY.length);
        idx++;
        if(idx > COLLECTION_COMPANY.length-1) {
            console.log("clearTimer");
            clearInterval(repeatTimer);
            repeatTimer = null;
            idx = 0;
            repeatTimer = setInterval(function() {
                console.log("staging site looping");
                calculateRoute({
                    origin: STAGING_SITE[idx].position,
                    destination: DISASTER_SITE[0].position,
                    type: MARKER_INFO.STAGING_SITE.type,
                    index : idx,
                    name : STAGING_SITE[idx].name
                });
                mainDiv.find(".loadingArea #title").text("처리장 경로 탐색중입니다..");
                mainDiv.find(".loadingArea #processing").text(idx+" / "+STAGING_SITE.length);
                idx++;
                if(idx > STAGING_SITE.length -1) {
                    console.log("clearTimer");
                    clearInterval(repeatTimer);
                    repeatTimer = null;

                    //3. 각 처리장 수거업체를 가까운 순서로 리스팅
                    //3-1. sorting
                    COLLECTION_COMPANY.sort(function(a, b) {
                        return a.duration - b.duration;
                    });
                    STAGING_SITE.sort(function(a, b) {
                        return a.duration - b.duration;
                    });
                    //3-2. 순서대로 index 입력
                    for(var i = 0; i < COLLECTION_COMPANY.length; i++) {
                        COLLECTION_COMPANY[i].index = i+1;
                    }
                    for(var i = 0; i < STAGING_SITE.length; i++) {
                        STAGING_SITE[i].index = i+1;
                    }

                    //4. 총 소요시간 계산
                    var result = calculateWorkingTime();
                    //5. 탐색 결과 지도에 표시(성공한 경우만 표시한다)
                    if(result) {
                        setResultOnMap();
                        setInfo();
                        mainDiv.find(".infoArea").css({visibility: "inherit"});
                        mainDiv.find("#scanImgArea").css({visibility: "inherit"});
                    }
                    mainDiv.find(".loadingArea").css({visibility:"hidden"});
                }
            },1000);
        }
    },1000);
}

/**
 * html element 를 생성한다
 * @param options 엘레먼트 테그 속성
 * @returns {*|jQuery|HTMLElement}
 */
function makeElement(options) {
    var element = $(options.tag, options.attrs);

    if (options.text !== undefined && options.text !== null) {
        element.html(options.text);
    }

    if (options.parent !== undefined && options.parent !== null) {
        options.parent.append(element);
    }
    return element;
}

/**
 * 숫자인지 문자인지 판단한다.
 * @param s
 * @returns {boolean}
 */
function isNumber(s) {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
}

function calculateWorkingTime() {
    console.log("calculateWorkingTime() ");

/*
    시나리오

    폐기물 발생 -> 업체선택 -> 처리장 선택 -> 처리  -> 72시간이 넘니? 그럼 업체 추가 -> 반복

    0. 폐기물 발생량 및 위치 파악(이건 input 으로 받음)

    1. 처리장 선택
    폐기물 발생량 < 선택된 처리장들의 수용량 합 (가까운 순서로 처리장 선택

    2. 폐기물 수거 업체 1개 추가 (현장과 가장 가까운 거리 기준)

    3. 폐기물 운반 소요시간 계산
    - 업체-발생지역 간 소요시간(처음 출발 할. 때) + 처음 작업 소요시간(적재+ 처리장까지 이동)+ ((왕복이동시간+작업소요시간))* 반복횟수
    - 반복횟수 = ((총 발생량 - 1회 가능 처리량) / 1회 가능 처리량) +1(나머지가 0이 아닌경우)

    4. 총 운반 소요시간 > 72시간 인 경우 업체 선택 시나리오부터 다시 시작한다.

    ** 업체가 여러대인 경우 소요시간 계산 방법
    (각 업체-발생지역 간 소요시간) +  (처음작업소요시간의) + ( (왕복이동시간 + 작업소요시간)) * 반복횟수
    반복 횟수 = (총 발생량 - 참여한 업체의 1회 가능 처리량의 합 / 참여한 업체의 1회 가능 처리량들의 합 ) +1(나머지가 0이 아닌 경우)

*/

    //변수 초기화
    selectedStagingSite = [];
    selectedCollectionCompany = [];

    //var siteIndex = 0;

    var totalDisterAmount = DISASTER_SITE[0].index;
    var remainingSiteAbility =0;
    var repeatTime;

    var result; // 처리 결과 반환(성공여부)

    //1. 처리장 선택 (이미 가장 가까운 순서대로 소팅 되어있는 상태이므로, 처리능력의 합으로 판단한다.

    var sumOfAbility =0;
    var loopResult = false;
    for(var i=0; i < STAGING_SITE.length; i++) {
        STAGING_SITE[i].selected = true;
        selectedStagingSite.push(STAGING_SITE[i]);
        sumOfAbility += STAGING_SITE[i].ability;
        if(sumOfAbility >= DISASTER_SITE[0].index) {
            console.log("sumOfAbility = "+sumOfAbility+", i = "+i);
            loopResult = true;
            break;
        }
    }
    if(!loopResult) {
        alert(" 모든 처리장을 사용해도 발생한 폐기물을 수거할 수 없습니다.");
        return ;
    }
    //console.log("selectedStagingSite = "+JSON.stringify(selectedStagingSite));

    var companyIndex = 1;
    var siteIndex = 0;
    while(companyIndex > 0 ) {
    console.log("companyIndex = "+companyIndex);
        if(COLLECTION_COMPANY.length < companyIndex) {
            alert("72시간 내 처리가 불가능합니다");
            result = false;
            break;

        }
            totalWorkingTime =0;
            var abilityForEach =0;
            var arrivingTime =0; // 처음 현장까지 도착하는 데 소요되는 시간

            //2. 폐기물 수거 업체 선정 (가장 가까운 순서로 선정)
            for(var i = 0; i < COLLECTION_COMPANY.length; i++) {
                if(COLLECTION_COMPANY[i].index === companyIndex) {
                    console.log("Collection company is detected "+COLLECTION_COMPANY[i].name);
                    COLLECTION_COMPANY[i].selected = true;
                    selectedCollectionCompany.push(COLLECTION_COMPANY[i]);
                }
            }

            // 선정된 처리업체의 1회 처리량의 합을 구함
            for(var i = 0; i < selectedCollectionCompany.length; i++) {
                //1회 처리량 합을 넣어줌
                abilityForEach += selectedCollectionCompany[i].ability;
                //1회 이동 시간을 넣어줌
                arrivingTime += selectedCollectionCompany[i].duration;
            }
            // 반복해야 하는 횟수
            // 반복 횟수 = (총 발생량 - 참여한 업체의 1회 가능 처리량의 합 / 참여한 업체의 1회 가능 처리량들의 합 ) +1(나머지가 0이 아닌 경우)
            repeatTime = (totalDisterAmount - abilityForEach) / abilityForEach;
            if((totalDisterAmount - abilityForEach) % abilityForEach > 0) {
                repeatTime++;
            }
            repeatTime = Math.floor(repeatTime);
            console.log("repeatTime : "+repeatTime);

            // 총 소요시간 계산
            //   (각 업체-발생지역 간 소요시간) +  ( 처음작업소요시간 ) + ( (왕복이동시간 + 작업소요시간) ) * 반복횟수

            // 현재 선택된 업체의 수거능력 계산
            remainingSiteAbility = selectedStagingSite[siteIndex].ability;
            totalWorkingTime = arrivingTime + selectedStagingSite[siteIndex].duration;
            for(var i =0; i < repeatTime; i++) {

                console.log("abilityForEach " +abilityForEach);
                console.log("selectedStagingSite" + selectedStagingSite[siteIndex].name);
                totalWorkingTime +=  2*(selectedStagingSite[siteIndex].duration);

                remainingSiteAbility -= abilityForEach;
                // 현재 남아있는 처리장의 잔여 공간이 없는 경우 다음 처리장으로 이동시킨다.
                console.log("remainingSiteAbility "+remainingSiteAbility);
                if(remainingSiteAbility <= 0) {
                    siteIndex++;
                    console.log("siteIndex = "+siteIndex);
                    console.log("selectedStagingSiteLength = "+selectedStagingSite.length);
                    totalWorkingTime += selectedStagingSite[siteIndex].duration;
                    remainingSiteAbility = selectedStagingSite[siteIndex].ability;
                }
            }
            console.log("totalWorkingTime = "+totalWorkingTime);

            if(Math.ceil(totalWorkingTime / 60) < 72) {
                console.log("abilityForEach " +abilityForEach);
                console.log("arrivingTime "+arrivingTime);
                console.log("repeaTime = "+repeatTime);
                console.log("totalWorkingTime(분) : "+totalWorkingTime);
                console.log("총 소요시간 : "+totalWorkingTime+"\n");
                result = true;
                break;
            }else {
                companyIndex++;
                console.log("72시간 초과");
                siteIndex =0;
            }
    }
    return result;
}

function getAbility(equip) {
    console.log("getAbility()" +JSON.stringify(equip));

    var ability = {a:0,b:0,c:0};

    ability.a = equip.dump;
    ability.b = equip.ben;
    //ability.c = equip.truck;

    return ability.a * 10 ; // 합산 값 수식 입력
}

//브라우저 실행시 처음 실행되는 함수
var init = function () {
    console.log("init()");
    createComponent();

};
$(document).ready(function(){
    init();
});


