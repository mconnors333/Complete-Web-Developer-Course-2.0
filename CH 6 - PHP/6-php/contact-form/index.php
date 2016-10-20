     <?php
/*
    $emailTo = "matthew.connors333@gmail.com";

    $subject = $_POST['subject'];

    $body = $_POST["body"];

    $headers = "From: ".$_POST["userEmail"];

     if (mail($emailTo, $subject, $body, $headers)) {
        
        echo "The email was sent successfully.";
        
    } else {
        
        echo "The email could not be sent.";
        
    } 
*/
?>


<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
      
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
    <meta http-equiv="x-ua-compatible" content="ie=edge">
      <style>
          
          
       
          
          
      </style>
    <!-- Bootstrap CSS -->
      
      
      
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css" integrity="2hfp1SzUoho7/TsGGGDaFdsuuDL0LX2hnUp6VkX3CUQ2K4K+xjboZdsXyp4oUHZj" crossorigin="anonymous">
    </head>
    <body>
        
        <div class="container">
            
            <h2 class="h2">Get in Touch!</h2>
            
            <div id="error"></div>
        
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject">
                </div>
                  <div class="form-group">
                    <label for="content">What would you like to ask us?</label>
                    <textarea class="form-control" id="content" rows="5"></textarea>
                  </div>
                <button type="submit" id="submit" class="btn btn-primary">Submit</button>
            
            
            </form>
        
        
        </div>
   
        
    <!-- jQuery first, then Tether, then Bootstrap JS. -->
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossorigin="anonymous"></script>
        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossorigin="anonymous"></script>
        
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js" integrity="VjEeINv9OSwtWFLAtmc4JCtEJXXBub00gtSnszmspDLCtC0I4z4nqz7rEFbIZLLU" crossorigin="anonymous"></script>
        
            
    <script type="text/javascript">
    
    
        $("form").submit(function(e) {
            
            e.preventDefault();
            
            var error = "";
            
            if ($("#subject").val() == "") {
                
                error += "<p>The subject field is required</p>";
                
                }
        
                $("#error").html(error);
    
            
        });
    
    
        
    
    </script>
   
        
        
  </body>

    
    
</html>





