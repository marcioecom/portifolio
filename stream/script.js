const form = document.getElementById('form-message')
const messages = document.querySelector('#msgs')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { message } = form;

  const div = document.createElement('div')
  const span = document.createElement('span')
  span.innerText = `usuario: ${message.value}`

  div.appendChild(span)
  messages.appendChild(div)

  messages.scrollTop = messages.scrollHeight
})
