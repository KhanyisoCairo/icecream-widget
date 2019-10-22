var selectflavourElem = document.querySelector(".Selectflavour");
var selectContainerElem = document.querySelector(".selectcontainer");
var checkToppingElem = document.querySelectorAll(".selectToppings");
var showIceCreamElem = document.querySelector(".showResults");
var addBtnElem = document.querySelector(".addBtn")
var errorMessage = document.querySelector(".error")
var check = document.querySelectorAll(".checkBox:checked");
var selectcontainer = document.getElementsByClassName("selectcontainer");
var results = document.getElementsByClassName("results")
var selectFlavour = document.getElementsByClassName("Selectflavour");
var results = document.getElementsByClassName("results")







function clearError() {
    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);
}


var getChecked = "";

function getValue() {

    for (var i = 0; i < 6; i++) {
        if (check[i].checked === true) {
            getChecked += check[i].value + "";
        }

    }
    getTopping(getChecked)
    alert(getChecked);

}
function getContainerValue() {
    results.innerHTML = selectcontainer.value;
}
function getDropValue() {
    var selectFlavour = document.getElementsByClassName("Selectflavour");
    var results = document.getElementsByClassName("results")
    results.innerHTML = selectFlavour.value;

}


addBtnElem.addEventListener("click", function () {
    var factroryInstance = FactoryIceCream();
    const currentflavour = selectflavourElem.value;
    const currentcontainer = selectContainerElem.value;
    var check = document.querySelectorAll(".checkBox:checked");


    if (currentflavour === "") {
        errorMessage.innerHTML = "Select a flovour!"
        clearError();
        return;
    }
    else if (currentcontainer === "") {
        clearError();
        errorMessage.innerHTML = "select a Container!"

    }
    else if (checkToppingElem === "") {
        clearError();
        errorMessage.innerHTML = " select a Toppiing";

    }

    var checkArray = [];

    check.forEach(function (x) {
        checkArray.push(x.value)

    })

    showIceCreamElem.innerHTML = factroryInstance.addflavour(selectflavourElem.value, selectContainerElem.value, checkArray);
    showIceCreamElem.innerHTML = factroryInstance.culculatePrice();
    showIceCreamElem.innerHTML = "The total price of your Ice Cream is" + "R" + factroryInstance.getAllPrice() + "Enjoy";


});

