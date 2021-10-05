
var connection = require('../conn/conn');
const express = require('express');
const e = require('express');




// API for listing available labs for students
exports.available =async function(request, response) 
{

   
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    let time = dt.substr(12,2);

    let currentTime = time;
    var user = "student"
    

    connection.query('SELECT * FROM lab WHERE Lab_Date = ? AND users =?',[date,user], function(error, results, fields)  
      {
          if(results.length > 0){
            if (currentTime >= 11  && currentTime < 14) //session starts at 8 the system should make sure that after 11 slot A is  removed 
            {
                
           
              var slot = 'A';
        
               //update availability since slot time is over
                connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =?  AND Lab_Date =? AND users =?',[slot,date,user], function(error, results, fields)  
                {
                
                    if (error) 
                    { 
                        response.send('System currently facing a problem... Please contact the admin');
                    }
                    else{
                          connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                   
                            if (results.length > 0)
                            {
          
                                
                                response.send(results);
        
                               
                            }
                            else{
                                response.send('all labs are booked for the day');
                            }
        
        
                       })
                    }
               })
            }
        else  if (currentTime >= 14 && currentTime < 17 )//session starts at 11 the system should make sure that after 14 it has been removed (slot B)
            {
        
                var slot = 'B';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                    
                             if (results.length > 0)
                             {
                                response.send(results);
                             }
                             else{
                                response.send('all labs are booked for the day');
                             }
         
         
                        })
                     }
                })
            }
            else  if (currentTime >= 17 && currentTime < 20 )//session starts at 14:00 the system should make sure that after 17:00 it has been removed (slot B)
            {
        
                var slot = 'C';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                    
                             if (results.length > 0)
                             {
                                response.send(results);
                             }
                             else{
                                response.send('all labs are booked for the day');
                             }
         
         
                        })
                     }
                })
            }
            else  if (currentTime >= 20 && currentTime < 23 )//session starts at 17:00 the system should make sure that after 20 it has been removed (slot B)
            {
        
                var slot = 'D';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                    
                             if (results.length > 0)
                             {
                                response.send(results);
                             }
                             else{
                                response.send('all labs are booked for the day');
                             }
         
         
                        })
                     }
                })
            }
            else  if (currentTime >= 23 )//session starts at 20:00 the system should make sure that after 23 it has been removed (slot B)
            {
        
                var slot = 'E';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                    
                             if (results.length > 0)
                             {
                                response.send(results);
                             }
                             else{
                                response.send('all labs are booked for the day');
                             }
         
         
                        })
                     }
                })
            }
            
            else
            {
        
                connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields) 
                 {
                    
                    if (results.length > 0)
                    {
                       response.send(results);
                    }
                    else{
                        response.send('all labs are booked for the day');
                    }
                  
        
                })
        
           }
          }
          else{

            response.send('no labs published for this day');
          }


      })// end of checking for todays date
      



    // else if statements to show available labs 
   

}



//API for listing available labs for lectures
exports.lectureLabs =async function(request, response) 
{
   
  let dt = JSON.stringify(new Date)
  let date = dt.substr(1,10)
  let time = dt.substr(12,2);

  let currentTime = time;
  var user = "lecture"
  

  connection.query('SELECT * FROM lab WHERE Lab_Date = ? AND users =?',[date,user], function(error, results, fields)  
    {
        if(results.length > 0){
          if (currentTime >= 11  && currentTime < 14) //session starts at 8 the system should make sure that after 11 slot A is  removed 
          {
              
         
            var slot = 'A';
      
             //update availability since slot time is over
              connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =?  AND Lab_Date =? AND users =?',[slot,date,user], function(error, results, fields)  
              {
              
                  if (error) 
                  { 
                      response.send('System currently facing a problem... Please contact the admin');
                  }
                  else{
                        connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                 
                          if (results.length > 0)
                          {
        
                              
                              response.send(results);
      
                             
                          }
                          else{
                              response.send('all labs are booked for the day');
                          }
      
      
                     })
                  }
             })
          }
      else  if (currentTime >= 14 && currentTime < 17 )//session starts at 11 the system should make sure that after 14 it has been removed (slot B)
          {
      
              var slot = 'B';
      
              //update availability since slot time is over
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                  
                           if (results.length > 0)
                           {
                              response.send(results);
                           }
                           else{
                              response.send('all labs are booked for the day');
                           }
       
       
                      })
                   }
              })
          }
          else  if (currentTime >= 17 && currentTime < 20 )//session starts at 14:00 the system should make sure that after 17:00 it has been removed (slot B)
          {
      
              var slot = 'C';
      
              //update availability since slot time is over
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                  
                           if (results.length > 0)
                           {
                              response.send(results);
                           }
                           else{
                              response.send('all labs are booked for the day');
                           }
       
       
                      })
                   }
              })
          }
          else  if (currentTime >= 20 && currentTime < 23 )//session starts at 17:00 the system should make sure that after 20 it has been removed (slot B)
          {
      
              var slot = 'D';
      
              //update availability since slot time is over
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                  
                           if (results.length > 0)
                           {
                              response.send(results);
                           }
                           else{
                              response.send('all labs are booked for the day');
                           }
       
       
                      })
                   }
              })
          }
          else  if (currentTime >= 23 )//session starts at 20:00 the system should make sure that after 23 it has been removed (slot B)
          {
      
              var slot = 'E';
      
              //update availability since slot time is over
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =?',[slot,date,user], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields)  {
                  
                           if (results.length > 0)
                           {
                              response.send(results);
                           }
                           else{
                              response.send('all labs are booked for the day');
                           }
       
       
                      })
                   }
              })
          }
          
          else
          {
      
              connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =?',[date,user], function(error, results, fields) 
               {
                  
                  if (results.length > 0)
                  {
                     response.send(results);
                  }
                  else{
                      response.send('all labs are booked for the day');
                  }
                
      
              })
      
         }
        }
        else{

          response.send('no labs published for this day');
        }


    })// end of checking for todays date


}






