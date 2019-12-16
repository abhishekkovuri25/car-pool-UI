<template>
    <b-container>
        <b-row align-h="center">
            <h2>Available Rides</h2>
        </b-row>
            <b-card v-if="rideList!== null" class="card">
                <b-table small responsive :items="rideList" :fields="fields" ref="selectableTable" selectable select-mode="single" @row-selected="onRowSelected">
                    <template slot="userId" slot-scope="row">
                        {{ row.value.userId }}
                    </template>
                    <template slot="fullName" slot-scope="row">
                        {{ row.value.fullName }}
                    </template>
                    <template slot="fullName" slot-scope="row">
                        {{ row.value.phoneNumber }}
                    </template>
                    <template slot="pickupPoint.placeAddress" slot-scope="row">
                        {{ row.value.pickupPoint.placeAddress }}
                    </template>
                    <template slot="destination.placeAddress" slot-scope="row">
                        {{ row.value.destinationPoint.placeAddress }}
                    </template>
                    <template slot="tripStartTime" slot-scope="row">
                        {{ row.value.tripStartTime }}
                    </template>
                    <template slot="offeredSeats" slot-scope="row">
                        {{ row.value.offeredSeats }}
                    </template>
                    <template slot="vehicleNumber" slot-scope="row">
                        {{ row.value.vehicleNumber }}
                    </template>
                </b-table>
                <b-row align-h="center">
                    <b-button variant="success" @click="join">Join</b-button>
                </b-row>
            </b-card>
            <b-card v-else-if="rideList === null" class="card">
                No Data
            </b-card>
    </b-container>
</template>
<script src="./ride-list.js"></script>
<style scoped>
.card {
    margin-top:1%;
    background-color: #ccdde0 !important;
    opacity: 0.95;
    padding: 0px;
}
</style>