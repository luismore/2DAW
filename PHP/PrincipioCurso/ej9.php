<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
  $englishNumbers = array("One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten");

  $spanishNumbers = array("Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez");

  echo "<table border='1'>";
  echo "<tr><th>English</th><th>Spanish</th></tr>";

  for ($i = 0; $i < 10; $i++) {
    echo "<tr>";
    echo "<td>" . $englishNumbers[$i] . "</td>";
    echo "<td>" . $spanishNumbers[$i] . "</td>";
    echo "</tr>";
  }

  echo "</table>";
?>
</body>
</html>