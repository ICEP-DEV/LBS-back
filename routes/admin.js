var connection = require('../conn/conn');
const express = require('express');
const e = require('express');



//API For Publishing a lab Schedule

exports.lab_Schedule =async function(request, response) {

      
    var labName = request.body.labName;
    var slot = request.body.slot;
    var capacity = request.body.capacity;
    var avail = 0;
    var date = request.body.date;
    let time = " "
    var userlab =request.body.userlab;
    let desc = ""
    let status = "Confirmed"

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
    


      //else if statement for lab desc
      if (labName == "10-120"){
       
        desc = "software development lab"

      }
      else if(labName == "10-240"){
        desc = "multimedia lab"
      }
      else if(labName == "10-140"){
        
        desc = "IIS lab"
      }
      else if(labName == "10-138")
      {
       

        desc = "business analysis lab"

      }
      else if(labName == "10-L41")
      {
       

        desc = "business analysis lab"

      }
      else if(labName == "10-G06")
      {
       

        desc = "Software Development"

      }
      else if(labName == "10-G10")
      {
       

        desc = "First year"

      }
      else if(labName == "10-G48")
      {
       

        desc = "Multi Media"

      }
     
    
    
    if(labName && slot && capacity && date ){
         
       
        connection.query('SELECT * FROM lab WHERE Lab_Name =? AND Lab_Slot =? AND Lab_Capacity =? AND Lab_Date =?',[labName,slot,capacity,date], function (error, results, fields) {

        if(results.length > 0){
    
            response.send('You have already made this lab available to users' );
           }
           else
           {
            var lab_records={
    
                "Lab_Name":labName,
                "Lab_Slot":slot,
                        
                "Lab_Capacity":capacity,
                "Lab_availability":avail, 
                "Lab_Date":date,
                "time":time,
                "users":userlab,
                "descr":desc,
                "status":status,
       
            } 
            connection.query('INSERT INTO lab SET ?',[lab_records], function (error, results, fields) {
              if (error) {
               
                response.send('System currently facing a problem... Please contact the admin');
                
              }else{
                
                response.send('lab is now available for booking on this date ' + date );
                
              }
            });//end of inserting data

           }
        



        } ) 
       

    }
    else{
        response.send('Please enter values');	  
    }







}

//This Api will update the lab status if its confirmed or cancelled for user availability


exports.updateLabStatus =async function(request, response) {

  let lab = request.body.Lab_ID;
  let sta = "Cancelled"  
  connection.query('UPDATE lab SET status =? WHERE Lab_ID =?',[sta,lab], function(error, results, fields){ //updates and makes a booking
      
    if (error) 
    { 
        response.send('System currently facing a problem... Please contact the admin');
    }
    else{

       
       
       // notify  users that made that booking that it is cancelled
       connection.query('Select * From lab Where Lab_ID =?',[lab], function(error, results, fields)
       {

        //getting lab details
        if(results.length > 0)
        {
         
    
          //code for geting labName and slot and the student number
               let stringResults = JSON.stringify(results)
               this.results1 = JSON.parse(stringResults)
               let labName = this.results1[0].Lab_Name;
               let slot =this.results1[0].Lab_Slot;
               let dt = JSON.stringify(new Date);
               let date = dt.substr(1,10);
               let message = "Dear Users Please Note That Lab " + labName+" Slot " + slot+ " on this date "+ date+" is cancelled";

          //send notification to let user that made that booking Know that it is cancelled

         
             
            var new_lecture={
    
              "Notification":message,
              "Notification_Date":date,
 
     
             } 
          connection.query('INSERT INTO notifications SET ?',[new_lecture], function (error, results, fields) {
            if (error) {}
            else
            {
              response.send("Schedule Cancelled")
            }
    
            })


          }//end of if

          })//end of getting lab details

       }//end of else for updating
  }) //end of updating


}

//this APi will reserve an available lab for other purpose


exports.ReserveLab =async function(request, response) {

  
   
  var labName = request.body.labName;
  var slot = request.body.slot;
  var capacity = request.body.capacity;
  var avail = 0;
  var date = request.body.date;
  
  
  if(labName && slot && capacity && date ){
  
    connection.query('DELETE  FROM lab where Lab_Name =?  AND Lab_Slot =? AND Lab_Date =? ' , [labName,slot,date], function (error, results, fields) {
      if (error) {

        response.send('System currently facing a problem... Please contact the admin')

      }else{
      
     
       response.send('you have successfully reserved this lab '+ labName + ' on this date ' + date) 
      
      }
    })
  
  
  }

}


//API for retrieving students
exports.studentsList =async function(request, response) { 
    

  connection.query('select * from student', function(error, results, fields) {
      if (results.length > 0)
      { 
          response.send(results);
      }
      else{
        response.send('No students are registered to book the lab');	  
      }
  })

}



//API for retrieving lecturers
exports.LecturersList =async function(request, response) { 

  connection.query('select * from lecture', function(error, results, fields) {
      if (results.length > 0)
      { 
          response.send(results);
      }
      else{
        response.send('No lecturers are registered to book the lab');	  
      }
  })
}


exports.DeleteStudent =async function(request, response) { 

 
  
  
  var stuNumber = request.body.stuNumber;
  console.log(stuNumber);

  connection.query('DELETE FROM student WHERE stud_no = ?',[stuNumber], function(error, results, fields) {
      if(error)
      {
        response.send('System currently facing a problem... Please contact the admin');
      }
      else{
        response.send('The student is successfully deleted');
      }

  })

}

exports.DeleteLecturer =async function(request, response) { 

  var lecturerID = request.body.lecturerID;
  console.log(lecturerID);

  connection.query('DELETE FROM lecture WHERE lec_id = ?',[lecturerID], function(error, results, fields) {
      if(error)
      {
        response.send('System currently facing a problem... Please contact the admin');
      }
      else{
        response.send('The lecturer is successfully deleted');
      }

  })

}

exports.bookings = async function(request , response)
{
  connection.query('SELECT * FROM booking', function(error, results, fields)
  {
    if(results.length > 0)
    {
      response.send(results);
      
    }
    else{
      response.send('No bookings available');
    }
  })
}




//APi for sending admin notifications
exports.notification = async function (request, response)
{ let dt = JSON.stringify(new Date)
  let date = dt.substr(1,10)
  
  
  var notification_Date = date;
  var notification_message = request.body.Notification;




  if(notification_Date && notification_message ){
         
       
    connection.query('SELECT * FROM notifications WHERE Notification_Date  =? AND Notification =?',[notification_Date, notification_message], function (error, results, fields) {

    if(results.length > 0){

        response.send('Notification sent successfully' );
       }
       else
       {
        var notification_records={

          

           
            "Notification_Date":notification_Date,
                    
            "Notification":notification_message
        
   
        } 
        connection.query('INSERT INTO notifications SET ?',[notification_records], function (error, results, fields) {
          if (error) {
           
            response.send('System currently facing a problem... Please contact the admin');
            
          }else{
            
            response.send('Notification successfully sent on this date: ' + date );
            //insert to notification record
            connection.query('INSERT INTO notification_record SET ?',[notification_records], function (error, results, fields) {})
            
          }
        });//end of inserting data

       }
    



    } ) 
   

}
else{
    response.send('Please enter values');	  
}





}



//API for getting admin notifications



exports.get_notification = async function(request, response){


  
  
    connection.query('SELECT * FROM notifications ', function (error, results, fields) {
      if (results.length > 0) {

        response.send(results);

      }else{
      
     
       response.send('No results found '); 
      
      }
    })
  
  
 

}


//APi for viewing Schedule
exports.viewSchedule = async function(request, response){

   
  connection.query('SELECT * FROM lab ', function (error, results, fields) {
    
    if (error) {

      response.send('No Schedule Published'); 

    }else{
    
      response.send(results);
     
    
    }
  })
   




}





exports.deleteNotification =async function(request, response) { 

  let notID = request.body.Notification_ID;
  console.log(notID);

  connection.query('DELETE FROM notifications WHERE Notification_ID = ?',[notID], function(error, results, fields) {
      if(error)
      {
        response.send('System currently facing a problem... Please contact the admin');
      }
      else{
        response.send('Notification successfully deleted');
      }

  })

}