<template>
    <b-container>
        <b-row align-h="end">
            <b-button type="submit" variant="outline-info" :to="{path: '/offer-ride/add-car'}">Register Your Car</b-button>
        </b-row>
        <b-row align-h="center">
            <b-col cols="5">
                <h2> Offer a Ride </h2>
                
                <b-card style="opacity:0.9">
                    <b-row>
                        Select Your Car : <b-form-select v-model="selected" :options="options"></b-form-select>
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
                        <b-button type="submit" variant="outline-success" @click="offerRide">Offer Ride</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./offer-ride.js"></script>