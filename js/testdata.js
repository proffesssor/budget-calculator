var generateTestData = (function(){

    var ExampleItem = function(type, desc, sum){
        this.type = type;
        this.desc = desc;
        this.sum = sum;
    } 

    var testData = [
        new ExampleItem("inc", "Зарплата", 1250),
        new ExampleItem("inc", "Фриланс", 850),
        new ExampleItem("inc", "ПП", 110),
        new ExampleItem("inc", "Продажи", 50),
        new ExampleItem("exp", "Рента", 450),
        new ExampleItem("exp", "Бензин", 50),
        new ExampleItem("exp", "Продукты", 250),
        new ExampleItem("exp", "Развлечения", 100),
    ];

    function getRandomInt(max){
    return Math.floor(Math.random() * max);
    }


    function insertInUI(){
        var random = getRandomInt(testData.length);
        var randomItem = testData[random];
        
        document.querySelector("#input__type").value = randomItem.type;
        document.querySelector("#input__description").value = randomItem.desc;
        document.querySelector("#input__value").value = randomItem.sum;
    }

    return {
        init: insertInUI,
    }

})();


generateTestData.init();