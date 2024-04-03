// export {
//     highlightOption,
//     updateValue,
//     getIndex
// }

// Event callbacks
export function deactivateSelect(select) {

    // If the control is not active there is nothing to do
    if (!select.classList.contains('active')) return;

    // We need to get the list of options for the custom control
    const OPT_LIST = select.querySelector('.optList');

    // We close the list of option
    OPT_LIST.classList.add('hidden');

    // and we deactivate the custom control itself
    select.classList.remove('active');
}

export function activeSelect(select , selectList) {
    if (select.classList.contains('active')) return;
    selectList.forEach(deactivateSelect)
    select.classList.add('active')
}

export function toggleOptList(select) {
    const OPT_LIST = select.querySelector('.optList');
    OPT_LIST.classList.toggle('hidden')
}

export function highlightOption(option) {
    option.classList.add('highlight')
}

export function removeHighlight(option) {
    option.classList.remove('highlight')
}

// Handling control's value
export function updateValue(select, option) {
    // const NATIVE_WIDGET = select.previousElementSibling;
    const VALUE = select.querySelector('.value');
    // const OPTION_LIST = select.querySelectorAll('.option');
    // NATIVE_WIDGET.selectedIndex = index
    VALUE.innerHTML = option.innerHTML
    // highlightOption(select, OPTION_LIST[index])
}

export function getIndex(select) {
    const NATIVE_WIDGET = select.previousElementSibling;
    return NATIVE_WIDGET.selectedIndex
}

