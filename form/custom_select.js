NodeList.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this, callback)
}

// Event callbacks

function deactivateSelect(select) {

  // If the control is not active there is nothing to do
  if (!select.classList.contains('active')) return;

  // We need to get the list of options for the custom control
  var optList = select.querySelector('.optList');

  // We close the list of option
  optList.classList.add('hidden');

  // and we deactivate the custom control itself
  select.classList.remove('active');
}

function activeSelect(select , selectList) {
    if (select.classList.contains('active')) return;
    selectList.forEach(deactivateSelect)
    select.classList.add('active')
}

function toggleOptList(select) {
    var optList = select.querySelector('.optList');
    optList.classList.toggle('hidden')
}

function highlightOption(select, option) {
    var optionList = select.querySelectorAll('.option')
    optionList.forEach(function(other) {
        other.classList.remove('highlight')
    })
    option.classList.add('highlight')
}

window.addEventListener('load', function() {
    var selectList = document.querySelectorAll('.select')
    selectList.forEach(function(select) {
        var optionList = select.querySelectorAll('.option')
        optionList.forEach(function(option) {
            option.addEventListener('mouseover', function() {
                highlightOption(select, option)
            })
        })
        select.addEventListener('click', function(event) {
            toggleOptList(select)
        })
        select.addEventListener('blur', function (event) {
            deactivateSelect(select)
        })
        select.addEventListener('keyup', function (event) {
            if (event.keyCode === 27) {
                deactivateSelect(select)
            }
        })
    })
})

// Handling control's value

function updateValue(select, index) {
    var nativeWidget = select.previeusElementSibling;
    var value = select.querySelector('.value')
    var optionList = select.querySelectorAll('.option')
    nativeWidget.selectedIndex = index
    value.innterHTML = optionList[index].innterHTML
    highlightOption(select, optionList[index])
}

function getIndex(select) {
    var nativeWidget = select.previeusElementSibling;
    return nativeWidget.selectedIndex
}

window.addEventListener('load', function () {
  var selectList = document.querySelectorAll('.select');

  // Each custom control needs to be initialized
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll('.option'),
        selectedIndex = getIndex(select);

    // We make our custom control focusable
    select.tabIndex = 0;

    // We make the native control no longer focusable
    select.previousElementSibling.tabIndex = -1;

    // We make sure that the default selected value is correctly displayed
    updateValue(select, selectedIndex);

    // Each time a user clicks on an option, we update the value accordingly
    optionList.forEach(function (option, index) {
      option.addEventListener('click', function (event) {
        updateValue(select, index);
      });
    });

    // Each time a user uses their keyboard on a focused control, we update the value accordingly
    select.addEventListener('keyup', function (event) {
      var length = optionList.length,
          index  = getIndex(select);

      // When the user hits the down arrow, we jump to the next option
      if (event.keyCode === 40 && index < length - 1) { index++; }

      // When the user hits the up arrow, we jump to the previous option
      if (event.keyCode === 38 && index > 0) { index--; }

      updateValue(select, index);
    });
  });
});


// We handle event binding when the document is loaded.
window.addEventListener('load', function () {
  var selectList = document.querySelectorAll('.select');

  // Each custom control needs to be initialized
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll('.option'),
        selectedIndex = getIndex(select);

    // We make our custom control focusable
    select.tabIndex = 0;

    // We make the native control no longer focusable
    select.previousElementSibling.tabIndex = -1;

    // We make sure that the default selected value is correctly displayed
    updateValue(select, selectedIndex);

    // Each time a user clicks on an option, we update the value accordingly
    optionList.forEach(function (option, index) {
      option.addEventListener('click', function (event) {
        updateValue(select, index);
      });
    });

    // Each time a user uses their keyboard on a focused control, we update the value accordingly
    select.addEventListener('keyup', function (event) {
      var length = optionList.length,
          index  = getIndex(select);

      // When the user hits the down arrow, we jump to the next option
      if (event.keyCode === 40 && index < length - 1) { index++; }

      // When the user hits the up arrow, we jump to the previous option
      if (event.keyCode === 38 && index > 0) { index--; }

      updateValue(select, index);
    });
  });
});