var connection = require('../conn/conn');
//const express = require('express');

exports.updatePassword =async function(request, response) 
{ 
    var stuNumber = request.body.stuNumber;
    var password = request.body.password;
    var newPassword = request.body.newPassword;
    var confirmPassword = request.body.confirmPassword;
    
    console.log(stuNumber);
    console.log(password);
    console.log(newPassword);
    console.log(confirmPassword);
    
    
    if (stuNumber && password && newPassword && confirmPassword )
    { 
        connection.query('SELECT password FROM student where stud_no = ? And password =?', [stuNumber,password], function(error, results, fields)
        {
            if (results.length > 0)
            {
            
                    if(password == newPassword)
                    {
                        response.send('The old and new password are the same!');
                    }
                    else
                    {
                        if(newPassword != confirmPassword)
                        {
                            response.send('password does not match!');
                        }
                        else
                        {
                            connection.query('UPDATE student SET password = ? , confirm = ? WHERE stud_no =?',[newPassword,confirmPassword,stuNumber], function(error, results, fields)
                            { 
                                if (error)
                                { 
                                    response.send('System currently facing a problem... Please contact the admin');
                                }
                                else
                                {  
                                    response.send('password successfully updated');
                                }
                            })
                        }
                    }
            }else{
                response.send('incorrect old password');
            }
        })
    }
    else
    {
        response.send('Please enter values');	
    }
}




exports.profileDetails =async function(request, response) {

    var stuNumber = request.body.stuNumber;
    console.log(stuNumber); 

    //fetch data from the student table
    connection.query('SELECT * FROM student where stud_no =?',[stuNumber], function(error, results, fields) {
        if (results.length > 0)
        { 
            response.send(results);
        }
    });
}

//lecture update password

exports.lec_updatePassword=async function(request, response) 
{ 
    var lecNumber = request.body.lec_id;
    var password = request.body.password;
    var newPassword = request.body.newPassword;
    var confirmPassword = request.body.confirmPassword;
    
    console.log(lecNumber);
    console.log(password);
    console.log(newPassword);
    console.log(confirmPassword);
    
    
    if (lecNumber && password && newPassword && confirmPassword )
    { 
        connection.query('SELECT password FROM lecture where lec_id= ? And password =?', [lecNumber,password], function(error, results, fields)
        {
            if (results.length > 0)
            {
            
                    if(password == newPassword)
                    {
                        response.send('The old and new password are the same!');
                    }
                    else
                    {
                        if(newPassword != confirmPassword)
                        {
                            response.send('password does not match!');
                        }
                        else
                        {
                            connection.query('UPDATE lecture SET password = ? , confirm = ? WHERE lec_id =?',[newPassword,confirmPassword,lecNumber], function(error, results, fields)
                            { 
                                if (error)
                                { 
                                    response.send('System currently facing a problem... Please contact the admin');
                                }
                                else
                                {  
                                    response.send('password successfully updated');
                                }
                            })
                        }
                    }
            }else{
                response.send('incorrect old password');
            }
        })
    }
    else
    {
        response.send('Please enter values');	
    }
}
