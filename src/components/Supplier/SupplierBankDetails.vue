<template>
  <div class="container f-family">
    <div class="shadow-sm mb-5 bg-body rounded mx-auto" v-c_width="'95%'">
      <form @submit.prevent="onSubmit" method="post" class="p-5 border border-success">
        <h2
          class="mt-3 mb-5 text-center fw-bold text-decoration-underline text-danger textcolor"
        >
          Supplier's Bank Details
        </h2>
        <br />

        <div class="row">
          <div class="col-md-6">
            <!-- Bank name row -->
            <div class="mb-3 row">
              <label for="bankName" class="col-sm-4 col-form-label text-end">
                Bank Name
              </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="bankName" name="bankName" v-model="post.bankName"
                          :class="{ 'is-invalid': isSubmitted && $v.post.bankName.$error }"/>
                          <div v-if="isSubmitted && !$v.post.bankName.required" class="invalid-feedback">Invalid bank name</div>
              </div>
            </div>

            <!-- Branch name row -->
            <div class="mb-3 row">
              <label for="branch" class="col-sm-4 col-form-label text-end"
                >Branch Name</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="branch" name="branch"/>
              </div>
            </div>
          </div>

          <!-- Colunm 2 -->
          <div class="col-md-6">
            <!-- Account no. row -->
            <div class="mb-3 row">
              <label for="accountNumber" class="col-sm-4 col-form-label text-end"
                >Account No.</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="accountNumber" name="accountNumber" v-model="post.accountNumber"
                          :class="{ 'is-invalid': isSubmitted && $v.post.accountNumber.$error }"  />
                          <div v-if="isSubmitted && !$v.post.accountNumber.required" class="invalid-feedback">Invalid account number</div>
              </div>
            </div>

            <!-- IFSC row -->
            <div class="mb-3 row">
              <label for="bankIFSC" class="col-sm-4 col-form-label text-end"
                >IFSC</label
              >
              <div class="col-sm-8">
                <input type="text" class="form-control" id="bankIFSC" name="bankIFSC" v-model="post.bankIFSC"
                  :class="{ 'is-invalid': isSubmitted && $v.post.bankIFSC.$error }" />
                  <div v-if="isSubmitted && !$v.post.bankIFSC.required" class="invalid-feedback">Invalid IFSC code</div>
                  <div v-if="isSubmitted && !$v.post.bankIFSC.validFormat" class="invalid-feedback">Invalid IFSC code format</div>      
              </div>
            </div>
          </div>
        </div>

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/addsupplier" class="textcolor">Previous</router-link>
            </a>
          </li>
        </ul>
        <button type="submit" class="btn btn-success from-control">Add Supplier Bank Details</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength, numeric  } from "vuelidate/lib/validators";
