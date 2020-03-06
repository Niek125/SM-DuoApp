<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
        <MglMarker :coordinates="coordinates" color="green">
            <MglPopup :closeButton="false" :offset="{
                'top': [0, 0],
                 'top-left': [0,0],
                  'top-right': [0,0],
                   'bottom': [0, -markerHeight],
                    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                     'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                      'left': [markerRadius, (markerHeight - markerRadius) * -1],
                       'right': [-markerRadius, (markerHeight - markerRadius) * -1]
            }">
                <v-card class="green lighten-1">
                    <v-card-text>I'm food</v-card-text>
                </v-card>
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
                coordinates: [20.549668, -5.014],
                markerHeight: 23,
                markerRadius: 10,
                linearOffset: 0,
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

<style>
    .mapboxgl-popup-content {
        padding: 0px !important;
    }

    .mapboxgl-popup-tip {
        display: none;
    }
</style>

<style scoped>

</style>