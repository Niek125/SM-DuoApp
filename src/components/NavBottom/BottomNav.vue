<template>
    <v-bottom-navigation :value="activeTab" color="green">
        <NavButton v-for="(data, index) in tabs" :name="data.name" :icon="data.icon" :key="'tab:' + index"
        v-on:click.native="redirect(data.pathName, index)"></NavButton>
    </v-bottom-navigation>
</template>

<script>
    import NavButton from "@/components/NavBottom/NavButton";

    export default {
        name: "BottomNav",
        components: {NavButton},
        methods: {
            redirect: function (path, index) {
                this.$router.push(path);
                this.activeTab = index;
            }
        },
        data() {
            return {
                activeTab: 0,
                tabs: [
                    {
                        name: "Meals",
                        icon: "mdi-food",
                        pathName: "Meals",
                    }
                ],
            }
        },
    }
</script>

<style scoped>

</style>