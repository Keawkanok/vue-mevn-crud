<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            Show Student
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in Student" :key="student._id">
                                <td>{{ student.name }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.phon }}</td>
                                <td>
                                    <router-link :to="{ name: 'edit', params: { id: student._id } }"
                                        class="btn btn-success"> Edit </router-link>
                                    <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger"> Delete
                                    </button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Student: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Student = res.data
            console.log(res.data)
        }).catch(error => {
            console.log(error);
        })
    },
    methods: {
        deleteStudent(id) {
            let apiURL = `http://localhost:4000/api/delete-student/${id}`;
            let indexOfArrayItem = this.Student.findIndex(i => i._id === id);
            if (window.confirm("Delete OK?")) {
                axios.delete(apiURL).then(() => {
                    this.Student.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
}
</script>