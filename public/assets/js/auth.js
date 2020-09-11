document.getElementById('register').addEventListener('click', event => {
    event.preventDefault()
  
    axios.post('/api/users/register', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('rUsername').value,
      password: document.getElementById('rPassword').value
    })
      .then(() => {
        Toastify({
          text: 'Registered! Please Sign In!',
          duration: 3000
        }).showToast()
  
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('rUsername').value = ''
        document.getElementById('rPassword').value = ''
      })
      .catch(err => {
        console.error(err)
        Toastify({
          text: 'Woops! Something went wrong. Try again.',
          backgroundColor: 'red',
          duration: 3000
        }).showToast()
      })
  })
  
  document.getElementById('signIn').addEventListener('click', event => {
    event.preventDefault()
  
    axios.post('/api/users/login', {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
      .then(({ data: token }) => {
        if (token) {
          localStorage.setItem('user', token)
          window.location = '/index.html'
        } else {
          Toastify({
            text: 'Invalid username or password.',
            backgroundColor: 'red',
            duration: 3000
          }).showToast()
        }
      })
      .catch(err => {
        console.error(err)
        Toastify({
          text: 'Woops! Something went wrong. Try again.',
          backgroundColor: 'red',
          duration: 3000
        }).showToast()
      })
  })