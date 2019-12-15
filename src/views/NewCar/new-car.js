import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            vehicleName: '',
            vehicleNumber: '',
            vehicleType: '',
            vehicletypes: [
                { value: 'Car', text: 'Car' },
                { value: 'Bike', text: 'Bike' }
            ],
            color: ''
        }
    }, 
    methods : {
        registerVehicle() {
            let payload = {
                "userId": this.userId,
                "requestContent" : {
                        "vehicleName" : this.vehicleName,
                        "vehicleNumber" : this.vehicleNumber,
                        "vehicleType" : this.vehicleType,
                        "vehicleColor" : this.color
                    }
                }
            this.$store.dispatch('vehicleRegistration',{payload, success : this.callOfferRides})
        },
        callOfferRides() {
            this.$router.push({name: 'OfferRide', path: '/offer-ride'})
        }
    },
    computed: {
		...mapGetters([
			'userId'
		])
	}
}