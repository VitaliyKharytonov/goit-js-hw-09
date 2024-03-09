const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const parsedLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));

try {
  form.elements.email.value = parsedLocalStorage.email;
  form.elements.message.value = parsedLocalStorage.message;
} catch (error) {
  console.log('No saved data');
}

form.addEventListener('input', event => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify({ email, message }));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
