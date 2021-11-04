    var connection = require('../conn/conn');
// require the bcrypt module
//var bcrypt = require('bcrypt'); 


// register for student
//call back function for route post

    
    exports.register =async function(request, response) 
{  

     //fetch data
    var stuNumber = request.body.stuNumber;
    var name = request.body.name;
    var surname = request.body.surname;
    var email = request.body.email;
    var password = request.body.password;
	var confirm = request.body.confirm;
      
    
    console.log(name);
	console.log(surname);
	console.log(email);
	console.log(stuNumber); 
    console.log(password);
    console.log(confirm);

    //validation email stuNumber@tut4life.ac.za
    var stringEmail = stuNumber +"@tut4life.ac.za";
    

    if ( stuNumber && name && surname && email && password && confirm ) 
    {
            connection.query('select * from student_record where stud_no = ? ',[stuNumber], function(error, results, fields) {

            if(results.length > 0) { // if the student exist it should continue executing 

                if(email == stringEmail){

                
                // check if user exists
          
                connection.query('SELECT * FROM student where stud_no = ?', [stuNumber], function(error, results, fields) 
             {
                if (results.length > 0)
                {
                    response.send('User Already has an account');
                }else{
                    if(password == confirm )
                    { // end of if statement for password confirmation//if statement for password confirmation
    
                    //if the user is not found
                    
                                  
                                    var student1={

                                        "stud_no":request.body.stuNumber,
                                        "stu_name":request.body.name,
                                        "stud_surname":request.body.surname,          
                                        "email":request.body.email,
                                        "password":request.body.password, 
                                        "confirm":request.body.confirm,
                               
                                    } 
                                    connection.query('INSERT INTO student SET ?',[student1], function (error, results, fields) {
                                      if (error) {
                                       
                                        response.send('System currently facing a problem... Please contact the admin');
                                        
                                      }
                                      else
                                      {
                                        
                                        response.send('user registered successfully');
                                         //write a code to send email 
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
                                         to:JSON.stringify(stuNumber + '@tut4life.ac.za'),
                                        subject:'No reply :LAB BOOKING REGISTRATION',
                                        text: ( 'You Have successfully created an account with Lab Booking ' 
                                       +'\n Student Name : '+ name
                                       +'\n Student Surname     : ' + surname
                                       +'\n Student Number     : ' + stuNumber 
                                       +'\n\n\n You can now login and start making  bookings')

                                };


                                 transporter.sendMail(mailOptions,function(error,info){

                                  if(error){
                                  console.log(error)
                                }else{
                                     //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                     console.log('Email sent  to '+stuNumber+'@tut4life.ac.za' + info.response)
                                    
                                }


                                })   
                                        
                                }
                                    });//end of inserting data
                    }else{
    
                        response.send('password does not match');
        
                    }
                  
                }		//end of the if when the user  is not found		
        
                
     
            });//end of searching for a user
        }else{
            response.send('Please enter your tut4life email in this format studentnumber@tut4life.ac.za');	
        }
    }
    else{
        
        response.send('Not a registered student');	

    }


        })//end of query that checks if student ios registered 
         
       
            
        } else{
        response.send('Please enter values');	
        }
    
    
        
    }


// register for lecture

// HEAD
// register for lecture

    exports.Lec_register =async function(request, response) 
    {  
    
        //fetch data
        var lec_id=request.body.stuNumber;
        var lec_name = request.body.name;
        var lec_surname = request.body.surname;
        var lec_email = request.body.email;
        var password = request.body.password;
        var confirm = request.body.confirm;
          
        
     
        console.log(lec_name);
        console.log(lec_surname);
        console.log(lec_email);
        console.log(lec_id); 
        console.log(password);
        console.log(confirm);
    
        //validation email stuNumber@tut4life.ac.za
        var stringEmail = lec_id +"@tut4life.ac.za";
        
    
       
        if ( lec_id && lec_name && lec_surname && lec_email && password && confirm ) 
        {


              connection.query('select * from lecture_record where lec_id = ? ',[lec_id], function(error, results, fields) {
    
                if(results.length > 0) { // if the student exist it should continue executing 
    
                    if(lec_email == stringEmail){
    
                    
                    // check if user exists j
              
                    connection.query('SELECT * FROM lecture where lec_id = ?', [lec_id], function(error, results, fields) 
                 {
                    if (results.length > 0)
                    {
                        response.send('User Already has an account');
                    }else{
                        if(password == confirm ){ // end of if statement for password confirmation//if statement for password confirmation
        
                        //if the user is not found
                        
                                        
                                        var new_lecture={
    
                                            "lec_id":request.body.stuNumber,
                                            "lec_name":request.body.name,
                                             "lec_surname": request.body.surname,      
                                            "lec_email":request.body.email,
                                            "password":request.body.password, 
                                            "confirm":request.body.confirm,
                                   
                                        } 
                                        connection.query('INSERT INTO lecture SET ?',[new_lecture], function (error, results, fields) {
                                          if (error) {
                                           
                                            response.send('System currently facing a problem... Please contact the admin');
                                            
                                          }else{
                                            
                                            response.send('user registered successfully');
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
                                         to:JSON.stringify(lec_id + '@tut4life.ac.za'),
                                        subject:'No reply :LAB BOOKING REGISTRATION',
                                        text: ( 'You Have successfully created an account with Lab Booking ' 
                                       +'\n Student Name : '+ lec_name
                                       +'\n Student Surname     : ' + lec_surname
                                       +'\n Student Number     : ' + lec_id 
                                       +'\n\n\n You can now login and start making  bookings')

                                };


                                 transporter.sendMail(mailOptions,function(error,info){

                                  if(error){
                                  console.log(error)
                                }else{
                                     //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                     console.log('Email sent  to '+lec_id+'@tut4life.ac.za' + info.response)
                                    
                                }


                                })   
                                        
                                }
                                            
                                          
                                        });//end of inserting data
                        }else{
        
                            response.send('password does not match');
            
                        }
                      
                    }		//end of the if when the user  is not found		
            
                    
         
                });//end of searching for a user
            }else{
                response.send('Please enter your tut4life email in this format lec_id@tut4life.ac.za');	
            }
        }
        else{
            
            response.send('Not a registered employer');	
    
        }
    
    
            })//end of query that checks if student ios registered 
             
           
                
            } else{
            response.send('Please enter values');	
            }
        
        
            
        }

    

