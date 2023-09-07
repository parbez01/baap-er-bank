// add click handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('clicked');
    // get the email feild value
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    // console.log(email);

    // to get password
const passwordFeild = document.getElementById('user-password');
const password = passwordFeild.value;
// console.log(password);

// do not verify email password on the clint side

// verify email and password

if(email === 'nishat@gmail.com' && password === '12345'){
    // console.log('valid user');
    window.location.href = 'bank.html'
}
else{
    // console.log('invalid User');
    alert('You are not my children')
}
    
})