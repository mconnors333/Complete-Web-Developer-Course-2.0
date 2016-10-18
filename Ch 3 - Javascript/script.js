 // Variables
            
            var reactionTime;
            var interval = Math.floor(Math.random() * 2001);
            var createdTime = new Date().getTime();
            
            
            // function to make a box
            
            function makeShape() {
                
                var shape = Math.floor(Math.random() * 51);
                var size = Math.floor(Math.random() * 151) + 50;
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                var xPosition = Math.floor(Math.random() * 751);
                var yPosition = Math.floor(Math.random() * 301);
                interval = Math.floor(Math.random() * 2001);
                
                createdTime = new Date().getTime();
                document.getElementById("shape").style.height = size;
                document.getElementById("shape").style.width = size;
                document.getElementById("shape").style.borderRadius = shape + "%";
                document.getElementById("shape").style.backgroundColor = "RGB(" + r + "," + g + "," + b + ")";
                document.getElementById("shape").style.marginLeft = xPosition;
                document.getElementById("shape").style.marginTop = yPosition
                document.getElementById("shape").style.opacity = "1";
                
            }
            
            // function to make the box disappear
            function disappear() {
                
                document.getElementById("shape").style.opacity = "0";
                
            }
      
            // function to display the reaction time.
            function displayTime() {
                
                document.getElementById("yourTime").innerHTML = " " + reactionTime + " seconds";
                
            }
            
            
            
            // when the shape is clicked
            document.getElementById("shape").onclick = function() {
                
                var clickedTime = new Date().getTime();
                
                disappear();
                reactionTime = (clickedTime - createdTime)/1000;
                
                displayTime();
                
                setTimeout(makeShape, interval);
                createdTime = new Date().getTime();
            }
           
            setTimeout(makeShape, interval);