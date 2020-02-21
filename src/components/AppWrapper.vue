<template>
    <v-sheet height="100vh" width="100vw" class="transparent" tile>
        <v-sheet tile height="calc(100vh - 56px)" class="transparent">
            <router-view></router-view>
        </v-sheet>
        <BottomNav></BottomNav>
    </v-sheet>
</template>

<script>
    import BottomNav from "@/components/NavBottom/BottomNav";

    export default {
        name: "AppWrapper",
        components: {BottomNav}
    }
</script>

<style scoped>

</style>