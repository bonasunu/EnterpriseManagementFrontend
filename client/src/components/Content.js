import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const dataBar = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#003f5c',
        '#2f4b7c',
        '#665191',
        '#d45087',
        '#f95d6a',
        '#ffa600',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      // borderWidth: 1,
    },
  ],
}

const dataDoughnut = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#003f5c',
        '#2f4b7c',
        '#665191',
        '#d45087',
        '#f95d6a',
        '#ffa600',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      // borderWidth: 1,
    },
  ],
}

const dataLine = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#d45087',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const Content = () => {
  const classes = {
    wrapper: 'flex-grow overflow-y-auto overflow-x-hidden bg-orange-100 px-5',
    pageTitle: 'mt-8 ml-8 mb-1 text-gray-600 font-bold text-xl',
    dataWrapper: 'flex flex-wrap ml-5 mr-5 h-64',
    data:
      'flex-grow mr-3 ml-3 mt-5 mb-5 bg-white overflow-x-auto lg:w-1/4 sm:w-auto md:w-auto py-8 px-8 rounded-md',
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.pageTitle}>Content</h2>
      <div className={classes.dataWrapper}>
        <div className={classes.data}>
          <Bar data={dataBar} options={options} />
        </div>
        <div className={classes.data}>
          <Doughnut
            data={dataDoughnut}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className={classes.data}>
          <Line data={dataLine} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Content
