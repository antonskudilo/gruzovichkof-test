<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">Home</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'random' }" active-class="active">Random</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'retrieve' }" active-class="active">Retrieve</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'list' }" active-class="active">List</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
    }
</script>

<style scoped>
    a:hover {
        cursor: pointer;
    }
</style>
