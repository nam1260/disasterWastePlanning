/**
 * 처리장 지역 관련정보가 담긴 object
 *
 * addrCat : 소재지
 * name : 적환장 이름
 * address : 적환장 주소
 * position: 지도상의 좌표 값
 * posType: 위치형태(지상 or 지하
 * siteArea: 부지면적
 * siteType: 부지형태
 * companyCat: 운영형태
 * ability : 수용 가능 량 (처리장에 적재 될 수 있는 총 량)
 * note: 비고(정의)
 * duration: 도착지까지의 소요시간 (분단위 입력)
 * distance : 도착지 까지의 거리 (km 단위 입력)
 * index: 재해 발생지로부터 가까운 순서 (숫자가 작을수록 거리가 가까움)
 * icon : 맵 표시아이콘
 * type : site type
 * selected : 처리장 선정 여부 flag
 * response : 경로 object 데이터
 */
var STAGING_SITE = [
    {
        addrCat: "종로구",
        name: "평창동 적환장",
        address: "서울특별시 종로구 평창동 산 6-420",
        position: {lat: 37.6126141, lng: 126.9803969},
        posType : "지상",
        siteArea: 990,
        siteType: "사유지",
        companyCat: "대행단독",
        ability: 30,
        note: "쓰레기압축장 연탄재집하장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "중구",
        name: "중구자원 재활용 처리장",
        address: "서울특별시 중구 의주로 2가 16-4",
        position: {lat: 37.5606422, lng: 126.9690479},
        posType : "지하",
        siteArea: 4189,
        siteType: "국유지",
        companyCat: "구청 직영 종합시설",
        ability: 450,
        note: "쓰레기압축장 재활용 선별압축",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "용산구",
        name: "서빙고 압축장",
        address: "서울특별시 용산구 서빙고 249-10 외6",
        position: {lat: 37.5199644, lng: 126.9909171},
        posType : "지상",
        siteArea: 2184,
        siteType: "국,시유지",
        companyCat: "구청 대행 공동운영",
        ability: 100,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "용산구",
        name: "전자상가 적환장",
        address: "서울특별시 용산구 한강로3가 40-10",
        position: {lat: 37.524876, lng: 126.9624197},
        posType : "지상",
        siteArea: 396,
        siteType: "사유지",
        companyCat: "대행단독",
        ability: 60,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "성동구",
        name: "송정동 적환장",
        address: "서울특별시 성동구 송정동 73-12",
        position: {lat: 37.5538038, lng: 127.0654471},
        posType : "지상",
        siteArea: 5574,
        siteType: "국유지",
        companyCat: "구청직영 (광진구청)",
        ability: 215,
        note: "쓰레기압축장 대형목재폐기물",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "성동구",
        name: "송정동 대행 업체 적환장",
        address: "서울특별시 종로구 송정동 73-37",
        position: {lat: 37.5509219, lng: 127.0625678},
        posType : "지상",
        siteArea: 4512,
        siteType: "국유지",
        companyCat: "대행업체 공동운영",
        ability: 240,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "동대문구",
        name: "환경 자원 센터",
        address: "서울특별시 동대문구 용두동 34-6",
        position: {lat: 37.5732019, lng: 127.038907},
        posType : "지하",
        siteArea: 9298,
        siteType: "구유지",
        companyCat: "구청,대행 공동 운영",
        ability: 270,
        note: "쓰레기압축장 대형폐기물 음식물처리시설",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "중랑구",
        name: "자원재활용 선별센터",
        address: "서울특별시 중랑구 망우동 30-5 외7",
        position: {lat: 37.6084891, lng: 127.1114501},
        posType : "지하",
        siteArea: 9084,
        siteType: "국,시,구유지",
        companyCat: "구청직영(대행 사용)",
        ability: 150,
        note: "쓰레기압축장 재활용 선별압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "성북구",
        name: "월곡적환장",
        address: "서울특별시 성북구 하월곡동 67-104 외4",
        position: {lat: 37.6027613, lng: 127.0376877},
        posType : "지상",
        siteArea: 1346,
        siteType: "국,구유지",
        companyCat: "구청 대행 공동운영",
        ability: 120,
        note: "쓰레기압축장 음식물상차장 연탄재투하장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "성북구",
        name: "장위 적환장",
        address: "서울특별시 성북구 장위동 270-1",
        position: {lat: 37.619368, lng: 127.0546044},
        posType : "지상",
        siteArea: 1700,
        siteType: "국유지",
        companyCat: "구청,대행 공동운영",
        ability: 120,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "성북구",
        name: "석관 적환장",
        address: "서울특별시 성북구 석관동 375-1",
        position: {lat: 37.6150673, lng: 127.0697928},
        posType : "지상",
        siteArea: 1547,
        siteType: "국유지",
        companyCat: "대행업체 공동운영",
        ability: 180,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강북구",
        name: "오현 적환장",
        address: "서울특별시 강북구 번2동 122 외1",
        position: {lat: 37.6378603, lng: 127.0288514},
        posType : "지상",
        siteArea: 3542,
        siteType: "사유지",
        companyCat: "구청, 대행 공동운영",
        ability: 402,
        note: "쓰레기압축장 음식물상차장 대형폐기물",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "도봉구",
        name: "생활폐기물 임시보관 적환장",
        address: "서울특별시 도봉구 도봉동 364-1 외1",
        position: {lat: 37.6786354, lng: 127.0433892},
        posType : "지상",
        siteArea: 1221,
        siteType: "구유지",
        companyCat: "대행업체 공동운영",
        ability: 200,
        note: "쓰레기압축장 연탄재투하장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "은평구",
        name: "은평구 적환장",
        address: "서울특별시 은평구 고양시 덕양구 도내동 673",
        position: {lat: 37.6139515, lng: 126.8631761},
        posType : "지상",
        siteArea: 2000,
        siteType: "사유지",
        companyCat: "구청, 대행 공동운영",
        ability: 200,
        note: "쓰레기상차장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "서대문구",
        name: "북가좌 적환장",
        address: "서울특별시 서대문구 북가좌1동 415 외2",
        position: {lat: 37.5771873, lng: 126.9026208},
        posType : "지상",
        siteArea: 1390,
        siteType: "시,사유지",
        companyCat: "구청, 대행 공동운영",
        ability: 300,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "중간집하장",
        address: "서울특별시 강서구 마곡동 66-2 외6",
        position: {lat: 37.56025, lng: 126.824664},
        posType : "지상",
        siteArea: 13342,
        siteType: "국,시,사유지",
        companyCat: "구청직영",
        ability: 220,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "경우실업",
        address: "서울특별시 강서구 마곡동 70-1",
        position: {lat: 37.5745754, lng: 126.8329332},
        posType : "지상",
        siteArea: 1820,
        siteType: "유지",
        companyCat: "대행단독",
        ability: 322,
        note: "쓰레기압축장 음식물 상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "경청환경",
        address: "서울특별시 강서구 마곡동 50-12 외3",
        position: {lat: 37.56025, lng: 126.824664},
        posType : "지상",
        siteArea: 1740,
        siteType: "국,시,사유지",
        companyCat: "대행단독",
        ability: 145,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "신원그린",
        address: "서울특별시 강서구 마곡동 70-2",
        position: {lat: 37.5741005, lng: 126.8331987},
        posType : "지상",
        siteArea: 2660,
        siteType: "국,시유지",
        companyCat: "대행단독",
        ability: 246,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "강서산업",
        address: "서울특별시 강서구 마곡동 56-4 외3",
        position: {lat: 37.570356, lng: 126.825209},
        posType : "지상",
        siteArea: 1273,
        siteType: "국,시유지",
        companyCat: "대행단독",
        ability: 230,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강서구",
        name: "청해물산 적환장",
        address: "서울특별시 강서구 방화동 41 외1",
        position: {lat: 37.584103, lng: 126.8168419},
        posType : "지상",
        siteArea: 1389,
        siteType: "국유지",
        companyCat: "대행단독",
        ability: 67,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "구로구",
        name: "원진환경 신원환경",
        address: "서울특별시 구로구 천왕동 49-7",
        position: {lat: 37.4808178, lng: 126.8452235},
        posType : "지상",
        siteArea: 1197,
        siteType: "사유지",
        companyCat: "대행업체 공동운영",
        ability: 100,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "구로구",
        name: "삼진환경",
        address: "서울특별시 구로구 천왕동 43-2",
        position: {lat: 37.4803324, lng: 126.8443219},
        posType : "지상",
        siteArea: 1361,
        siteType: "사유지",
        companyCat: "대행단독",
        ability: 70,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "구로구",
        name: "동아환경",
        address: "서울특별시 구로구 구로동 699-5",
        position: {lat: 37.4872769, lng: 126.8791357},
        posType : "지상",
        siteArea: 224,
        siteType: "유지",
        companyCat: "대행단독",
        ability: 60,
        note: "쓰레기상차장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "금천구",
        name: "금천자원 재활용처리장",
        address: "서울특별시 금천구 독산1동 700 외6",
        position: {lat: 37.4635165, lng: 126.8886805},
        posType : "지상",
        siteArea: 9120,
        siteType: "시유지",
        companyCat: "구청 대행 공동운영",
        ability: 250,
        note: "쓰레기압축장 음식물상차장 재활용선별장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "영등포구",
        name: "노들길 옆 환적장",
        address: "서울특별시 영등포구 양화동 1-8 외5",
        position: {lat: 37.5457207, lng: 126.9803969},
        posType : "지상",
        siteArea: 12960,
        siteType: "국유지지",
        companyCat: "대행업체 공동운영",
        ability: 180,
        note: "쓰레기압축장 음식물호퍼(별도)",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "동작구",
        name: "보라매 집하장",
        address: "서울특별시 동작구 신대방동 441-4 외1",
        position: {lat: 37.4903504, lng: 126.921741},
        posType : "지상",
        siteArea: 3700,
        siteType: "시유지",
        companyCat: "구청, 대행공동 운영",
        ability: 270,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "동작구",
        name: "흑석 집하장",
        address: "서울특별시 동작구 흑석동 4",
        position: {lat: 37.5084759, lng: 126.9640414},
        posType : "지상",
        siteArea: 1680,
        siteType: "시유지",
        companyCat: "대행업체 공동운영",
        ability: 180,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "관악구",
        name: "클린센터",
        address: "서울특별시 관악구 신림동 808-152 외7",
        position: {lat: 37.4903504, lng: 126.921741},
        posType : "지상",
        siteArea: 990,
        siteType: "국, 시유지",
        companyCat: "구청대행 공동운영",
        ability: 572,
        note: "쓰레기압축장 음식물상차장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "서초구",
        name: "청소종합시설",
        address: "서울특별시 서초구 원지동 23 외17",
        position: {lat: 37.4590038, lng: 127.0405502},
        posType : "지상",
        siteArea: 15337,
        siteType: "구유지",
        companyCat: "구청 대행 공동운영",
        ability: 420,
        note: "쓰레기압축장 음식물상차장 대형폐기물",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "송파구",
        name: "자연순환공원",
        address: "서울특별시 송파구 장지동 692-2",
        position: {lat: 37.4719245, lng: 127.1241383},
        posType : "지상",
        siteArea: 35700,
        siteType: "시,구유지",
        companyCat: "구청, 대행 공동운영",
        ability: 300,
        note: "쓰레기압축장",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },
    {
        addrCat: "강동구",
        name: "강동구 폐기물적환장",
        address: "서울특별시 강동구 고덕동 55-5 외16",
        position: {lat: 37.5710216, lng: 127.1621667},
        posType : "지상",
        siteArea: 16650,
        siteType: "시,구,사유지",
        companyCat: "구청 대행 공동운영",
        ability: 160,
        note: "쓰레기압축장 대형목재폐기물",
        duration: 999,
        distance: 0,
        index: 999,
        icon: MARKER_INFO.STAGING_SITE.icon,
        type: MARKER_INFO.STAGING_SITE.type,
        selected: false,
        response: ""
    },

];