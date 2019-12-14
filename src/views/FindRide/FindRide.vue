<template>
    <b-container>
			<b-row align-h="center">
				<b-col cols="5">
                    <h2> Find a Ride </h2>
					<b-card>
                        <b-row>
                            Pick up : <vue-google-autocomplete
                                        id="from_location"
                                        :country="['in']"
                                        classname="form-control"
                                        placeholder="Start typing"
                                        v-on:placechanged="fromAddress"
                                    >
                                    </vue-google-autocomplete>
                            Destination : <vue-google-autocomplete
                                        id="to_location"
                                        :country="['in']"
                                        classname="form-control"
                                        placeholder="Start typing"
                                        v-on:placechanged="toAddress"
                                    >
                                    </vue-google-autocomplete>
                        </b-row>
                        <b-row align-h="center" class="mt-3">
                            <b-button type="submit" variant="outline-success">Search</b-button>
                        </b-row>
                    </b-card>
				</b-col>
			</b-row>
		</b-container>
</template>
<script src="./find-ride.js"></script>
<style scoped>
</style>