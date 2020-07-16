const signUpForm = document.querySelector('.signup-form');
const userId = document.querySelector('input#user-id');
const password = document.querySelector('input#password');

signUpForm.addEventListener('submit', e => {
  if (confirm('회원 가입 하시겠습니까?')) {
    if (!userId.value) {
      alert('아이디를 작성하세요.');
      e.preventDefault();
      return
    }
    if (!password.value) {
      alert('비밀번호를 작성하세요.');
      e.preventDefault();
      return
    }
    alert('회원가입 성공!');
    e.preventDefault();
  }
})