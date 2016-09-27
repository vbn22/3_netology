// 1. Дублирование кода

var tabsWrapper = $(".tabs");
var tabs = tabsWrapper.children("div");
var tabLinks = tabsWrapper.find(".tab-link");
var activeClass = "active";

var active = location.hash;
if(active) {
  tabs.hide();
  $(active).show();
  $("." + activeClass).removeClass(activeClass);
  tabLinks.each(function() {
    if($(this).attr("href") === active) {
      $(this).parent().addClass(activeClass);
    }
  });
}
tabLinks.click(function() {
  tabs.hide();
  $($(this).attr("href")).show();
  $("." + activeClass).removeClass(activeClass);
  $(this).parent().addClass(activeClass);
  return false;
});

// Видно дублирование кода при удалении/добавлении activeClass
// Вынесем этот функционал в отдельный метод activateLink

var tabsWrapper = $(".tabs");
var tabs = tabsWrapper.children("div");
var tabLinks = tabsWrapper.find(".tab-link");
var activeClass = "active";

var activateLink = function(elem) {
  $("." + activeClass).removeClass(activeClass);
  $(elem).addClass(activeClass);
};

var active = location.hash;
if(active) {
  tabs.hide();
  $(active).show();
  tabLinks.each(function() {
    if($(this).attr("href") === active) {
      activateLink($(this).parent());
    }
  });
}
tabLinks.click(function() {
  tabs.hide();
  $($(this).attr("href")).show();
  activateLink($(this).parent());
  return false;
});

// 2. Длинный список параметров в методе  (некоторые параметры можно получить внутри метода discountedPrice)
function discountedPrice(basePrice, seasonalDiscount, fees){
	return basePrice * (1-seasonalDiscount) + fees;
}
let basePrice = quantity * itemPrice;
let seasonalDiscount = getSeasonalDiscount();
let fees = getFees();
let finalPrice = discountedPrice(basePrice, seasonalDiscount, fees);

// Переносим получение значений в тело функции discountedPrice
function discountedPrice(basePrice){
	let seasonalDiscount = getSeasonalDiscount();
	let fees = getFees();
	return basePrice * (1-seasonalDiscount) + fees;
}
let basePrice = quantity * itemPrice;
let finalPrice = discountedPrice(basePrice);

// 3. Конструкция switch
post.prototype.verifyPostLength() {
  switch (this.type) {
    case 'twitter':
      return this.text.length < 140;
      break;
    case 'facebook':
      return this.text.length < 63206;
      break;
  }
}
// отобразим все типы в одном месте более наглядно
var lengthVerifiers = {
  twitter: function (text) { return text.length < 140; }
  facebook: function (text) { return text.length < 63206; }
}
post.prototype.verifyPostLength = function () {
   return lengthVerifiers[this.type](this.text);
}

