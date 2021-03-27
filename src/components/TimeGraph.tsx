import { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

const TimeGraph = ({ dataCreada }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      data: {
        datasets: [
          {
            label: 'CHRT - Chart.js Corporation',
            backgroundColor: '#A2DA70',
            borderColor: '#A2DA70',
            data: dataCreada,
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        animation: {
          duration: 0,
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              offset: true,
              ticks: {
                major: {
                  enabled: true,
                  fontStyle: 'bold',
                },
                source: 'data',
                autoSkip: true,
                autoSkipPadding: 75,
                maxRotation: 0,
                sampleSize: 100,
              },
              afterBuildTicks: function (scale, ticks: any) {
                var majorUnit = scale._majorUnit;
                var firstTick = ticks[0];
                var i, ilen, val, tick, currMajor, lastMajor;

                val = moment(ticks[0].value);
                if (
                  (majorUnit === 'minute' && val.second() === 0) ||
                  (majorUnit === 'hour' && val.minute() === 0) ||
                  (majorUnit === 'day' && val.hour() === 9) ||
                  (majorUnit === 'month' &&
                    val.date() <= 3 &&
                    val.isoWeekday() === 1) ||
                  (majorUnit === 'year' && val.month() === 0)
                ) {
                  firstTick.major = true;
                } else {
                  firstTick.major = false;
                }
                lastMajor = val.get(majorUnit);

                for (i = 1, ilen = ticks.length; i < ilen; i++) {
                  tick = ticks[i];
                  val = moment(tick.value);
                  currMajor = val.get(majorUnit);
                  tick.major = currMajor !== lastMajor;
                  lastMajor = currMajor;
                }
                return ticks;
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: 'Closing price ($)',
              },
            },
          ],
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          callbacks: {
            label: function (tooltipItem, myData) {
              var label =
                (myData &&
                  myData.datasets &&
                  myData.datasets[tooltipItem.datasetIndex ?? 0].label) ??
                '';
              if (label) {
                label += ': ';
              }
              label += parseFloat(tooltipItem.value ?? '').toFixed(2);
              return label;
            },
          },
        },
      },
    });
  }, [chartRef, dataCreada]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default TimeGraph;
