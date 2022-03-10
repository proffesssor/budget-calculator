var controller = (function(budgetCtrl, uiCtrl){


    var setupEventListener = function(){
        var DOM = uiCtrl.getDOMstrings();
        document.querySelector("#budget-form").addEventListener('submit', ctrlAddItem);
        document.querySelector(DOM.budgetTable).addEventListener("click", ctrlDeletItem);
    };

    function ctrlAddItem(event){
        event.preventDefault();
        var input = uiCtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0){
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            uiCtrl.renderListItem(newItem, input.type); 
            uiCtrl.clearFields();

            generateTestData.init();

            updateBudget();
            updatePercetages();
        };
          
    };

    function ctrlDeletItem(event){
        var itemID, splitId, type, ID;
        
        if (event.target.closest(".item__remove")){
            itemID = event.target.closest("li.budget-list__item").id;
            splitId = itemID.split("-"); // "inc-0" => ["inc", "0"]
            type = splitId[0];
            ID = parseInt(splitId[1]);  
            budgetCtrl.deleteItem(type, ID);
            uiCtrl.deleteListItem(itemID);
            updateBudget();
            updatePercetages();
        };
    };
    
    function updateBudget(){
        budgetCtrl.calculateBudget();
        budgetObj = budgetCtrl.getBuddget();

        uiCtrl.updateBudget(budgetObj);
    };

    function updatePercetages(){
        budgetCtrl.calculatePercentages();
        // budgetCtrl.test();
        var IdsAndPerecents = budgetCtrl.getAllIdsAndPercentages();
        uiCtrl.updateItemsPercetages(IdsAndPerecents);
        
    };

    return {
        init: function(){
            console.log("App started");
            uiCtrl.displayMonth();
            setupEventListener();
            uiCtrl.updateBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0,
            });
        }

    }



})(modelController, viewController);

controller.init();