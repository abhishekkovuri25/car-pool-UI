<template>
    <b-container>
        <b-row align-h="center">
            <h2>My Profile</h2>
        </b-row>
        <b-row align-h="center">
            <b-col cols="5" class="register">
                <b-card class="card">
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.fullName">{{userDetails.fullName}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.emailId">{{userDetails.emailId}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.organisationName">{{userDetails.organisationName}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.phoneNumber">{{userDetails.phoneNumber}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.userId">{{userDetails.userId}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.empId">{{userDetails.empId}}</b-form-input>
                    </b-row>
                    <b-row class="mt-3">
                        <b-form-input readonly="true" v-model="userDetails.dob">{{userDetails.dob}}</b-form-input>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="./my-profile.js"></script>
<style scoped>
    .card {
        background-color: #5cb8c9 !important;
        opacity: 0.95;
        padding: 25px;
    }
</style>

