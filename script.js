      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      let energia = 0;
      let count = 0;

      let test2 = () => {
        setInterval(() => {
          if (count < 20) {
            energia = energia + 1;
            drawChart(energia);
            count++;
          } else {
            clearInterval(test2);
            test2 = null;
            counter = 3;
          }
        }, 1000);
      };

      test2();

      function drawChart(energia) {
        var data = google.visualization.arrayToDataTable([
          ['dia', 'KW/h'],
          ['1', 12.5],
          ['2', 6.3],
          ['3',7 ],
          ['4', 15 ],
          ['5', 8],
          ['6', energia],
          
        ] );

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
   