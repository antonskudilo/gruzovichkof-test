<template>
    <div class="container">
        <form @submit.prevent="findValue" class="mb-3">
            <div class="form-group">
                <label for="InputID">Введите ID</label>
                <input type="number" class="form-control" id="InputID" v-model="id">
            </div>
            <button type="submit" class="btn btn-primary" :disabled="!id">Найти</button>
        </form>
        <div v-if="number">
            Случайное число: {{ this.number.value }}<br>
            ID: {{ this.number.id }}<br>
            Дата и время генерации: {{ this.number.created_at| formatDate}}<br>
        </div>
        <div v-if="error" style="color: red">
            По указанному ID число не найдено
        </div>
    </div>
</template>

<script>
    export default {
        name: "Retrieve",
        data() {
            return {
                number: null,
                id: null,
                error: false
            }
        },
        methods: {
            findValue() {
                axios
                    .get('/api/retrieve/' + this.id)
                    .then((response) => {
                        if (response.data.error) {
                            this.number = null;
                            this.error = true
                        } else if (response.data.number) {
                            this.error = false;
                            this.number = response.data.number;
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
