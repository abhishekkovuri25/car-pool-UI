import VueGoogleAutocomplete from 'vue-google-autocomplete'
import { mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
      page: '',
      availableSeats: '',
      addressData: '',
      latitude: null,
      longitude: null,
      placeId: '',
      dateSelected: null,
      time: null,
      orgLatitude: 12.9180242,
      orgLongitude: 77.64905290000002,
      orgPlaceID: "ChIJTRkj6YMUrjsR3jsq2T2_Jlg",
      selectedVehicle: '',
    options: {
        format: 'DD/MM/YYYY h:mm:ss',
        useCurrent: false,
        showClear: true,
        showClose: true,
      }
    }
  },
  created() {
    this.page = "Login" 
    this.$store.dispatch('getVehicleList', this.userId)
  },
  methods: {
    getAddressData(addressData,placeResultData) {
        this.latitude = addressData.latitude
        this.longitude = addressData.longitude
        this.placeId = placeResultData.place_id
    },
    offerRide() {
        let datetime = this.dateSelected + ',' + this.time
        let date = new Date(datetime)
        let pAddress = ''
        let payload = {
            "userId": this.userId,
            "requestContent" : {
                    "pickupPoint": {
                        "latitude": this.orgLatitude,
                        "longitude": this.orgLongitude,
                        "placeId": this.orgPlaceID,
                        "placeAddress": pAddress
                    },
                    "destinationPoint":{
                        "latitude": this.latitude,
                        "longitude": this.longitude,
                        "placeId": this.placeId,
                        "placeAddress": pAddress
                    },
                    "tripStartTime": date,
                    "offeredSeats": this.availableSeats,
                    "vehicleNumber" : this.selectedVehicle
                }
            }
            this.$store.dispatch('createTrip', {payload,success: this.callFind})
        },
        callFind() {
            this.$router.push({name: 'FindRideHome', path: '/'})
        }

    },  
    components: {
        VueGoogleAutocomplete
    },
    computed: {
        ...mapGetters([
            'userId',
            'vehicles'
        ])
    }
}