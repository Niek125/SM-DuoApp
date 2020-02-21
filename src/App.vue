<template>
    <v-app>
        <v-sheet class="green lighten-1" tile width="100vw" height="100vh">
            <router-view></router-view>
        </v-sheet>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        watch: {
            '$route' (to) {
                document.title = to.meta.title || 'Meal Share'
            }
        },
    };
</script>