//API for making a booking

exports.labBooking=async function(request, response) 
{
    
    var stuNumber = request.body.stuNumber;
    var labAndSlot = request.body.labAndSlot;
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    let email = request.body.email;
    
    console.log(stuNumber)
    console.log(labAndSlot);


    if(stuNumber && labAndSlot)
    {
        var labName = labAndSlot.substr(0,6);
        var slot = labAndSlot.substr(16,1);
        var text = stuNumber;
        let time = ""
       
        //else if statement for slot time
        if (slot == "A"){
          time = "08:00 - 11:00"

        }
        else if(slot == "B"){
          time = "11:00 - 14:00"
        }
        else if(slot == "C"){
          
          time = "14:00 - 17:00"
        }
        else if(slot == "D")
        {
          time = "17:00 - 20:00"

        }
        else if(slot == "E")
        {
          time = "20:00 - 23:00"
        }
       

      
        

       

        connection.query('SELECT * FROM booking WHERE Lab_Slot =? AND Lab_Name =? AND Stud_ID =? AND date =?',[slot,labName,stuNumber,date], function (error, results, fields)
        {
                if(results.length > 0)
                {
                    response.send('already booked a lab for this session');
                }  
                else 
                {
                    
                      
                    var booking1={

                        "Lab_Name":labName,
                        "Lab_Slot":slot,
                        "Stud_ID":request.body.stuNumber,          
                        "date":date,
               
                    } ;

                    connection.query('SELECT Lab_Slot from booking where Lab_Slot =? AND Stud_ID = ? AND date =?',[slot,stuNumber,date], function (error, results, fields) {
                    
                    if(results.length == 0){


                      connection.query('SELECT * FROM  booking  WHERE Num_Bookings > 3 AND Stud_ID =? AND date = ?',[stuNumber,date],function (error, results, fields){

                        if(results.length > 0){
                                        
                          response.send('you can not make more than 4 bookings per day');
                          
                         }else{
                        
                          connection.query('INSERT INTO booking SET ? ',[booking1], function (error, results, fields) {
                            if (error) 
                            {
                             
                              response.send('System currently facing a problem... Please contact the admin');
                              
                            }else
                            {
                            
                              connection.query('UPDATE booking SET Stud_ID = ?,Num_Bookings = Num_Bookings + 1 WHERE Stud_ID =?', [stuNumber,stuNumber],function (error, results, fields){
                  
                                connection.query('UPDATE lab SET Lab_availability =  Lab_availability + 1  WHERE Lab_Slot =? AND Lab_Name =?',[slot,labName], function(error, results, fields){ //updates and makes a booking
      
                                  if (error) 
                                  { 
                                      response.send('System currently facing a problem... Please contact the admin');
                                  }
                                  else{
                                  
                                    //sql statement for getting the unique booking ID of a student
                                    connection.query('SELECT Booking_ID  FROM  booking WHERE Stud_ID =? AND Lab_Name =? AND Lab_Slot =? AND date=?',[stuNumber,labName,slot,date],function (error, results, fields){

                                       if(results.length > 0){
                                     
                                        //code for parsing a value only 
                                         let bookingID = ""
                                         let bookingID1 = JSON.stringify(results)
                                         this.booking = JSON.parse(bookingID1)
                                         bookingID = this.booking[0].Booking_ID;
                                         console.log(bookingID)
                                      
                                    
                                    
                                    
                                    response.send("you have successfully booked for a lab check your tut4life for confirmation");

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
                                     subject:'No reply :Booking Confirmation',
                                     text: ( 'You Have successfully booked a lab' 
                                            +'\nLab Name : '+ labName 
                                            +'\nSlot     : ' + slot
                                            +'\nTime     : ' + time 
                                            +'\nDate     : ' + date
                                            +'\nYour booking ID is : TUTLBSSC' +bookingID
                                            +'\n\n\nThis email will grant you access to venue. you are advised to cancel this booking if you wont make it so other students can make use of this reservation ')

                                     };


                                      transporter.sendMail(mailOptions,function(error,info){

                                       if(error){
                                       console.log(error)
                                     }else{
                                          //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                          console.log('Email sent ' + info.response)
                                         
                                     }


                                     })
                                    }
                                     else{
                                      response.send('system error')
                                    }

                                 })

                           
                                       
                                        
                                  }
      
                                })// end of query for updating availability 
                              })// end of query for booking
                          
                        
                            }
                          
                          })//end of inserting

                        }
                      })//end of checking for number of bookings
                      



                    
                  }else{
                      
                    response.send('cant book for more than one lab at the same time');
                    
                            
                  }
                })
                
                    
                }      
             })
            
    } 
           


}



