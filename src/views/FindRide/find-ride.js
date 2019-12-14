import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  data () {
    return {
      page: '',
      selected: '',
      to_address: '',
      from_address: '',
      placeResultData: {},
      id:''
    }
  },
  created() {
    this.page = "Login" 
  },
  methods: {
    fromAddress(addressData, placeResultData) {
        this.from_address = addressData;
        this.place_id = placeResultData
    },
    toAddress(addressData,placeResultData) {
        this.to_address = addressData;
        this.place_id = placeResultData
    }
  },
  components: {
    VueGoogleAutocomplete
  }
}