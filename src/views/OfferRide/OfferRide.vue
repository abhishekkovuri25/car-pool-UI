<template>
    <b-container>
        <b-row align-h="end">
            <b-button type="submit" variant="secondary">Register Your Car</b-button>
        </b-row>
        <b-row align-h="center">
            <b-col cols="5">
                <h2> Offer a Ride </h2>
                
                <b-card>
                    <b-row>
                        Select Your Car : <b-form-select v-model="selected" :options="options"></b-form-select>
                        No.of.Seats : <b-form-input id="number" type="number" v-model="availableSeats"></b-form-input>
                        Destination : <b-form-select v-model="destinationSelected" :options="options"></b-form-select>
                        Date : <b-form-input id="time" type="date"></b-form-input>
                        Time Slot : <b-form-input id="time" type="time"></b-form-input>
                    </b-row>
                    <b-row>
                        <b-button type="submit" variant="primary">Offer Ride</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<style scoped>
</style>