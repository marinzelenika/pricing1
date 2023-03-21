document.addEventListener("DOMContentLoaded", function () {
  var tabList = [].slice.call(document.querySelectorAll("#myTab a"));
  tabList.forEach(function (tab) {
    var tabTrigger = new bootstrap.Tab(tab);

    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});

// Function that calculates how much money is spent, it accepts user input. 0 to 80000 is free, 80000 to 160000 is $0.02, 160000 credits to 800000 is $0.01
