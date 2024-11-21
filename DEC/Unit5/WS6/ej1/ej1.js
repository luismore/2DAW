google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Partido');
    data.addColumn('number', 'Votos');
    data.addRows([
      ['PP', 8160837],
      ['PSOE', 7821718],
      ['VOX', 3057000],
      ['SUMAR', 3044996]
    ]);

    var caract = {'title':'Resultados Elecciones Generales',
                   'width':700,
                   'height':400};

    var chart = new google.visualization.PieChart(document.getElementById('mychart1'));
    chart.draw(data, caract);
                   

}



google.charts.load('current', {'packages':['corechart', 'Bar']});

google.charts.setOnLoadCallback(drawChart2);

function drawChart2(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'Visitantes');
    data.addRows([
      ['Francia', 100000000],
      ['España', 85170000],
      ['EEUU', 66480000],
      ['Italia', 57250000]
    ]);

    var caract = {'title':'Paises Mas Turisticos',
                   'width':700,
                   'height':400};

    var chart = new google.visualization.BarChart(document.getElementById('mychart2'));
    chart.draw(data, caract);
                   

}
