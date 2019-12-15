    <template>
    <b-container>
        <b-row align-h="end">
            <b-button type="submit" variant="info" :to="{path: '/offer-ride/add-car'}">Register Your Vehicle</b-button>
        </b-row>
        <b-row align-h="center">
            <b-col cols="6">
                <b-row align-h="center">
                    <h2>Offer Ride</h2>
                </b-row>
                <b-card class="card">
                    <b-row>
                        Select Your Vehicle : <b-form-select v-model="selectedVehicle" :options="vehicles"></b-form-select>
                    </b-row>
                    <b-row>
                        No.of.Seats : <b-form-input id="number" type="number" v-model="availableSeats"></b-form-input>
                    </b-row>
                    <b-row>
                        Destination : <vue-google-autocomplete
                                    id="map"
                                    classname="form-control"
                                    placeholder="Enter your Destination"
                                    v-on:placechanged="getAddressData"
                                >
                                </vue-google-autocomplete>
                    </b-row>
                    <b-row>
                        Date : <b-form-input id="time" v-model="dateSelected" type="date"></b-form-input>
                    </b-row>
                    <b-row>
                        Time Slot : <b-form-input id="time" type="time" v-model="time"></b-form-input>
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
    padding: 25px;
}
</style>
