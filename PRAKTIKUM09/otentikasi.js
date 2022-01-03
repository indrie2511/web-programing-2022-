function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
  
    if (username.value === 'indrie25' && password.value === 'pastibisa') {
      window.location.href = 'loginsukses.html';
    } else {
      document.write('Anda Gagal Login. Silahkan mencoba Kembali')
    }
  }