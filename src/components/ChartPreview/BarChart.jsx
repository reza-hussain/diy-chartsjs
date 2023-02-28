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
    datasets: barChart.datasets.map((set) => {
      return{
        label: set.name,
        data: labels.map(() => Math.random() * 100),
        backgroundColor: `#${set.color}`,
        pointStyle: set.shape === "circle" ? "circle" : "rectRounded",
      }
    },)
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
        borderRadius: 20,
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'center',
  
        labels: {
          usePointStyle: true
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