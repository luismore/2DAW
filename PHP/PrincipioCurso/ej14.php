<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
echo "<table border='1'>";
echo "<tr><th>Decimal</th><th>Binario</th><th>Octal</th><th>Hexadecimal</th></tr>";
for ($i = 0; $i < 20; $i ++) {
    printf("<tr><td>%d</td><td>%b</td><td>%o</td><td>%x</td></tr>", $i, $i, $i, $i);
}
echo "</table>";
?>
</body>
</html>