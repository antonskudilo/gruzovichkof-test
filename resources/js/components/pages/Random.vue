<template>
    <div class="container">
        <h2>Получение случайного числа</h2>
        <button @click="newRandomValue" class="btn btn-primary mb-3">Random!</button>
        <div v-if="number">
            Случайное число: {{ this.number.value }}<br>
            ID: {{ this.number.id }}<br>
            Дата и время генерации: {{ this.number.created_at| formatDate}}<br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Random",
        data() {
            return {
                number: null
            }
        },
        methods: {
            newRandomValue() {
                axios
                    .get('/api/generate')
                    .then((response) => {
                        this.number = response.data.number;
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
