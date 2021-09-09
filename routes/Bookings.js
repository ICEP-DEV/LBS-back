
var connection = require('../conn/conn');
const express = require('express');
const e = require('express');




// API for listing available labs
exports.available =async function(request, response) 
{

   
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    let time = dt.substr(12,2);

    let currentTime = time;

   
    connection.query('SELECT * FROM lab WHERE Lab_Date = ? ',[date], function(error, results, fields)  
      {
          if(results.length > 0){
            if (currentTime >= 9  && currentTime < 10) //session starts at 8 the system should make sure that after 9 it has been removed (slot A)
            {
                
           
              var slot = 'A';
        
               //update availability since slot time is over
                connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =?  AND Lab_Date =?',[slot,date], function(error, results, fields)  
                {
                
                    if (error) 
                    { 
                        response.send('there are some error with query');
                    }
                    else{
                          connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                   
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
        else  if (currentTime >= 10 && currentTime < 11 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'B';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
            else  if (currentTime >= 11 && currentTime < 12 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'C';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
            else  if (currentTime >= 12 && currentTime < 13 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'D';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
            else  if (currentTime >= 13 && currentTime < 14 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'E';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
            else  if (currentTime >= 14 && currentTime < 15 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'F';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
            else  if (currentTime >= 16 && currentTime < 17 )//session starts at 9 the system should make sure that after 10 it has been removed (slot B)
            {
        
                var slot = 'G';
        
                //update availability since slot time is over
                 connection.query('UPDATE lab SET Lab_availability =  Lab_Capacity + 1  WHERE Lab_Slot =? AND Lab_Date =?',[slot,date], function(error, results, fields)  
                 {
                 
                     if (error) 
                     { 
                         response.send('there are some error with query');
                     }
                     else{
                           connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields)  {
                    
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
        
                connection.query('SELECT Lab_Name, Lab_Slot FROM lab WHERE Lab_availability  < Lab_Capacity AND Lab_Date =?',[date], function(error, results, fields) 
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






//API for making a booking

exports.labBooking=async function(request, response) 
{
    
    var stuNumber = request.body.stuNumber;
    var labAndSlot = request.body.labAndSlot;
    let dt = JSON.stringify(new Date)
    let date = dt.substr(1,10)
    
    
    console.log(stuNumber)
    console.log(labAndSlot);


    if(stuNumber && labAndSlot)
    {
        var labName = labAndSlot.substr(0,6);
        var slot = labAndSlot.substr(16,1);
        var text = stuNumber;

       // response.send(labName + " "+slot )
        //response.send(text)
       

      
        

       

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
                             
                              response.send('there are some error with query');
                              
                            }else
                            {
                            
                              connection.query('UPDATE booking SET Stud_ID = ?,Num_Bookings = Num_Bookings + 1 WHERE Stud_ID =?', [stuNumber,stuNumber],function (error, results, fields){
                  
                                connection.query('UPDATE lab SET Lab_availability =  Lab_availability + 1  WHERE Lab_Slot =? AND Lab_Name =?',[slot,labName], function(error, results, fields){ //updates and makes a booking
      
                                  if (error) 
                                  { 
                                      response.send('there are some error with query');
                                  }
                                  else{

                           
                                        response.send("you have successfully booked for a lab");
                                        
                                  }
      
                                })// end of query for updation availability 
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
    console.log(stuNumber)

    connection.query('SELECT * FROM booking Where Stud_ID =?',[stuNumber], function (error, results, fields) {
        if (error) {
         
          response.send('there are some error with query');
          
        }else{
          
          response.send(results);
          
        }
      });
   


}


//APi for cancelling a bookng
exports.cancelBooking=async function(request, response) {


 
  var labName = request.body.labName;
  var slot = request.body.slot;
  var stuNumber = request.body.stuNumber;
  let dt = JSON.stringify(new Date)
  let date = dt.substr(1,10)
   
  console.log(labName);
  console.log(slot);
  console.log(stuNumber)
  console.log(date)





  connection.query('DELETE  FROM booking where date=?  AND Lab_Name =? AND Lab_Slot =? AND Stud_ID' , [date,labName,slot,stuNumber], function (error, results, fields) {
	  if (error) {}else{
	  
   
    connection.query('UPDATE lab SET Lab_availability =  Lab_availability -1   WHERE Lab_Slot =? AND Lab_Name =? AND date =?',[slot,labName,date], function(error, results, fields){ //updates and makes a booking

      if (error) 
      { 
          response.send('there are some error with query');
      }
      else{
        connection.query('UPDATE booking SET MAX(Num_Bookings) = MAX(Num_Bookings) -1 WHERE date=?  AND Lab_Name =? AND Lab_Slot =? AND Stud_ID' , [date,labName,slot,stuNumber], function (error, results, fields)
            {
            if(error)
            {
              response.send('problems with query');
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