//lecture booking API

exports.lecLabBooking=async function(request, response) 
{
    
    var stuNumber = request.body.stuNumber; //lecture number
    var labAndSlot = request.body.labAndSlot;
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    let email = request.body.email;
    
    console.log(stuNumber)
    console.log(labAndSlot);


    if(stuNumber && labAndSlot)
    {
        var labName = labAndSlot.substr(0,6);
        var slot = labAndSlot.substr(16,1);
        var text = stuNumber;
        let time = ""
       
        //else if statement for slot time
        if (slot == "A"){
          time = "08:00 - 11:00"

        }
        else if(slot == "B"){
          time = "11:00 - 14:00"
        }
        else if(slot == "C"){
          
          time = "14:00 - 17:00"
        }
        else if(slot == "D")
        {
          time = "17:00 - 20:00"

        }
        else if(slot == "E")
        {
          time = "20:00 - 23:00"
        }
       

      
        

       

        connection.query('SELECT * FROM booking WHERE Lab_Slot =? AND Lab_Name =? AND Stud_ID =? AND date =?',[slot,labName,stuNumber,date], function (error, results, fields)
        {
                if(results.length > 0)
                {
                    response.send('already booked a lab for this session');
                }  
                else 
                {
                    
                      
                    var booking1={

                        "Lab_Name":labName,
                        "Lab_Slot":slot,
                        "Stud_ID":request.body.stuNumber,          
                        "date":date,
               
                    } ;

                    connection.query('SELECT Lab_Slot from booking where Lab_Slot =? AND Stud_ID = ? AND date =?',[slot,stuNumber,date], function (error, results, fields) {
                    
                    if(results.length == 0){


                      connection.query('SELECT * FROM  booking  WHERE Num_Bookings > 3 AND Stud_ID =? AND date = ?',[stuNumber,date],function (error, results, fields){

                        if(results.length > 0){
                                        
                          response.send('you can not make more than 4 bookings per day');
                          
                         }else{
                        
                          connection.query('INSERT INTO booking SET ? ',[booking1], function (error, results, fields) {
                            if (error) 
                            {
                             
                              response.send('System currently facing a problem... Please contact the admin');
                              
                            }else
                            {
                            
                              connection.query('UPDATE booking SET Stud_ID = ?,Num_Bookings = Num_Bookings + 1 WHERE Stud_ID =?', [stuNumber,stuNumber],function (error, results, fields){
                  
                                connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Name =?',[slot,labName], function(error, results, fields){ //updates and makes a booking
      
                                  if (error) 
                                  { 
                                      response.send('System currently facing a problem... Please contact the admin');
                                  }
                                  else{
                                  
                                    //sql statement for getting the unique booking ID of a student
                                    connection.query('SELECT Booking_ID  FROM  booking WHERE Stud_ID =? AND Lab_Name =? AND Lab_Slot =? AND date=?',[stuNumber,labName,slot,date],function (error, results, fields){

                                       if(results.length > 0){
                                     
                                        //code for parsing a value only 
                                         let bookingID = ""
                                         let bookingID1 = JSON.stringify(results)
                                         this.booking = JSON.parse(bookingID1)
                                         bookingID = this.booking[0].Booking_ID;
                                         console.log(bookingID)
                                      
                                    
                                    
                                    
                                    response.send("you have successfully booked for a lab check your tut4life for confirmation");

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
                                     subject:'No reply :Booking Confirmation',
                                     text: ( 'You Have successfully booked a lab' 
                                            +'\nLab Name : '+ labName 
                                            +'\nSlot     : ' + slot
                                            +'\nTime     : ' + time 
                                            +'\nDate     : ' + date
                                            +'\nYour booking ID is : TUTLBSSC' +bookingID
                                            +'\n\n\nThis email will grant you access to venue. you are advised to cancel this booking if you wont make it so other students can make use of this reservation ')

                                     };


                                      transporter.sendMail(mailOptions,function(error,info){

                                       if(error){
                                       console.log(error)
                                     }else{
                                          //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                          console.log('Email sent ' + info.response)
                                         
                                     }


                                     })
                                    }
                                     else{
                                      response.send('system error')
                                    }

                                 })

                           
                                       
                                        
                                  }
      
                                })// end of query for updating availability 
                              })// end of query for booking
                          
                        
                            }
                          
                          })//end of inserting

                        }
                      })//end of checking for number of bookings
                      



                    
                  }else{
                      
                    response.send('cant book for more than one lab at the same time');
                    
                            
                  }
                })
                
                    
                }      
             })
            
    } 
           


}





