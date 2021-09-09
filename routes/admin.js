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
       
            } 
            connection.query('INSERT INTO lab SET ?',[lab_records], function (error, results, fields) {
              if (error) {
               
                response.send('there are some error with query');
                
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


//this APi will reseve an available lab for other purpose


exports.ReserveLab =async function(request, response) {

  
   
  var labName = request.body.labName;
  var slot = request.body.slot;
  var capacity = request.body.capacity;
  var avail = 0;
  var date = request.body.date;
  
  
  if(labName && slot && capacity && date ){
  
    connection.query('DELETE  FROM lab where Lab_Name =?  AND Lab_Slot =? AND Lab_Date =? ' , [labName,slot,date], function (error, results, fields) {
      if (error) {

        response.send('error running the query')

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
        response.send('error running the query');
      }
      else{
        response.send('The student is successfully deleted');
      }

  })

}
