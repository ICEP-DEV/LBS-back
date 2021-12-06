
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
    var status = "Confirmed"
    

    connection.query('SELECT * FROM lab WHERE Lab_Date = ? AND users =? AND status =?',[date,user,status], function(error, results, fields)  
      {
          if(results.length > 0){
            if (currentTime >= 11  && currentTime < 14) //session starts at 8 the system should make sure that after 11 slot A is  removed 
            {
                
           
              var slot = 'A';
        
               //update availability since slot time is over
                connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =?  AND Lab_Date =? AND users =? AND status = ?',[slot,date,user,status], function(error, results, fields)  
                {
                
                    if (error) 
                    { 
                        response.send('System currently facing a problem... Please contact the admin');
                    }
                    else{
                          connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user,status], function(error, results, fields)  {
                   
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
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status = ?',[slot,date,user,status], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user,status], function(error, results, fields)  {
                    
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
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status = ?',[slot,date,user,status], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user,status], function(error, results, fields)  {
                    
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
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status = ?' ,[slot,date,user,status], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user ,status], function(error, results, fields)  {
                    
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
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status = ?',[slot,date,user,status], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('System currently facing a problem... Please contact the admin');
                     }
                     else{
                           connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user ,status], function(error, results, fields)  {
                    
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
        
                connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status = ?',[date,user,status], function(error, results, fields) 
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
  var user = "lecturer"
  var status = "Confirmed"
  

  connection.query('SELECT * FROM lab WHERE Lab_Date = ? AND users =? AND status=?',[date,user,status], function(error, results, fields)  
    {
        if(results.length > 0){
          if (currentTime >= 11  && currentTime < 14) //session starts at 8 the system should make sure that after 11 slot A is  removed 
          {
              
         
            var slot = 'A';
      
             //update availability since slot time is over
              connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =?  AND Lab_Date =? AND users =? AND status=?',[slot,date,user ,status], function(error, results, fields)  
              {
              
                  if (error) 
                  { 
                      response.send('System currently facing a problem... Please contact the admin');
                  }
                  else{
                        connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields)  {
                 
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
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status=?',[slot,date,user,status], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields)  {
                  
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
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status=?',[slot,date,user,status], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields)  {
                  
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
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status=?',[slot,date,user,status], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields)  {
                  
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
               connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?  AND users =? AND status=?',[slot,date,user,status], function(error, results, fields)  
               {
               
                   if (error) 
                   { 
                       response.send('System currently facing a problem... Please contact the admin');
                   }
                   else{
                         connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields)  {
                  
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
      
              connection.query('SELECT * FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =? AND users =? AND status=?',[date,user,status], function(error, results, fields) 
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
       

      
        

       

        connection.query('SELECT * FROM booking WHERE Lab_Slot =? AND Lab_Name =? AND User_ID=? AND date =?',[slot,labName,stuNumber,date], function (error, results, fields)
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
                        "User_ID":request.body.stuNumber,          
                        "date":date,
               
                    } ;

                    connection.query('SELECT Lab_Slot from booking where Lab_Slot =? AND User_ID= ? AND date =?',[slot,stuNumber,date], function (error, results, fields) {
                    
                    if(results.length == 0){


                      connection.query('SELECT * FROM  booking  WHERE Num_Bookings >= 2 AND User_ID =? AND date = ?',[stuNumber,date],function (error, results, fields){

                        if(results.length > 0){
                                        
                          response.send('you cannot make more than two bookings per day');
                          
                         }else{
                        
                          connection.query('INSERT INTO booking SET ? ',[booking1], function (error, results, fields) {
                            if (error) 
                            {
                             
                              response.send('System currently facing a problem... Please contact the admin');
                              
                            }else
                            {
                            
                              connection.query('UPDATE booking SET User_ID=?,Num_Bookings = Num_Bookings + 1 WHERE User_ID =?', [stuNumber,stuNumber],function (error, results, fields){
                  
                                connection.query('UPDATE lab SET Lab_availability =  Lab_availability + 1  WHERE Lab_Slot =? AND Lab_Name =?',[slot,labName], function(error, results, fields){ //updates and makes a booking
      
                                  if (error) 
                                  { 
                                      response.send('System currently facing a problem... Please contact the admin');
                                  }
                                  else{
                                  
                                    //sql statement for getting the unique booking ID of a student
                                    connection.query('SELECT Booking_ID  FROM  booking WHERE User_ID =? AND Lab_Name =? AND Lab_Slot =? AND date=?',[stuNumber,labName,slot,date],function (error, results, fields){

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
    
    var lecNumber = request.body.lec_id; //lecture number
    var labAndSlot = request.body.labAndSlot;
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    let email = request.body.email;
    
    console.log(lecNumber)
    console.log(labAndSlot);


    if(lecNumber && labAndSlot)
    {
        var labName = labAndSlot.substr(0,6);
        var slot = labAndSlot.substr(16,1);
        var text = lecNumber;
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
       

      
        

       

        connection.query('SELECT * FROM booking WHERE Lab_Slot =? AND Lab_Name =? AND User_ID=? AND date =?',[slot,labName,lecNumber,date], function (error, results, fields)
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
                        "User_ID":request.body.lec_id,          
                        "date":date,
                        
               
                    } ;

                    connection.query('SELECT Lab_Slot from booking where Lab_Slot =? AND User_ID= ? AND date =?',[slot,lecNumber,date], function (error, results, fields) {
                    
                    if(results.length == 0){


                      connection.query('SELECT * FROM  booking  WHERE Num_Bookings >= 2 AND User_ID= ? AND date = ?',[lecNumber,date],function (error, results, fields){

                        if(results.length > 0){
                                        
                          response.send('you cannot make more than two bookings per day');
                          
                         }else{
                        
                        
                          connection.query('INSERT INTO booking SET ? ',[booking1], function (error, results, fields) {
                            if (error) 
                            {
                             
                              response.send('System currently facing a problem... Please contact the admin');
                              
                            }else
                            {
                            
                              connection.query('UPDATE booking SET User_ID = ?, Num_Bookings = Num_Bookings + 1 WHERE User_ID = ?', [lecNumber,lecNumber],function (error, results, fields){
                  
                                connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Name =?',[slot,labName], function(error, results, fields){ //updates and makes a booking
      
                                  if (error) 
                                  { 
                                      response.send('System currently facing a problem... Please contact the admin');
                                  }
                                  else{
                                  
                                    //sql statement for getting the unique booking ID of a student
                                    connection.query('SELECT Booking_ID  FROM  booking WHERE User_ID= ? AND Lab_Name =? AND Lab_Slot =? AND date=?',[lecNumber,labName,slot,date],function (error, results, fields){

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
                                          console.log('Email sent to '+email + info.response)
                                         
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


    

    connection.query('SELECT * FROM booking Where User_ID =? AND date=?',[stuNumber,date], function (error, results, fields) {
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

    connection.query('SELECT COUNT(Num_Bookings) as Num_Bookings FROM booking WHERE User_ID = ? AND date = ?', [stu, date], function (error, results, fields)
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

   
 
  var bookingID = request.body.bookingID
  
       
  console.log(bookingID)
  
  if(bookingID){

  connection.query('SELECT  * FROM booking WHERE User_ID =?' , [bookingID], function (error, results, fields) {

    if(results.length > 0)
    {
     

      //code for geting labName and slot and the student number
           let stringResults = JSON.stringify(results)
           this.results1 = JSON.parse(stringResults)
           let labName = this.results1[0].Lab_Name;
           let slot =this.results1[0].Lab_Slot;
           let stuNumber = this.results1[0].User_ID;
           let dt = JSON.stringify(new Date);
           let date = dt.substr(1,10);

           //code for time slot
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
           console.log(labName +'   '+slot + '  ' + stuNumber + '  ' + date )

           //make space available
           connection.query('UPDATE lab SET Lab_availability =  Lab_availability -1   WHERE Lab_Slot =? AND Lab_Name =? AND Lab_Date =?',[slot,labName,date], function(error, results, fields){ //updates and makes a booking
      
            if (error) 
            { 
                
              response.send('System currently facing a problem... Please contact the admin '); 
            }
            else
            {
              //insert to cancelled booking table
              var booking1={

                "Lab_Name":labName,
                "Lab_Slot":slot,
                "User_ID":stuNumber,          
                "date":date,
                "Booking_ID":stuNumber,
       
            } ;
            
              connection.query('INSERT INTO cancelled_bookings SET ? ',[booking1], function (error, results, fields) {})



              connection.query('DELETE FROM booking WHERE User_ID = ?',[stuNumber], function(error, results, fields) {
                if(error)
                {
                  response.send('System currently facing a problem... Please contact the admin');
                }
                else
                {
                  response.send('booking has been cancelled'); 
                  
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
                                to:JSON.stringify(stuNumber + '@tut4life.ac.za'),
                                subject:'No reply :Booking Cancellation',
                                text: ( 'You Have successfully cancelled your booking ' 
                                       +'\nLab Name : '+ labName 
                                       +'\nSlot     : ' + slot
                                       +'\nTime     : ' + time 
                                       +'\nDate     : ' + date
                                       +'\nYour booking ID is : TUTLBSSC' +bookingID
                                       +'\n\n\n You can now make a booking on a different lab or session')

                                };


                                 transporter.sendMail(mailOptions,function(error,info){

                                  if(error){
                                  console.log(error)
                                }else{
                                     //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                     console.log('Email sent ' + info.response)
                                    
                                }


                                })   
    
                }//end of else
            
              })//end of deleting
            
              
            }
          })//end of updating

             
          
    }
 

  })//end of returning results for booking ID
 
  }
else{
       response.send('booking ID not entered')
}
}


//API for lecture cancelling a booking

exports.lec_cancelBooking=async function(request, response) {

   
 
  var bookingID = request.body.bookingID
  
       
 console.log(bookingID)
  
  if(bookingID){

  connection.query('SELECT  * FROM booking WHERE User_ID =?' , [bookingID], function (error, results, fields) {

    if(results.length > 0)
    {
     

      //code for geting labName and slot and the student number
           let stringResults = JSON.stringify(results)
           this.results1 = JSON.parse(stringResults)
           let labName = this.results1[0].Lab_Name;
           let slot =this.results1[0].Lab_Slot;
           let lectureID = this.results1[0].User_ID;
           let dt = JSON.stringify(new Date);
           let date = dt.substr(1,10);

           //code for time slot
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
           console.log(labName +'   '+slot + '  ' + lectureID+ '  ' + date )

           //make space available
           connection.query('UPDATE lab SET Lab_availability =   0   WHERE Lab_Slot =? AND Lab_Name =? AND Lab_Date =?',[slot,labName,date], function(error, results, fields){ //updates and makes a booking
      
            if (error) 
            { 
                
              response.send('System currently facing a problem... Please contact the admin '); 
            }
            else
            {  

               //insert to cancelled booking table
               var booking1={

                "Lab_Name":labName,
                "Lab_Slot":slot,
                "User_ID":lectureID,          
                "date":date,
                "Booking_ID":lectureID,
       
            } ;
            
              connection.query('INSERT INTO cancelled_bookings SET ? ',[booking1], function (error, results, fields) {})



              connection.query('DELETE FROM booking WHERE User_ID = ?',[lectureID], function(error, results, fields) {
                if(error)
                {
                  response.send('System currently facing a problem... Please contact the admin');
                }
                else
                {
                  response.send('booking has been deleted'); 
                  
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
                                to:JSON.stringify(lectureID + '@tut4life.ac.za'),
                                subject:'No reply :Booking Cancellation',
                                text: ( 'You Have successfully cancelled your booking ' 
                                       +'\nLab Name : '+ labName 
                                       +'\nSlot     : ' + slot
                                       +'\nTime     : ' + time 
                                       +'\nDate     : ' + date
                                       +'\nYour booking ID is : TUTLBSSC' +bookingID
                                       +'\n\n\n You can now make a booking on a different lab or session')

                                };


                                 transporter.sendMail(mailOptions,function(error,info){

                                  if(error){
                                  console.log(error)
                                }else{
                                     //response.send("you have successfully booked for a lab check your tut4life for confirmation");
                                     console.log('Email sent ' + info.response)
                                    
                                }


                                })   
    
                }//end of else
            
              })//end of deleting
            
              
            }
          })//end of updating

             
          
    }
 

  })//end of returning results for booking ID
 
  }
else{
       response.send('booking ID not entered')
}
}