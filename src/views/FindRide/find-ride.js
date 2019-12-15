import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  data () {
    return {
      page: '',
      selected: '',
      to_address: '',
      from_address: '',
      pickUp: 'Coviam Technologies',
      placeResultData: {},
      id:'',
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
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