exports.status=async function(request, response) {

    var stuNumber = request.body.stuNumber;
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)


    console.log(stuNumber)

    connection.query('SELECT * FROM booking Where Stud_ID =? AND date=?',[stuNumber,date], function (error, results, fields) {
        if (error) {
         
          response.send(results);

          
          
        }else{
          
          response.send(results);
          
        }
      });
   


}

//API for counting the number of booking on the current day
exports.bookingsNum = async function(request, response) {

    var stu = request.body.stuNumber;
    let dt = JSON.stringify(new Date);
    let date = dt.substr(1,10);
    let bookingID = ""

    console.log(stu);
    console.log(date);

    connection.query('SELECT COUNT(Num_Bookings) as Num_Bookings FROM booking WHERE Stud_ID = ? AND date = ?', [stu, date], function (error, results, fields)
    {
      if(results.length > 0)
        {
           
           //code for parsing a value only 
          
           let bookingID1 = JSON.stringify(results)
           this.booking = JSON.parse(bookingID1)
           bookingID = this.booking[0].Num_Bookings; // important part variable name should be the same as the one on the db
           console.log(bookingID)
           response.send(JSON.stringify(bookingID));
        }
        else{
         
          response.send('No bookings made today');
        }
    })
   
}


//APi for cancelling a booking
exports.cancelBooking=async function(request, response) {

   
  var stuNumber = request.body.stuNumber;
  var labAndSlot = request.body.labAndSlot;
  let dt = JSON.stringify(new Date)
  let date = dt.substr(1,10)
  
  
  console.log(stuNumber)
  console.log(labAndSlot)


  if(stuNumber && labAndSlot)
  {
      var labName = labAndSlot.substr(0,6);
      var slot = labAndSlot.substr(16,1);
   


  connection.query('DELETE  FROM booking where date=?  AND Lab_Name =? AND Lab_Slot =? AND Stud_ID' , [date,labName,slot,stuNumber], function (error, results, fields) {
	  if (error) {response.send('problems with query');}else{
	  
   
    connection.query('UPDATE lab SET Lab_availability =  Lab_availability -1   WHERE Lab_Slot =? AND Lab_Name =? AND date =?',[slot,labName,date], function(error, results, fields){ //updates and makes a booking

      if (error) 
      { 
          response.send('System currently facing a problem... Please contact the admin');
      }
      else{
        connection.query('UPDATE booking SET MAX(Num_Bookings) = MAX(Num_Bookings) -1 WHERE date=?  AND Lab_Name =? AND Lab_Slot =? AND Stud_ID' , [date,labName,slot,stuNumber], function (error, results, fields)
            {
            if(error)
            {
              response.send('System currently facing a problem... Please contact the admin');
            }else
            {
              response.send('booking has been cancelled');
            }

        })
      
      }
    
    })
  

  }

	});

}
else{

   response.send('select a slot that you wish to cancel a booking of')
}

}