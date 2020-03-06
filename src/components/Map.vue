<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
        <MglMarker :coordinates="coordinates">
            <MglPopup>
                <h1> Hello there</h1>
            </MglPopup>
        </MglMarker>
    </MglMap>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import {MglMap, MglMarker, MglPopup} from "vue-mapbox";

    export default {
        name: "Map",
        data() {
            return {
                accessToken: "pk.eyJ1IjoibGV2aTEyNSIsImEiOiJjazdmemF0YmgwNGdoM25sMWlkdW5odHFtIn0.j7r078aeYv8NyC6k9-L-Kg",
                mapStyle: "mapbox://styles/mapbox/streets-v11",
                coordinates: [-111.549668, 39.014]
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
            MglMap,
            MglMarker,
            MglPopup,
        },
    }
</script>

<style scoped>

</style>