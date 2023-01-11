const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
service:"gmail",
auth:{
    user:"pearlmarytom@gmail.com",
    pass :"ienvmlntwwopuvgt"
}


})
let details ={
    from:"pearlmarytom@gmail.com",
    to :"pearlmarybond@gmail.com",
    subject:"testing our nodemailer",
    text:"sending first sender again"
}
mailTransporter.sendMail(details,(err)=>{
if(err){
    console.log("it has an error",err)
}
else{
    console.log("email has sent")
}

})