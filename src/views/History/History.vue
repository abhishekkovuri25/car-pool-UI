<template>
    <b-container>
        <b-row align-h="center">
            <h2>History</h2>
        </b-row >
            <b-card v-if="historyDetails!==null" class="card">
                <b-table striped hover :items="historyDetails" :fields="fields">
                    {{historyDetails}}
                    <template slot="userId" slot-scope="row">
                        {{ row.value.userId }}
                    </template>
                    <template slot="pickupPoint.placeAddress" slot-scope="row">
                        {{ row.value.pickupPoint.placeAddress }}
                    </template>
                    <template slot="destination.placeAddress" slot-scope="row">
                        {{ row.value.destinationPoint.placeAddress }}
                    </template>
                    <template slot="rideStartTime" slot-scope="row">
                        {{ row.value.rideStartTime }}
                    </template>
                    <template slot="seats" slot-scope="row">
                        {{ row.value.seats }}
                    </template>
                    <template slot="tripStatus" slot-scope="row">
                        {{ row.value.tripStatus }}
                    </template>
                    <template slot="vehicleNumber" slot-scope="row">
                        {{ row.value.vehicleNumber }}
                    </template>
                </b-table>
            </b-card>
            <b-card v-else class="card">
                No Data
            </b-card>
    </b-container>
</template>
<script src="./history.js"></script>
<style scoped>
.card {
    background-color: #5cb8c9 !important;
    opacity: 0.95;
    padding: 25px;
}
</style>