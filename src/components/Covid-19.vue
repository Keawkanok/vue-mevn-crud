<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            Covid-19
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>เวลา/วัน/เดือน/ปี</th>
                                <th>จำนวนสัปดาห์</th>
                                <th>จังหวัด</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in covid" :key="list._id">
                                <td>{{ list.update_date }}</td>
                                <td>{{ list.weeknum }}</td>
                                <td>{{ list.province }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {

    data() {
        return {
            covid: []
        }
    },
    async created() {
        let apiURL = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';
        axios.get(apiURL).then(res => {
            this.covid = res.data
            console.log(res.data)
        }).catch(error => {
            console.log(error);
        })
    },
}
</script>