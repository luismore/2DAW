<?php
$piezasBlancas = array("torreb", "caballob", "alfilb", "reinab", "reyb", "alfilb", "caballob", "torreb");
$piezasNegras = array("torren", "caballon", "alfiln", "reinan", "reyn", "alfiln", "caballon", "torren");

echo '<style>
  table {
    border-collapse: collapse;
  }

  td {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
  }

  .negra {
    background-color: #666;
  }

  .blanca {
    background-color: #fff;
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>';

echo '<table>';
for ($i = 0; $i < 8; $i++) {
  echo '<tr>';
  for ($j = 0; $j < 8; $j++) {
    $suma = $i + $j;
    if ($suma % 2 == 0) {
      echo '<td class="negra">';
    } else {
      echo '<td class="blanca">';
    }

    if ($i == 0) {
      echo '<img src="imagenes/' . $piezasNegras[$j] . '.png" alt="' . $piezasNegras[$j] . '">';
    } elseif ($i == 1) {
      echo '<img src="imagenes/peon-negro.png" alt="peon-negro">';
    } elseif ($i == 6) {
      echo '<img src="imagenes/peon-blanco.png" alt="peon-blanco">';
    } elseif ($i == 7) {
      echo '<img src="imagenes/' . $piezasBlancas[$j] . '.png" alt="' . $piezasBlancas[$j] . '">';
    }

    echo '</td>';
  }
  echo '</tr>';
}
echo '</table>';
?>