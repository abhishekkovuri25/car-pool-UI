<template>
    <b-container>
        <b-row align-h="center">
            <b-col cols="5">
                <h2> Register Your Car </h2>
                <b-card>
                    <b-row>
                        Car Name : <b-form-select v-model="carName" :options="options"></b-form-select>
                        Car Number : <b-form-input id="number" type="number" v-model="carNumber"></b-form-input>
                        Car Type : <b-form-select v-model="carType"></b-form-select>
                        Color : <b-form-input id="time" v-model="carColor"></b-form-input>
                    </b-row>
                    <b-row>
                        <b-button type="submit" variant="primary">Done</b-button>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<style scoped>
</style>