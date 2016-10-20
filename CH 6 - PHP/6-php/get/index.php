<?php


$number = $_GET['number'];

if (is_numeric($number) && ($number > 0) && $number == round($number, 0)) {

$i = 2;
$isItPrime = true;

while ($i < $number) {
    
    if ($number % $i == 0) {
        
        $isItPrime = false;
    }
    
    $i++;
}



if ($isItPrime) {
    
    echo "Your number is prime.";
    
} else{

    echo "Your number is not prime.";
} 
} else if ($number) {
    
    echo "Please enter a positive whole number";
    
}
?>


<p>Is your number Prime?</p>

<form>
    <input name="number" type="text">
    <input type="submit" value="Go!">
</form>