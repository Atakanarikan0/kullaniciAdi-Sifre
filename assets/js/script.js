let userName = prompt('Kullanıcı Adı :');
let password = Number(prompt('Şifre :'));

if((userName == "admin") && (password == 1234)) {
  alert('Giriş Başarılı.')
}else {
  alert('Kullanıcı adı veya şifre hatalı. Tekrar deneyiniz.')
}