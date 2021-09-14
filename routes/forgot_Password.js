var connection = require('../conn/conn');

exports.forgotPassword =async function(request, response) 
{

    var stuNumber = request.body.stuNumber;
    var email = request.body.email;
    
    console.log(stuNumber);
    console.log(email);

    //validation for email stuNumber@tut4life.ac.za system only takes tut4life email
    var stringEmail = stuNumber +"@tut4life.ac.za";

    if(stuNumber && email)//check if values are entered
    {

    connection.query('SELECT password FROM student where stud_no = ?', [stuNumber], function(error, results, fields)  {
    
        if (results.length > 0){

            if(email == stringEmail) //check if you have entered a correct tut4life email
            {

            var pas = " " //this string returns the users password
            response.send('your password has been sent to your tut4life email');
             
            //code for parsing a value only 
             let pas1 = JSON.stringify(results)
             this.password1 = JSON.parse(pas1)
             pas = this.password1[0].password;
             console.log(pas)




       
           
            //write a code to send email with that pas string
            var nodemailer = require('nodemailer')
            var transporter = nodemailer.createTransport({
            
                service:'gmail',
                auth:{
                    user:'godfrey555mabena@gmail.com',
                    pass:'godfreyzo'
                    
                }


            });

            var mailOptions ={

                from:'godfrey555mabena@gmail.com',
                to:JSON.stringify(email),
                subject:'No reply : lab booking system password',
                text: ('Your password is : ' + pas)

            };


            transporter.sendMail(mailOptions,function(error,info){

                if(error){
                    console.log(error)
                }else{
                    console.log('Email sent ' + info.response)
                }


            })
         }
         else
         {
             response.send('Please enter a valid tut4life email')
         }

            
        }
        else{

            response.send('student number does not exist');            
        }
    
    })
 }else
 {
     response.send('please enter values')
 }
}
    


