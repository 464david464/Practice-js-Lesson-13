const mail = prompt('enter your email');
const index = mail.indexOf('@');
const str = '*'
if(mail.includes('@') && mail.indexOf('@') === mail.lastIndexOf('@')){
    mail.slice(0, index)
    alert(mail.replace(mail.slice(0,index), str.repeat(index)))
} else{
    alert('the email is not valid')
}