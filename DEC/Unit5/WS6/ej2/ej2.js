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

    var chart = new google.visualization.BarChart(document.getElementById('mychart1'));
    chart.draw(data, caract);
                   

}



setTimeout(()=>{


    google.charts.load('current', {'packages':['corechart', 'Bar']});

    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2(){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Pais');
        data.addColumn('number', 'Visitantes');
        data.addRows([
        ['Turquia', 55160000],
        ['Mexico', 41950000],
        ['Reino Unido', 37220000],
        ['Alemania', 34800000]
        ]);

        var caract = {'title':'Paises Mas Turisticos',
                    'width':700,
                    'height':400};

        var chart = new google.visualization.BarChart(document.getElementById('mychart1'));
        chart.draw(data, caract);
                    

    }
},10000)



