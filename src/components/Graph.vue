<template>
    <Bar :data="chartData" :options="chartOptions" />
    <h2 v-for="(a, i) in chartData" :key="i">
        {{ a }}
    </h2>
</template>
  
  
<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    data: [26, 19, 4, 29, 13, 2900, 39, 10, 143, 20, 6, 3, 86, 86, 12, 0, 11, 6, 40, 87, 17, 17, 50, 26, 2, 75, 37, 42,
                        714, 4, 35, 10, 18, 24, 0, 23, 32, 131, 66, 23, 3, 6, 38, 0, 4, 28, 14, 94, 37,
                        13, 9, 3, 10, 1, 38, 16, 3, 8, 4, 33, 13, 12, 27, 33, 59, 23, 4, 0, 11, 49, 20, 39, 20, 2, 0, 63, 82, 90, 5]
                }
                ]
            },
            chartOptions: {
                responsive: true,
            }
        }
    },
    async created() {

        const { data } = await axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
        console.log(data);
        this.chartData.labels.push(data[1].province)
        // this.chartData.datasets[1].data.push(data[1].new_case)
        // this.chartData.datasets.data.push(data[1].province);
        for (const i in data) {

            //     // push Api Covid-19 province 
            this.chartData.labels.push(data[i].province)
            //     // console.log(this.chartData.datasets.push(data[i].province));

            //     // this.chartData.datasets.push(data[i].data).new_case;
            //     this.chartData.values.push(data[i].new_case)


            //     // console.log(this.chartData.datasets + '1')

            //     // for (let i = 0; i < this.chartData.datasets.length; i++) {
            //     //     console.log(this.chartData.datasets[i].data)
            //     // }
        }
        // this.chartData.datasets.push({
        //     label: 'My Data',
        //     backgroundColor: '#f87979',
        // })
        // for (let i = 0; i < this.chartData.datasets.length; i++) {
        //     console.log(`Message from ${this.chartData.datasets[i]} `)
        // }

        
        // const labels = data.map(item => item.label)
        let values = data.map(item => item.new_case)
        console.log(values)
        // this.chartData.labels = labels
        this.chartData.datasets[0].data = values
    },


}
</script>

  


  