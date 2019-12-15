<template>
    <b-container>
        <b-row align-h="center">
            <h2>My Profile</h2>
        </b-row>
        <b-row align-h="center">
            <b-col cols="7" class="register">
                <b-card class="card">
                    <b-row class="mt-3">
                        <b-col cols="3">
                            Name : 
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.fullName"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            Email ID :
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.emailId"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            Organisation Name :
                        </b-col>
                        <b-col>
                             <b-form-input :readonly=true v-model="userDetails.organisationName"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            Phone Number : 
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.phoneNumber"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            User ID : 
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.userId"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            Employee ID : 
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.empId"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="3">
                            DOB : 
                        </b-col>
                        <b-col>
                            <b-form-input :readonly=true v-model="userDetails.dob"></b-form-input>
                        </b-col>
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

