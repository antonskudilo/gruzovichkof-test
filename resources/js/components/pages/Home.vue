<template>
    <div class="container">
        <h2>Тестовое задание компании "Грузовичкоф"</h2>
        Напишите REST API для генерации рандомного числа.<br>
        Каждой генерации присваивать уникальный id по которому можно получить результат генерации.<br><br>
        Должны быть доступны 2 публичных API метода:<br>
        <ul>
            <li>generate() — вывод id и сгенерированного числа;</li>
            <li>retrieve(id) — вывод сгенерированного числа и даты-времени генерации.</li>
        </ul>
        Ссылки на методы:<br>
        <ul>
            <li>generate() — /api/generate</li>
            <li>retrieve(id) — /api/retrieve/{id}</li>
        </ul>
        Ошибки, возвращаемые методом retrieve(id):<br>
        <ul>
            <li>incorrect id format — в качестве id передается строка, содержащая не только числа;</li>
            <li>not found — по указанному id число не найдено</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
