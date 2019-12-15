<template>
    <b-container>
        <b-row align-h="center">
            <b-col cols="5">
                <h2> Find a Ride </h2>
                <b-card class ="card">
                    <b-row>
                        <!-- Pick up : <vue-google-autocomplete
                                    id="from_location"
                                    :country="['in']"
                                    classname="form-control"
                                    placeholder="Start typing"
                                    v-on:placechanged="fromAddress"
                                >
                                </vue-google-autocomplete> -->
                        Pick Up : <b-input v-model="pickUp"></b-input>
                        Destination : <vue-google-autocomplete
                                    id="to_location"
                                    :country="['in']"
                                    classname="form-control"
                                    placeholder="Enter your Destination"
                                    v-on:placechanged="toAddress"
                                >
                                </vue-google-autocomplete>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-button type="submit" variant="success">Search</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./find-ride.js"></script>
<style scoped>
.card {
    opacity:0.8;
    background-color:#5cb8c9 !important;
}
</style>