<template>
<div>
    <b-container>
        <b-row align-h="center">
            <h2>Signup</h2>
        </b-row>
        <b-row align-h="center">
            <b-col cols="8" class="register">
                <b-card class="card">
                    <b-row class="mt-3">
                        <b-col>
                            Enter Your Email : <b-form-input type="email" v-model="emailId"></b-form-input>
                        </b-col>
                        <b-col>
                            Enter Your Name : <b-form-input type="text" v-model="fullName"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            Enter Your DOB : <b-form-input type="date" v-model="dob"></b-form-input>
                        </b-col>
                        <b-col>
                            Enter Your Phone Number : <b-form-input type="number" v-model="phoneNumber"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            Enter Your Organisation : <b-form-input type="text" v-model="organisationName"></b-form-input>
                        </b-col>
                        <b-col>
                            Enter Your Employee Id : <b-form-input type="number" v-model="empId"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col>
                            Enter Your Password :<b-form-input v-model="password" type="password"></b-form-input>
                        </b-col>
                        <b-col>
                            Enter Your Confirm Password :<b-form-input v-model="confirmPassword" type="password"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-col cols="2" offset="4">
                            <b-button type="submit" variant="success" @click="signUp">Sign up</b-button>
                        </b-col>
                        <b-col>
                            <b-button type="submit" variant="danger" @click="reset">Reset</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script src="./register.js"></script>

<style scoped>
.card {
    background-color: #5cb8c9 !important;
    opacity: 0.95;
    padding: 25px;
}
</style>
