/**
 * You should trigger an alert when the user hits Enter after entering text in the
 * input with id "write-some-text". The alert text should be the text typed in the input.
 * If the input is empty, you should not trigger the alert.
 */
export function displayInputContentInAlertOnEnterKey() {
  const input = document.getElementById('write-some-text');

  input.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') return;
    const value = input.value.trim();
    if (!value) return;
    alert(value);
  });
}


export function addElementsInListOnEnterKey() {
  const input = document.getElementById('list-input');
  const list  = document.getElementById('list');

  const addItem = () => {
    const value = input.value.trim();
    if (!value) return;
    list.insertAdjacentHTML('beforeend', `<li>${value}</li>`);   
    input.value = '';
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addItem();
  });

  input.addEventListener('blur', addItem);
}
/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    const list  = document.getElementById('list');
    const removeItem = () => {
      const value = input.value.trim();
    if (value) input.value = '';
    list.insertAdjacentHTML('beforeend', `<li>${value}</li>`);   
    input.value = '';
    }
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') event.target.remove();
});}

