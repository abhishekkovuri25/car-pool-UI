<template>
    <b-container>
        <b-card class="card">
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </b-card>
        
    </b-container>
</template>
<script src="./ride-list.js"></script>
<style scoped>
.card {
    background-color: #5cb8c9 !important;
    opacity: 0.95;
    padding: 25px;
}
</style>

