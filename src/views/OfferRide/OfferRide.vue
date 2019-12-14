<template>
    <b-container>
        <b-row align-h="end">
            <b-button type="submit" variant="info" :to="{path: '/offer-ride/add-car'}">Register Your Vehicle</b-button>
        </b-row>
        <b-row align-h="center">
            <b-col cols="5">
                <h2> Offer Ride </h2>
                
                <b-card class="card">
                    <b-row>
                        Select Your Vehicle : <b-form-select v-model="selected" :options="options"></b-form-select>
                        No.of.Seats : <b-form-input id="number" type="number" v-model="availableSeats"></b-form-input>
                        Destination : <vue-google-autocomplete
                                        id="map"
                                        classname="form-control"
                                        placeholder="Start typing"
                                        :placechanged="getAddressData"
                                    >
                                    </vue-google-autocomplete>
                        Date : <b-form-input id="time" v-model="dateSelected" type="date"></b-form-input>
                        Time Slot : <b-form-input id="time"  type="time"></b-form-input>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-button type="submit" variant="success" @click="offerRide">Offer Ride</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./offer-ride.js"></script>
<style scoped>
.card {
    opacity:0.95;
    background-color:#5cb8c9 !important;
}
</style>
