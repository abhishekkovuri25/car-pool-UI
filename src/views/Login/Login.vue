<template>
<div>
    <b-container>
        <b-row align-h="center">
            <h2>Login</h2>
        </b-row>
        <b-row align-h="center">
            <b-col cols="6" class="register">
                <b-card class="card">
                    <b-row>
                        Enter Your Email : <b-form-input type="text" v-model="emailId"></b-form-input>
                    </b-row>
                    <b-row>
                        Enter Your Password : <b-form-input type="password" v-model="password"></b-form-input>
                    </b-row>
                    <b-row align-h="center" class="mt-3">
                        <b-col cols="3" offset="3">
                            <b-button type="submit" variant="success" @click="signIn">Sign In</b-button>
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

<script src="./login.js"></script>

<style scoped>
.login {
    background-color: #5cb8c9 !important;
    opacity: 0.8;
    padding: 25px;
}

.card {
    background-color: #5cb8c9 !important;
    ;
    opacity: 0.8;
    padding: 25px;
}
</style>
