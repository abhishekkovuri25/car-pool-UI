<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{path: '/find-ride'}">Car Pooling</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{path: '/offer-ride'}">Offer Ride</b-nav-item>
                <b-nav-item :to="{path: '/find-ride'}">Find Ride</b-nav-item>
                <b-nav-item v-if="userName" @click="callMyProfile" :to="{path: '/my-profile'}">My Profile</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto" v-if="!userName">
                <b-nav-item :to="{path: '/login'}">Login</b-nav-item>
                <b-nav-item :to="{path: '/register'}">Sign Up</b-nav-item>
            </b-navbar-nav>

			<b-navbar-nav class="ml-auto" v-else>
                <b-nav-item>{{userName}}</b-nav-item>
                <b-nav-item @click="reset" :to="{path: '/find-ride'}">Log Out</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script src="./navbar.js"></script>

<style scoped>
.navbar-container {
    margin-top: 3%;
}
b-nav-item {
    font-size: 12px bold;
}
</style>
