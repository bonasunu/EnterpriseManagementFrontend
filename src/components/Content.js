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
    wrapper: 'flex-grow overflow-x-auto bg-orange-100',
    pageTitle: 'mt-8 ml-8 mb-1 text-gray-600 font-bold text-xl',
    dataWrapper:
      'flex flex-wrap ml-8 mr-8 h-64 sm:h-auto md:h-auto lg:h-64 xl:h-64',
    data:
      'flex-grow mr-5 mt-5 mb-3 bg-white overflow-x-auto h-64 lg:w-1/4 sm:w-auto sm:h-auto md:w-auto py-8 px-5 sm:px-2 lg:px-5 xl:px-5 rounded-md',
    table: 'table-auto w-full',
    tableData: 'border px-4 py-2',
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
        <div className={classes.data}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.tableData}>Project</th>
                <th className={classes.tableData}>Developer</th>
                <th className={classes.tableData}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
              <tr>
                <td className={classes.tableData}>Frontend</td>
                <td className={classes.tableData}>John Doe</td>
                <td className={classes.tableData}>On progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Content
