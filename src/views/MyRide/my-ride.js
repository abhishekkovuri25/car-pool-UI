import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            fields: [
                { key: 'userId', label: 'User Id', class: 'text-center'},
                { key: 'pickupPoint.placeAddress', label: 'Pick Up', class: 'text-center'},
                { key: 'destinationPoint.placeAddress', label: 'Destination', class: 'text-center'},
                { key: 'rideStartTime', label: 'Start Time', class: 'text-center'},
                { key: 'seats', label: 'Seats', class: 'text-center'},
                { key: 'tripStatus', label: 'Status', class: 'text-center'},
                { key: 'vehicleNumber', label: 'Vehicle Number', class: 'text-center'},
            ]
        }
    },
    computed:{
        ...mapGetters([
            'upcomingDetails'
        ])
    }
    
}