<template>
    <div>
        <h2>Список полученных чисел</h2>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Значение</th>
                <th scope="col">Дата и время генерации</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="loading">
                <tr>
                    <td colspan="3" class="text-center">
                        Загрузка...
                    </td>
                </tr>
            </template>
            <template v-if="!loading && !numbers.length">
                <tr>
                    <td colspan="3" class="text-center">
                        Нет чисел
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="number in numbers" :key="number.id">
                    <td>{{ number.id }}</td>
                    <td>{{ number.value }}</td>
                    <td>{{ number.created_at | formatDate }}</td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                numbers: [],
                loading: true
            }
        },
        mounted() {
            this.getNumbers();
        },
        methods: {
            getNumbers() {
                axios
                    .get('/api/list/')
                    .then((response) => {
                        this.loading = false;
                        this.numbers = response.data.numbers;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
