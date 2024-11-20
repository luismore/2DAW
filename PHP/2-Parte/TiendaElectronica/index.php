<?php
// Configuración de conexión PDO

$dsn = 'mysql:host=localhost;dbname=mistiendas;charset=utf8';
$username = 'root';
$password = '';



try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtener productos
    $stmt = $pdo->query("SELECT cod, nombre_corto FROM productos");
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Procesar selección de producto
    $stockInfo = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['producto'])) {
        $productoCod = $_POST['producto'];
        $stmt = $pdo->prepare(
            "SELECT tiendas.nombre, stock.unidades 
            FROM tiendas 
            INNER JOIN stock ON tiendas.cod = stock.tienda 
            WHERE stock.producto = :producto"
        );
        $stmt->execute(['producto' => $productoCod]);
        $stockInfo = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
} catch (PDOException $e) {
    die("Error en la conexión: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Productos y Stock</title>
</head>
<body>
    <h1>Selecciona un Producto</h1>
    <form method="POST">
        <label for="producto">Producto:</label>
        <select name="producto" id="producto">
            <?php foreach ($productos as $producto): ?>
                <option value="<?= htmlspecialchars($producto['cod']) ?>">
                    <?= htmlspecialchars($producto['nombre_corto']) ?>
                </option>
            <?php endforeach; ?>
        </select>
        <button type="submit">Consultar Stock</button>
    </form>

    <?php if (!empty($stockInfo)): ?>
        <h2>Stock por Tienda</h2>
        <table border="1">
            <tr>
                <th>Tienda</th>
                <th>Unidades</th>
            </tr>
            <?php foreach ($stockInfo as $stock): ?>
                <tr>
                    <td><?= htmlspecialchars($stock['nombre']) ?></td>
                    <td><?= htmlspecialchars($stock['unidades']) ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>
</body>
</html>
