import VueGoogleAutocomplete from 'vue-google-autocomplete'
import axios from 'axios'
export default {
  data () {
    return {
      page: '',
      availableSeats: '',
      addressData: '',
      latitude: null,
      longitude: null,
      placeId: '',
      dateSelected: '',
      orgLatitude: 12.9180242,
      orgLongitude: 77.64905290000002,
      orgPlaceID: "ChIJTRkj6YMUrjsR3jsq2T2_Jlg",
      selectedVehicle: '',
      vehicleOptions : [
        { value: 'AP23 ED8234', text: 'SUV' },
        { value: 'TS15 ED8949', text: 'Royal Enfield' }
    ],
    }
  },
  created() {
    this.page = "Login" 
  },
  methods: {
    getAddressData(addressData,placeResultData) {
        this.latitude = addressData.latitude
        this.longitude = addressData.longitude
        this.placeId = placeResultData.placeId
    },
    offerRide() {
        let payload = {
            "userId":"harshit.sidhwa7565",
            "requestContent" : {
                    "pickupPoint": {
                        "latitude": this.orgLatitude,
                        "longitude": this.orgLongitude,
                        "placeId": this.orgPlaceID
                    },
                    "destinationPoint":{
                        "latitude": this.latitude,
                        "longitude": this.longitude,
                        "placeId": this.placeId
                    },
                    "tripStartTime": "2019-12-15T17:00:00.000Z",
                    "offeredSeats": this.availableSeats,
                    "carNumber" : this.selectedVehicle
                }
            }
            let path = 'https://corporate-car-pool.herokuapp.com/api/ride/create-trip'
            axios.post(path, payload)
                .then(function () {
                    alert('success')
                })
                .catch(function () {
                    alert('fail')
            })
        }
    },  
    components: {
        VueGoogleAutocomplete
    }
}