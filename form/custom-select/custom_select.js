import {
    highlightOption,
    toggleOptList,
    deactivateSelect,
    getIndex,
    updateValue
} from './utils.js';

NodeList.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this, callback)
}

window.onload = function() {
    const SELECT = document.querySelector('#custom-select');
    const OPTION_LIST = document.querySelector('.optList');
    const OPTIONS = OPTION_LIST.children;

    Array.from(OPTIONS).forEach((option, index) => {
        option.addEventListener('mouseover', () => {highlightOption(OPTION_LIST, option)});

        // Each time a user clicks on an option, we update the value accordingly
        option.addEventListener('click', () => {updateValue(SELECT, index)})

        // Each custom control needs to be initialized
        const selectedIndex = getIndex(option);

        // We make our custom control focusable
        SELECT.tabIndex = 0;

        // We make the native control no longer focusable
        SELECT.previousElementSibling.tabIndex = -1;

        // We make sure that the default selected value is correctly displayed
        updateValue(SELECT, selectedIndex);
    })
    SELECT.addEventListener( 'click', () => {toggleOptList(SELECT)})
    SELECT.addEventListener('blur', () => {deactivateSelect(SELECT)})
    SELECT.addEventListener('keyup', event => {if (event.keyCode === 27) deactivateSelect(SELECT)})

    // Each time a user uses their keyboard on a focused control, we update the value accordingly
    SELECT.addEventListener('keyup', function (event) {
        let length = OPTION_LIST.length,
            index = getIndex(SELECT);

        // When the user hits the down arrow, we jump to the next option
        if (event.keyCode === 40 && index < length - 1) { index++; }

        // When the user hits the up arrow, we jump to the previous option
        if (event.keyCode === 38 && index > 0) { index--; }

        updateValue(SELECT, index);
    });
}
