export {
    deactivateSelect,
    activeSelect,
    toggleOptList,
    highlightOption,
    updateValue,
    getIndex
}

// Event callbacks
function deactivateSelect(select) {

    // If the control is not active there is nothing to do
    if (!select.classList.contains('active')) return;

    // We need to get the list of options for the custom control
    const OPT_LIST = select.querySelector('.optList');

    // We close the list of option
    OPT_LIST.classList.add('hidden');

    // and we deactivate the custom control itself
    select.classList.remove('active');
}

function activeSelect(select , selectList) {
    if (select.classList.contains('active')) return;
    selectList.forEach(deactivateSelect)
    select.classList.add('active')
}

function toggleOptList(select) {
    const OPT_LIST = select.querySelector('.optList');
    OPT_LIST.classList.toggle('hidden')
}

function highlightOption(select, option) {
    const OPTION_LIST = select.querySelectorAll('.option');
    OPTION_LIST.forEach(function(other) {
        other.classList.remove('highlight')
    })
    option.classList.add('highlight')
}

// Handling control's value
function updateValue(select, index) {
    const NATIVE_WIDGET = select.previousElementSibling;
    const VALUE = select.querySelector('.value');
    const OPTION_LIST = select.querySelectorAll('.option');
    NATIVE_WIDGET.selectedIndex = index
    VALUE.innerHTML = OPTION_LIST[index].innerHTML
    highlightOption(select, OPTION_LIST[index])
}

function getIndex(select) {
    const NATIVE_WIDGET = select.previousElementSibling;
    return NATIVE_WIDGET.selectedIndex
}

