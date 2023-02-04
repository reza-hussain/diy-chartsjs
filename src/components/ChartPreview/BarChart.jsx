import { useStateValue } from "@/context/StateProvider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart = () => {

  const [{barChart}, dispatch] = useStateValue()

  const labels = barChart.labels;

  const data = {
  
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random()),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random()),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  
  const options = {
    responsive: true,
    interaction:{
      mode: 'point',
      includeInvisible: true
    },
    elements:{
      bar:{
        borderColor: "",
        borderWidth: "",
        borderRadius: "",
        inflateAmount: 10,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'center',
  
        labels: {
          
        }
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  return (
    <div className="w-full h-full">
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart