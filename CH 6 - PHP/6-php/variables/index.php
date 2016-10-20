





<?php

// Variables

    $name = "Matt";

    echo "<p>My name is $name</p>";

    
    $string1 = "<p>This is the first part";
    $string2 = "of a sentence</p>";

    echo $string1." ".$string2;
    
    $myNumber = 45;

    $calculation = $myNumber * 31 / 97 + 4;

    echo "The result of the calculation is ".$calculation;

// Booleans

$myBool = false;

echo "<p>This statement is true? ".$myBool."</p>";
    
$variableName = "name";

echo "<p>".$$variableName."</p>"; 


// Arrays

$myArray = array("Matt", "Taylor", "Rucker", "Jesse");

$myArray[] = "Mom";

echo "<p>".$myArray."</p>";

print_r($myArray);

echo "<p>I love $myArray[1]</p>";

$anotherArray[0] = "pizza";
$anotherArray[1] = "yogurt";
$anotherArray[5] = "coffee";
$anotherArray["myfavoriteFood"] = "ice cream";

print_r($anotherArray);

echo "<br><br>";

$thirdArray = array(
    "France" => "French", 
    "USA" => "English", 
    "Germany" => "German");

unset($thirdArray["France"]);

print_r($thirdArray);

echo "<br><br>";

echo sizeof($thirdArray);

echo "<br><br>";



// If/Else statements


$user = "matt";

if ($user == "matt") {
    
    echo "Hello matt!";
    
    
} else {
    
    echo "Your not matt, go away!";
    
}

echo "<br><br>";

$age = 28;

if ($age >= 18 && $user == "matt") {
    
    echo "drop trous and join on in!";
    
} else {
    
    echo "You are not old enough. Please leave.";
    
}

echo "<br><br>";


// LOOPS WOOHOO


for ($i = 10; $i >= 0; $i--) {
    
    echo "<p>".$i."</p>";
    
}


// Looping through an array


$family = array("Matt", "Taylor", "Rucker", "Jesse");


// FOR EACH loop


foreach ($family as $key => $value) {
    
    $family[$key] = $value." Connors";
    
    echo "Array item ".$key." is ".$value."<br>";
    
}




for ($i = 0; $i < sizeof($family); $i++) {
    
    echo "<p>".$family[$i]."</p>";
    
}


// while loops 

$x = 0;

while ($x < 11) {
    
    $answer = $x * 5;
    
    echo "5 x $x = ".$answer."<br>";
    
    $x++;
    
}


$videoGames = array("Earthbound", "Zelda", "Halo", "Elder Scrolls");

$m = 0;

while ($m < sizeof($videoGames)) {
    
    echo $videoGames[$m]."<br>";
    
    $m++;
}























    
?>