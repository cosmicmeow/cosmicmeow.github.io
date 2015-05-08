<!DOCTYPE html>
<html>
  <head>
 <?php

        class Person {

            public $isAlive = true;
            public $firstname;
            public $lastname;
            public $age;
            
            public function __construct($firstname, $lastname, $age) {
              $this->firstname = $firstname;
              $this->lastname = $lastname;
              $this->age = $age;
            
}            
            public function greet() {
              return "Hello, my name is " . $this->firstname . " " . $this->lastname . $this->age . ". Nice to meet you! :-)  <br>";
            }
          }

          for ($i =0; $i <5; $i++){
        $me = new Person('Derptop', 'Of Address ', $i);
        

        echo $me->greet(); }
        phpinfo();

  ?>
  </head>
 </html>