<template>
    <b-container>
			<b-row align-h="center">
				<b-col cols="5">
                    <h2> Find a Ride </h2>
					<b-card>
                        <b-row>
                            Pick up : <b-form-select v-model="selected" :options="options"></b-form-select>
                            Destination : <b-form-input id="number" type="number" v-model="availableSeats"></b-form-input>
                        </b-row>
                        <b-row align-h="center" class="mt-3">
                            <b-button type="submit" variant="outline-success">Search</b-button>
                        </b-row>
                    </b-card>
				</b-col>
			</b-row>
		</b-container>
</template>
<style scoped>
</style>