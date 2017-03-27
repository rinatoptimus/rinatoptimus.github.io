ymaps.ready(init);

var myMap, myplacemark1;

function init(){

    // ЦЕНТР, Абхазия, Абхазская железная дорога, станция Гудаута
    myMap = new ymaps.Map("place", {
        center: [43.10771729911231,40.61611249999993],
        zoom: 9,
        controls: ['fullscreenControl'],
    });

    // Абхазия, Гагрский район, поселок городского типа Гячрыпш
    myplacemark1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.39241432009251,40.021383499999914]
        }});

    // Абхазия, Абхазская железная дорога, станция Цандрыпш
    myplacemark2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.3729387992313,40.093625499999895]
        }});

    // Абхазия, Гагрский район, село Багрипш
    myplacemark3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.36269558429597,40.12289699999998]
        }});

    // Абхазия, Абхазская железная дорога, станция Гагра
    myplacemark4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.26235179917832,40.28383499999999]
        }});

    // Абхазия, Гагрский район, село Алахадзы
    myplacemark5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.21991682986255,40.30296949999988]
        }});

    // Абхазия, Гагрский район, Пицунда
    myplacemark6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.158165761242785,40.33911299999999]
        }});

    // Абхазия, Гагрский район, село Лдзаа
    myplacemark7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.17930218732599,40.3770215]
        }});

    // Абхазия, Абхазская железная дорога, станция Новый Афон
    myplacemark8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.081120299133616,40.83837400000001]
        }});

    // Абхазия
    myplacemark9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [42.95961259907812,40.9805955]
        }});

    // Абхазия, Абхазская железная дорога, станция Сухум
    myplacemark10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.006825299055606,40.9959565]
        }});

    // Абхазия, поселок городского типа Агудзера
    myplacemark11 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [42.92845893272554,41.10297250000002]
        }});

    // Абхазия, Очамчыра
    myplacemark11 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [42.72630228992542,41.456648499999986]
        }});


    myMap.geoObjects.add(myplacemark1);
    myMap.geoObjects.add(myplacemark2);
    myMap.geoObjects.add(myplacemark3);
    myMap.geoObjects.add(myplacemark4);
    myMap.geoObjects.add(myplacemark5);
    myMap.geoObjects.add(myplacemark6);
    myMap.geoObjects.add(myplacemark7);
    myMap.geoObjects.add(myplacemark8);
    myMap.geoObjects.add(myplacemark9);
    myMap.geoObjects.add(myplacemark10);
    myMap.geoObjects.add(myplacemark11)

}