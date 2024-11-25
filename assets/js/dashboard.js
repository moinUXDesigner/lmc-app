    // Chart -1  Power Supply Position Chart ==============================
   const psPosition = document.getElementById('psPosition').getContext('2d');

   // Extract data from the table (you can automate this process using JavaScript if needed)
   const psPositionLabels = ['29-10-2024', '28-10-2024', '27-10-2024']; // Dates
   const energyRequired = [219.967, 214.754, 208.700]; // Energy Required (MU)
   const energyMet = [219.967, 214.754, 208.700]; // Energy Met (MU)
   const thermal = [80.038, 81.050, 80.950]; // Thermal (MU)
   const hydel = [25.843, 26.334, 25.975]; // Hydel (MU)

   // Create the chart
   new Chart(psPosition, {
       type: 'bar',
       data: {
           labels: psPositionLabels,
           datasets: [
               {
                   label: 'Energy Required (MU)',
                   data: energyRequired,
                   borderColor: '#FF6384',
                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
                   tension: 0.3,
                   fill: true
               },
               {
                   label: 'Energy Met (MU)',
                   data: energyMet,
                   borderColor: '#36A2EB',
                   backgroundColor: 'rgba(54, 162, 235, 0.2)',
                   tension: 0.3,
                   fill: true
               },
               {
                   label: 'Thermal (MU)',
                   data: thermal,
                   borderColor: '#FFCE56',
                   backgroundColor: 'rgba(255, 206, 86, 0.2)',
                   tension: 0.3,
                   fill: true
               },
               {
                   label: 'Hydel (MU)',
                   data: hydel,
                   borderColor: '#4BC0C0',
                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
                   tension: 0.3,
                   fill: true
               }
           ]
       },
       options: {
           responsive: true,
           plugins: {
               legend: {
                   position: 'top',
               },
               title: {
                   display: true,
                   text: 'Power Position Overview'
               }
           },
           scales: {
               x: {
                   title: {
                       display: true,
                       text: 'Date'
                   }
               },
               y: {
                   title: {
                       display: true,
                       text: 'MU (Million Units)'
                   },
                   beginAtZero: true
               }
           }
       }
   });

//====================================================================



   // Chart -2  Power Supply Forecast Chart ==============================

   // Extract data from the table
    const data = [
        { date: "29-10-2024", energyRequired: 219.967 },
        { date: "28-10-2024", energyRequired: 214.754 },
        { date: "27-10-2024", energyRequired: 208.7 }
    ];

    // Prepare the data for Chart.js
    const psForecastLabels = data.map(item => item.date); // Dates as labels
    const energyRequiredData = data.map(item => item.energyRequired); // Energy Required as dataset

    // Chart configuration
    const psForecast = document.getElementById('psForecast').getContext('2d');
    const energyChart = new Chart(psForecast, {
        type: 'bar', // Type of chart
        data: {
            labels: psForecastLabels, // X-axis labels
            datasets: [{
                label: 'Energy Required (MU)',
                data: energyRequiredData, // Y-axis data
                backgroundColor: 'rgba(30, 132, 228, 0.6)', // Bar color
                borderColor: '#1E84E4', // Border color
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Energy Required Over Days'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Energy Required (MU)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