export default {
  name: "SupplierBankDetails",
  data() {
    return {
      post: {
        bankName: "",
        bankIFSC: "",
        accountNumber: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    post: {
      bankName: { required },
      bankIFSC: {
         required, 
         maxLength: maxLength(11),
         minLength: minLength(11),
         validFormat: value => /^[\w]{4}[0]{1}[\w]{6}$/i.test(value),
        },
      accountNumber: { 
        required,
        minLength: minLength(11),
        // maxLength: maxLength(20),
        numeric, 
    },
    },
  },

  watch: {
    bankIFSC(newIFSC) {
      // Automatically convert the IFSC code to uppercase whenever it changes
      this.bankIFSC = newIFSC.toUpperCase();
    },
  },

  methods: {
    onSubmit(e) {
      this.isSubmitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      alert("Data submitted successfully");

      axios
        .post("http://localhost:3000/posts", this.post)
        .then((resp) => {
          console.log("Result", resp.data);
        })
        .catch((err) => {
          console.log("Error", err.data);
        });
      e.preventDefault();
      this.resetForm();
      this.isSubmitted = false;
      
    },

    resetForm() {
      this.post = {
        bankName: "",
        bankIFSC: "",
        accountNumber: ""
      };
    },
  },
};
</script>

<style scoped>
.textcolor {
  /* color: rgb(7, 147, 7) !important; */
  color: rgb(81, 122, 24) !important;
}
</style>
<!-- const banksInIndia = [
  { name: "State Bank of India" },
  { name: "HDFC Bank" },
  { name: "ICICI Bank" },
  { name: "Axis Bank" },
  { name: "Punjab National Bank" },
  { name: "Kotak Mahindra Bank" },
  { name: "Bank of Baroda" },
  { name: "Canara Bank" },
  { name: "Union Bank of India" },
  { name: "Indian Bank" },
  { name: "IDBI Bank" },
  { name: "Bank of India" },
  { name: "IndusInd Bank" },
  { name: "Central Bank of India" },
  { name: "Yes Bank" },
  { name: "Federal Bank" },
  { name: "Karur Vysya Bank" },
  { name: "South Indian Bank" },
  { name: "Bandhan Bank" },
  { name: "RBL Bank" },
  { name: "AU Small Finance Bank" },
  { name: "Nainital Bank" },
  { name: "Dhanlaxmi Bank" },
  { name: "UCO Bank" },
  { name: "United Bank of India" },
  { name: "Jammu and Kashmir Bank" },
  { name: "Karnataka Bank" },
  { name: "City Union Bank" },
  { name: "Syndicate Bank" },
  { name: "Oriental Bank of Commerce" },
  { name: "Andhra Bank" },
  { name: "Punjab and Sind Bank" },
  { name: "Catholic Syrian Bank" },
  { name: "Indian Overseas Bank" },
  { name: "State Bank of Patiala" },
  { name: "State Bank of Mysore" },
  { name: "State Bank of Travancore" },
  { name: "State Bank of Bikaner and Jaipur" },
  { name: "State Bank of Hyderabad" },
  { name: "Lakshmi Vilas Bank" },
  { name: "DBS Bank" },
  { name: "Citi Bank" },
  { name: "Standard Chartered Bank" },
  { name: "HSBC Bank" },
  { name: "Barclays Bank" },
  { name: "American Express Bank" },
  { name: "Deutsche Bank" },
  { name: "BNP Paribas" },
  { name: "Credit Agricole Corporate and Investment Bank" },
  { name: "Doha Bank" },
  { name: "BNY Mellon" },
  { name: "Wells Fargo Bank" },
  { name: "JP Morgan Chase Bank" },
  { name: "Bank of America" },
  { name: "Goldman Sachs Bank" },
  { name: "Mizuho Corporate Bank" },
  { name: "Sumitomo Mitsui Banking Corporation" },
  { name: "Royal Bank of Scotland" },
  { name: "UBS AG" },
  { name: "BNP Paribas Fortis" },
  { name: "Commerzbank" },
  { name: "ING Vysya Bank" },
  { name: "Development Credit Bank" },
  { name: "IDFC Bank" },
  { name: "Fullerton India Credit Company Limited" },
  { name: "HSBC Finance Corporation" },
  { name: "IDFC FIRST Bank" },
  { name: "Bharatiya Mahila Bank" },
  { name: "Dena Bank" },
  { name: "Vijaya Bank" },
  { name: "Corporation Bank" },
  { name: "Syntel International Pvt. Ltd." },
  { name: "BNP Paribas Leasing Solutions" },
  { name: "ICICI Lombard" },
  { name: "YES BANK Limited" },
  { name: "YES Securities (India) Limited" },
  { name: "DBS Bank India Limited" },
  { name: "Societe Generale Global Solution Centre" },
  { name: "Ujjivan Small Finance Bank" },
  { name: "Yes Bank" },
  { name: "Equitas Small Finance Bank" },
  { name: "AU Small Finance Bank Limited" },
  { name: "Fincare Small Finance Bank" },
  { name: "IDFC FIRST Bank Ltd." },
  { name: "Bandhan Bank Ltd." },
  { name: "RBL Bank Ltd." },
  { name: "Paytm Payments Bank Ltd." },
  { name: "Airtel Payments Bank Ltd." },
  { name: "Capital Small Finance Bank Ltd." },
  { name: "Suryoday Small Finance Bank Ltd." },
  { name: "Utkarsh Small Finance Bank Ltd." },
  { name: "Nagpur Nagrik Sahakari Bank Ltd." },
  { name: "Bharat Cooperative Bank (Mumbai) Ltd." },
  { name: "Citizencredit Cooperative Bank Ltd." },
  { name: "Saraswat Cooperative Bank Ltd." },
  { name: "Abhyudaya Cooperative Bank Ltd." },
  { name: "Bassein Catholic Cooperative Bank Ltd." },
  { name: "Kalyan Janata Sahakari Bank Ltd." },
  { name: "Karad Urban Cooperative Bank Ltd." },
  { name: "Mahanagar Cooperative Bank Ltd." },
  { name: "Punjab & Maharashtra Cooperative Bank Ltd." },
  { name: "Shamrao Vithal Cooperative Bank Ltd." },
  { name: "The Ahmedabad Mercantile Cooperative Bank Ltd." },
  { name: "The Andhra Pradesh State Cooperative Bank Ltd." },
  { name: "The Bihar State Cooperative Bank Ltd." },
  { name: "The Cosmos Cooperative Bank Ltd." },
  { name: "The Delhi State Cooperative Bank Ltd." },
  { name: "The Goa State Cooperative Bank Ltd." },
  { name: "The Gujarat State Cooperative Bank Ltd." },
  { name: "The Hasti Coop. Bank Ltd." },
  { name: "The Karanataka State Cooperative Apex Bank Ltd." },
  { name: "The Kerala State Cooperative Bank Ltd." },
  { name: "The Municipal Cooperative Bank Ltd." },
  { name: "The Nashik District Central Cooperative Bank Ltd." },
  { name: "The Rajasthan State Cooperative Bank Ltd." },
  { name: "The Sahebrao Deshmukh Cooperative Bank Ltd." },
  { name: "The Sarvodaya Sahkari Bank Ltd." },
  { name: "The Shamrao Vithal Cooperative Bank Ltd." },
  { name: "The Sindhudurg District Central Cooperative Bank Ltd." },
  { name: "The Surat District Cooperative Bank Ltd." },
  { name: "The Tamil Nadu State Apex Cooperative Bank Ltd." },
  { name: "The Thane Janata Sahakari Bank Ltd." },
  { name: "The Varachha Cooperative Bank Ltd." },
  { name: "The Vishweshwar Sahakari Bank Ltd." },
  { name: "The West Bengal State Cooperative Bank Ltd." },
  { name: "TJSB Sahakari Bank Ltd." },
  { name: "Karur Vysya Bank Ltd." },
  { name: "The Kalyan Janata Sahakari Bank Ltd." },
  { name: "The Janaseva Sahakari Bank Ltd." },
  { name: "The Mehsana Urban Cooperative Bank Ltd." },
  { name: "The Navnirman Co-operative Bank Ltd." },
  { name: "The Nainital Bank Ltd." },
  { name: "The Panipat Urban Co-Operative Bank Ltd." },
  { name: "The Thane Janata Sahakari Bank Ltd." },
  { name: "The Urban Cooperative Bank Ltd." },
  { name: "The Vyavasayik Pariksha Mandal." },
  { name: "The Zoroastrian Cooperative Bank Ltd." },
  { name: "The A.P. Mahesh Cooperative Urban Bank Ltd." },
  { name: "The Akola Janata Commercial Cooperative Bank Ltd." },
  { name: "The Allahabad District Cooperative Bank Ltd." },
  { name: "The Ambarnath Jai-Hind Coop Bank Ltd." },
  { name: "The Andhra Pradesh State Coop Bank Ltd." },
  { name: "The Bank of Nova Scotia." },
  { name: "The Bharat Co-op Bank Ltd." },
  { name: "The Bharati Sahakari Bank Ltd." },
  { name: "The Bombay Mercantile Co-operative Bank Ltd." },
  { name: "The Catholic Syrian Bank Ltd." },
  { name: "The Central Cooperative Bank of India Ltd." },
  { name: "The Chhatrapati Rajarshi Shahu Urban Co-op Bank Ltd." },
  { name: "The Chhattisgarh Rajya Sahakari Bank Ltd." },
  { name: "The Citizen Co-operative Bank Ltd." },
  { name: "The Citizen Credit Cooperative Bank Ltd." },
  { name: "The City Co-operative Bank Ltd." },
  { name: "The Cosmos Co-Op. Bank Ltd." },
  { name: "The Dhanlaxmi Bank Ltd." },
  { name: "The Dombivli Nagari Sahakari Bank Ltd." },
  { name: "The Dr. Annasaheb Chougule Urban Co-op Bank Ltd." },
  { name: "The East Kallada Co-operative Bank Ltd." },
  { name: "The Federal Bank Ltd." },
  { name: "The Greater Bombay Co-operative Bank Ltd." },
  { name: "The Gujarat State Co-operative Bank Ltd." },
  { name: "The Gulbarga Urban Co-op Bank Ltd." },
  { name: "The Gurgaon Central Co-op Bank Ltd." },
  { name: "The Gwalior Central Co-op Bank Ltd." },
  { name: "The Hindustan Co-op Bank Ltd." },
  { name: "The HP State Co-operative Bank Ltd." },
  { name: "The J&K State Co-operative Bank Ltd." },
  { name: "The Jalore Nagrik Sahakari Bank Ltd." },
  { name: "The Jalpaiguri People's Co-op Bank Ltd." },
  { name: "The Janakalyan Sahakari Bank Ltd." },
  { name: "The Janaseva Sahakari Bank Ltd." },
  { name: "The Kalupur Commercial Co-operative Bank Ltd." },
  { name: "The Kalyan Janata Sahakari Bank Ltd." },
  { name: "The Kangra Central Co-op Bank Ltd." },
  { name: "The Kangra Co-operative Bank Ltd." },
  { name: "The Karad Urban Co-op Bank Ltd." },
  { name: "The Khammam District Co-op Central Bank Ltd." },
  { name: "The Khopoli Urban Co-operative Bank Ltd." },
  { name: "The Kodad Urban Co-op Bank Ltd." },
  { name: "The Kokan Mercantile Co-op Bank Ltd." },
  { name: "The Kozhikode District Co-operative Bank Ltd." },
  { name: "The Krishna District Co-op Central Bank Ltd." },
  { name: "The Kurmanchal Nagar Sahakari Bank Ltd." },
  { name: "The Lakshmi Vilas Bank Ltd." },
  { name: "The Maharashtra State Co-operative Bank Ltd." },
  { name: "The Mahila Vikas Co-operative Bank Ltd." },
  { name: "The Malkapur Urban Co-op Bank Ltd." },
  { name: "The Malwa Urban Co-op Bank Ltd." },
  { name: "The Manipur State Co-op Bank Ltd." },
  { name: "The Mapusa Urban Co-operative Bank Of Goa Ltd." },
  { name: "The Maratha Co-operative Bank Ltd." },
  { name: "The Meghalaya Co-operative Apex Bank Ltd." },
  { name: "The Mehsana Urban Co-operative Bank Ltd." },
  { name: "The Moga Central Co-op Bank Ltd." },
  { name: "The Municipal Co-op Bank Ltd." },
  { name: "The Muslim Co-operative Bank Ltd." },
  { name: "The Nagapattinam Co-op Urban Bank Ltd." },
  { name: "The Nainital Bank Ltd." },
  { name: "The Nasik Merchant's Co-operative Bank Ltd." },
  { name: "The National Co-operative Bank Ltd." },
  { name: "The Navi Mumbai Co-op Bank Ltd." },
  { name: "The Nellai City Union Bank Ltd." },
  { name: "The Odisha State Co-operative Bank Ltd." },
  { name: "The Osmanabad Urban Co-operative Bank Ltd." },
  { name: "The Pandharpur Urban Co-operative Bank Ltd." },
  { name: "The Paschim Banga Gramin Bank" },
  { name: "The Punjab State Cooperative Bank Ltd." },
  { name: "The Ratnakar Bank Ltd." },
  { name: "The Royal Bank of Scotland Ltd." },
  { name: "The Sahebrao Deshmukh Co-operative Bank Ltd." },
  { name: "The Sangli Urban Co-op Bank Ltd." },
  { name: "The Saraswat Co-operative Bank Ltd." },
  { name: "The Saurashtra Co-op Bank Ltd." },
  { name: "The Shikshak Sahakari Bank Ltd." },
  { name: "The Shirpur People's Co-operative Bank Ltd." },
  { name: "The Shri Mahila Sewa Sahakari Bank Ltd." },
  { name: "The Shri Veershaiv Co-op Bank Ltd." },
  { name: "The South Indian Bank Ltd." },
  { name: "The Sutex Co-op Bank Ltd." },
  { name: "The Syndicate Bank Ltd." },
  { name: "The Tamilnad Mercantile Bank Ltd." },
  { name: "The Thane District Central Co-op Bank Ltd." },
  { name: "The Thane Janta Sahakari Bank Ltd." },
  { name: "The TJSB Sahakari Bank Ltd." },
  { name: "The UCO Bank Ltd." },
  { name: "The Union Bank Of India Ltd." },
  { name: "The United Commercial Co-op Bank Ltd." },
  { name: "The United Overseas Bank Ltd." },
  { name: "The United Western Bank Ltd." },
  { name: "The Urban Co-operative Bank Ltd." },
  { name: "The Vadodara Central Co-operative Bank Ltd." },
  { name: "The Varachha Co-op Bank Ltd." },
  { name: "The Vijay Co-op Bank Ltd." },
  { name: "The Visakhapatnam Co-op Bank Ltd." },
  { name: "The Warangal District Co-operative Central Bank Ltd." },
  { name: "The West Bengal State Co-op Bank Ltd." },
  { name: "The Zoroastrian Co-operative Bank Ltd." },
  { name: "Utkarsh Small Finance Bank" },
  { name: "Ujjivan Small Finance Bank" },
  { name: "Suryoday Small Finance Bank" },
  { name: "Equitas Small Finance Bank" },
  { name: "Fincare Small Finance Bank" },
  { name: "IDFC FIRST Bank" },
  { name: "Bandhan Bank" },
  { name: "Paytm Payments Bank" },
  { name: "Airtel Payments Bank" },
  { name: "Capital Small Finance Bank" },
  { name: "Utkarsh Small Finance Bank" },
  { name: "Nagpur Nagrik Sahakari Bank" },
  { name: "Bharat Cooperative Bank (Mumbai)" },
  { name: "Citizencredit Cooperative Bank" },
  { name: "Saraswat Cooperative Bank" },
  { name: "Abhyudaya Cooperative Bank" },
  { name: "Bassein Catholic Cooperative Bank" },
  { name: "Kalyan Janata Sahakari Bank" },
  { name: "Karad Urban Cooperative Bank" },
  { name: "Mahanagar Cooperative Bank" },
  { name: "Punjab & Maharashtra Cooperative Bank" },
  { name: "Shamrao Vithal Cooperative Bank" },
  { name: "The Ahmedabad Mercantile Cooperative Bank" },
  { name: "The Andhra Pradesh State Cooperative Bank" },
  { name: "The Bihar State Cooperative Bank" },
  { name: "The Cosmos Cooperative Bank" },
  { name: "The Delhi State Cooperative Bank" },
  { name: "The Goa State Cooperative Bank" },
  { name: "The Gujarat State Cooperative Bank" },
  { name: "The Hasti Coop. Bank" },
  { name: "The Karanataka State Cooperative Apex Bank" },
  { name: "The Kerala State Cooperative Bank" },
  { name: "The Municipal Cooperative Bank" },
  { name: "The Nashik District Central Cooperative Bank" },
  { name: "The Rajasthan State Cooperative Bank" },
  { name: "The Sahebrao Deshmukh Cooperative Bank" },
  { name: "The Sarvodaya Sahkari Bank" },
  { name: "The Shamrao Vithal Cooperative Bank" },
  { name: "The Sindhudurg District Central Cooperative Bank" },
  { name: "The Surat District Cooperative Bank" },
  { name: "The Tamil Nadu State Apex Cooperative Bank" },
  { name: "The Thane Janata Sahakari Bank" },
  { name: "The Varachha Cooperative Bank" },
  { name: "The Vishweshwar Sahakari Bank" },
  { name: "The West Bengal State Cooperative Bank" },
  { name: "TJSB Sahakari Bank" },
  { name: "Karur Vysya Bank" },
  { name: "The Kalyan Janata Sahakari Bank" },
  { name: "The Janaseva Sahakari Bank" },
  { name: "The Mehsana Urban Cooperative Bank" },
  { name: "The Navnirman Co-operative Bank" },
  { name: "The Nainital Bank" },
  { name: "The Panipat Urban Co-Operative Bank" },
  { name: "The Thane Janata Sahakari Bank" },
  { name: "The Urban Cooperative Bank" },
  { name: "The Vyavasayik Pariksha Mandal." },
  { name: "The Zoroastrian Cooperative Bank" },
  { name: "The A.P. Mahesh Cooperative Urban Bank" },
  { name: "The Akola Janata Commercial Cooperative Bank" },
  { name: "The Allahabad District Cooperative Bank" },
  { name: "The Ambarnath Jai-Hind Coop Bank" },
  { name: "The Andhra Pradesh State Coop Bank" },
  { name: "The Bank of Nova Scotia" },
  { name: "The Bharat Co-op Bank" },
  { name: "The Bharati Sahakari Bank" },
  { name: "The Bombay Mercantile Co-operative Bank" },
  { name: "The Catholic Syrian Bank" },
  { name: "The Central Cooperative Bank of India" },
  { name: "The Chhatrapati Rajarshi Shahu Urban Co-op Bank" },
  { name: "The Chhattisgarh Rajya Sahakari Bank" },
  { name: "The Citizen Co-operative Bank" },
  { name: "The Citizen Credit Cooperative Bank" },
  { name: "The City Co-operative Bank" },
  { name: "The Cosmos Co-Op. Bank" },
  { name: "The Dhanlaxmi Bank" },
  { name: "The Dombivli Nagari Sahakari Bank" },
  { name: "The Dr. Annasaheb Chougule Urban Co-op Bank" },
  { name: "The East Kallada Co-operative Bank" },
  { name: "The Federal Bank" },
  { name: "The Greater Bombay Co-operative Bank" },
  { name: "The Gujarat State Co-operative Bank" },
  { name: "The Gulbarga Urban Co-op Bank" },
  { name: "The Gurgaon Central Co-op Bank" },
  { name: "The Gwalior Central Co-op Bank" },
  { name: "The Hindustan Co-op Bank" },
  { name: "The HP State Co-operative Bank" },
  { name: "The J&K State Co-operative Bank" },
  { name: "The Jalore Nagrik Sahakari Bank" },
  { name: "The Jalpaiguri People's Co-op Bank" },
  { name: "The Janakalyan Sahakari Bank" },
  { name: "The Janaseva Sahakari Bank" },
  { name: "The Kalupur Commercial Co-operative Bank" },
  { name: "The Kalyan Janata Sahakari Bank" },
  { name: "The Kangra Central Co-op Bank" },
  { name: "The Kangra Co-operative Bank" },
  { name: "The Karad Urban Co-op Bank" },
  { name: "The Khammam District Co-op Central Bank" },
  { name: "The Khopoli Urban Co-operative Bank" },
  { name: "The Kodad Urban Co-op Bank" },
  { name: "The Kokan Mercantile Co-op Bank" },
  { name: "The Kozhikode District Co-operative Bank" },
  { name: "The Krishna District Co-op Central Bank" },
  { name: "The Kurmanchal Nagar Sahakari Bank" },
  { name: "The Lakshmi Vilas Bank" },
  { name: "The Maharashtra State Co-operative Bank" },
  { name: "The Mahila Vikas Co-operative Bank" },
  { name: "The Malkapur Urban Co-op Bank" },
  { name: "The Malwa Urban Co-op Bank" },
  { name: "The Manipur State Co-op Bank" },
  { name: "The Mapusa Urban Co-operative Bank Of Goa" },
  { name: "The Maratha Co-operative Bank" },
  { name: "The Meghalaya Co-operative Apex Bank" },
  { name: "The Mehsana Urban Co-operative Bank" },
  { name: "The Moga Central Co-op Bank" },
  { name: "The Municipal Co-op Bank" },
  { name: "The Muslim Co-operative Bank" },
  { name: "The Nagapattinam Co-op Urban Bank" },
  { name: "The Nainital Bank" },
  { name: "The Nasik Merchant's Co-operative Bank" },
  { name: "The National Co-operative Bank" },
  { name: "The Navi Mumbai Co-op Bank" },
  { name: "The Nellai City Union Bank" },
  { name: "The Odisha State Co-operative Bank" },
  { name: "The Osmanabad Urban Co-operative Bank" },
  { name: "The Pandharpur Urban Co-operative Bank" },
  { name: "The Paschim Banga Gramin Bank" },
  { name: "The Punjab State Cooperative Bank" },
  { name: "The Ratnakar Bank" },
  { name: "The Royal Bank of Scotland" },
  { name: "The Sahebrao Deshmukh Co-operative Bank" },
  { name: "The Sangli Urban Co-op Bank" },
  { name: "The Saraswat Co-operative Bank" },
  { name: "The Saurashtra Co-op Bank" },
  { name: "The Shikshak Sahakari Bank" },
  { name: "The Shirpur People's Co-operative Bank" },
  { name: "The Shri Mahila Sewa Sahakari Bank" },
  { name: "The Shri Veershaiv Co-op Bank" },
  { name: "The South Indian Bank" },
  { name: "The Sutex Co-op Bank" },
  { name: "The Syndicate Bank" },
  { name: "The Tamilnad Mercantile Bank" },
  { name: "The Thane District Central Co-op Bank" },
  { name: "The Thane Janta Sahakari Bank" },
  { name: "The TJSB Sahakari Bank" },
  { name: "The UCO Bank" },
  { name: "The Union Bank Of India" },
  { name: "The United Commercial Co-op Bank" },
  { name: "The United Overseas Bank" },
  { name: "The United Western Bank" },
  { name: "The Urban Co-operative Bank" },
  { name: "The Vadodara Central Co-operative Bank" },
  { name: "The Varachha Co-op Bank" },
  { name: "The Vijay Co-op Bank" },
  { name: "The Visakhapatnam Co-op Bank" },
  { name: "The Warangal District Co-operative Central Bank" },
  { name: "The West Bengal State Co-op Bank" },
  { name: "The Zoroastrian Co-operative Bank" },
];

console.log(banksInIndia); -->
