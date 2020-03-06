<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded"/>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import {MglMap} from "vue-mapbox";

    export default {
        name: "Map",
        data() {
            return {
                accessToken: "pk.eyJ1IjoibGV2aTEyNSIsImEiOiJjazdmemF0YmgwNGdoM25sMWlkdW5odHFtIn0.j7r078aeYv8NyC6k9-L-Kg",
                mapStyle: "mapbox://styles/mapbox/streets-v11",
            }
        },
        methods: {
            onMapLoaded(event) {
                this.map = event.map;
            }
        },
        created() {
            this.mapbox = Mapbox;
        },
        components: {
            MglMap
        },
    }
</script>

<style scoped>

</style>