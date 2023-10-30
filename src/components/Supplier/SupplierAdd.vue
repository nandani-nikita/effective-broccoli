<template>
  <div class="container f-family">
    <div class="shadow-sm mb-5 bg-body rounded mx-auto" v-c_width="'95%'">
      <form
        @submit.prevent="onSubmit"
        method="post"
        class="p-5 border border-success"
      >
        <h2
          class="mt-3 mb-5 text-center fw-bold text-decoration-underline text-danger textcolor"
        >
          Add New Supplier
        </h2>
        <br />
        <div class="row">
          <div class="col-md-6">
            <!-- Full name row -->
            <div class="mb-3 row">
              <label for="fname" class="col-sm-4 col-form-label text-end"
                >Full Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  name="fname"
                  v-model="post.fullname"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.fullname.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.fullname.required"
                  class="invalid-feedback"
                >
                  This field is required
                </div>
              </div>
            </div>

            <!-- Address row -->
            <div class="mb-3 row">
              <label for="sAddress" class="col-sm-4 col-form-label text-end"
                >Address</label
              >
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  id="sAddress"
                  name="sAddress"
                  rows="2"
                  v-model="post.address"
                ></textarea>
              </div>
            </div>

            <!-- State row -->
            <div class="mb-3 row">
              <label for="stateSelect" class="col-sm-4 col-form-label text-end"
                >State</label
              >
              <div class="col-sm-8">
                <select
                  id="stateSelect"
                  v-model="selectedState"
                  class="form-control"
                >
                  <option value="">Select a state</option>
                  <option v-for="state in states" :key="state.name">
                    {{ state.name }}
                  </option>
                  <!-- <p>Selected State: {{ selectedState }}</p> -->
                </select>
              </div>
            </div>

            <!-- District row -->
            <div class="mb-3 row">
              <label
                for="selectDistrict"
                class="col-sm-4 col-form-label text-end"
                >District</label
              >
              <div class="col-sm-8">
                <select
                  id="selectDistrict"
                  v-model="selectedDistrict"
                  class="form-control"
                >
                  <option value="">Select a district</option>
                  <option
                    v-for="district in getDistrictsByState(selectedState)"
                    :key="district"
                  >
                    {{ district }}
                  </option>
                  <!-- <p>Selected State: {{ selectedState }}</p> -->
                </select>
              </div>
            </div>

            <!-- Pin row -->
            <div class="mb-3 row">
              <label for="pin" class="col-sm-4 col-form-label text-end"
                >Pin</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="pin"
                  rows="2"
                  v-model="post.pin"
                />
              </div>
            </div>

            <!-- Phone1 row -->
            <div class="mb-3 row">
              <label for="phone1" class="col-sm-4 col-form-label text-end"
                >Phone 1</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="phone1"
                  rows="2"
                  v-model="post.phone1"
                />
              </div>
            </div>

            <!-- Phone2 row -->
            <div class="mb-3 row">
              <label for="phone2" class="col-sm-4 col-form-label text-end"
                >Phone 2</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="phone2"
                  rows="2"
                  v-model="post.phone2"
                />
              </div>
            </div>

            <!-- Email1 row -->
            <div class="mb-3 row">
              <label for="semail1" class="col-sm-4 col-form-label text-end"
                >Email 1</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="semail1"
                  name="semail1"
                  rows="2"
                  v-model="post.email1"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.email1.$error,
                  }" 
                />
                <div
                  v-if="isSubmitted && !$v.post.email1.required"
                  class="invalid-feedback"
                >
                  Invalid email
                </div>
                <div
                  v-if="isSubmitted && !$v.post.email1.email"
                  class="invalid-feedback"
                >
                  Please enter a valid email address.
                </div>
              </div>
            </div>

            <!-- Email2 row -->
            <div class="mb-3 row">
              <label for="semail2" class="col-sm-4 col-form-label text-end"
                >Email 2</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="semail2"
                  name="semail2"
                  rows="2"
                  v-model="post.email2"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.email2.$error,
                  }" 
                />
                <!-- <div
                  v-if="isSubmitted && !$v.post.email2.required"
                  class="invalid-feedback"
                >
                  Invalid email
                </div> -->
                <div
                  v-if="isSubmitted && !$v.post.email2.email"
                  class="invalid-feedback"
                >
                  Please enter a valid email address.
                </div>
              </div>
            </div>

            <!-- Website row -->
            <div class="mb-3 row">
              <label for="website" class="col-sm-4 col-form-label text-end"
                >Website</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="website"
                  rows="2"
                  v-model="post.website"
                />
              </div>
            </div>
          </div>

          <!-- 2nd Column -->
          <div class="col-md-6">
            <!-- Contact Person Name row -->
            <div class="mb-3 row">
              <label
                for="contactpersonname"
                class="col-sm-4 col-form-label text-end"
                >Contact Person Name</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="contactpersonname"
                  name="contactpersonname"
                  v-model="post.contactPersonName"
                />
              </div>
            </div>

            <!-- Contact Person Phone row -->
            <div class="mb-3 row">
              <label
                for="contactpersonphoneno"
                class="col-sm-4 col-form-label text-end"
                >Contact Person Phone</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="contactpersonphoneno"
                  name="contactpersonphoneno"
                  rows="2"
                  v-model="post.contactPersonPhone"
                  :class="{
                    'is-invalid':
                      isSubmitted && $v.post.contactPersonPhone.$error
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.contactPersonPhone.required"
                  class="invalid-feedback"
                >
                  Invalid mobile number.
                </div>
                <div
                  v-if="isSubmitted && !$v.post.contactPersonPhone.numeric"
                  class="invalid-feedback"
                >
                  Only numeric value acceptable.
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.contactPersonPhone.minLength"
                  class="invalid-feedback"
                >
                  Phone number must be at least 10 digits long.
                </div>
                <div
                  v-if="isSubmitted && !$v.post.contactPersonPhone.maxLength"
                  class="invalid-feedback"
                >
                  Phone number cannot exceed 10 digits.
                </div>
              </div>
            </div>

            <!-- PAN No. row -->
            <div class="mb-3 row">
              <label for="pan" class="col-sm-4 col-form-label text-end"
                >PAN</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="panNumber"
                  name="panNumber"
                  rows="2"
                  v-model="post.panNumber"
                  :class="{
                    'is-invalid': isSubmitted && $v.post.panNumber.$error,
                  }"
                />
                <div
                  v-if="isSubmitted && !$v.post.panNumber.required"
                  class="invalid-feedback"
                >
                  Invalid PAN number
                </div>
                <div
                  v-else-if="isSubmitted && !$v.post.panNumber.validFormat"
                  class="invalid-feedback"
                >
                  Invalid format of PAN
                </div>
              </div>
            </div>

            <!-- PAN Photo row -->
            <div class="mb-3 row">
              <label for="panphoto" class="col-sm-4 col-form-label text-end"
                >PAN Photo</label
              >
              <div class="col-sm-8">
                <input
                  type="file"
                  class="form-control"
                  id="panphoto"
                  rows="2"
                />
              </div>
            </div>

            <!-- Tan Number row -->
            <div class="mb-3 row">
              <label for="tan" class="col-sm-4 col-form-label text-end"
                >TAN</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="tan"
                  rows="2"
                  v-model="post.tanNumber"
                />
              </div>
            </div>

            <!-- Tan Photo row -->
            <div class="mb-3 row">
              <label for="tanphoto" class="col-sm-4 col-form-label text-end"
                >TAN Photo</label
              >
              <div class="col-sm-8">
                <input
                  type="file"
                  class="form-control"
                  id="tanphoto"
                  rows="2"
                />
              </div>
            </div>

            <!-- GSTIN row -->
            <div class="mb-3 row">
              <label for="gstin" class="col-sm-4 col-form-label text-end"
                >GSTIN</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control"
                  id="gstin"
                  rows="2"
                  v-model="post.gstNumber"
                />
              </div>
            </div>

            <!-- GST Photo row -->
            <div class="mb-3 row">
              <label for="gstphoto" class="col-sm-4 col-form-label text-end"
                >GST Photo</label
              >
              <div class="col-sm-8">
                <input
                  type="file"
                  class="form-control"
                  id="gstphoto"
                  rows="2"
                />
              </div>
            </div>

            <!-- Remarks row -->
            <div class="mb-3 row">
              <label for="remarks" class="col-sm-4 col-form-label text-end"
                >Remarks</label
              >
              <div class="col-sm-8">
                <textarea
                  class="form-control"
                  id="remarks"
                  rows="2"
                  v-model="post.remarks"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              <router-link to="/supplierbankdetails" class="textcolor"
                >Next</router-link
              >
            </a>
          </li>
        </ul>

        <button type="submit" class="btn btn-danger from-control">
          Add Supplier
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, numeric, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "SupplierAdd",
  data() {
    return {
      post: {
        fullname: "",
        address: "",
        state: "",
        district: "",
        pin: "",
        phone1: "",
        phone2: "",
        email1: "",
        email2: "",
        website: "",
        contactPersonName: "",
        contactPersonPhone: "",
        panNumber: "",
        tanNumber: "",
        gstNumber: "",
        remarks: "",
      },
      isSubmitted: false,

      selectedState: "",
      selectedDistrict: "",
      states: [
        {
          name: "Andhra Pradesh",
          districts: [
            "Alluri Sitharama Raju",
            "Anakapalli",
            "Ananthapuram",
            "Annamayya",
            "Bapatla",
            "Chittoor",
            "East Godavari",
            "Eluru",
            "Guntur",
            "Kakinada",
            "Kona Seema",
            "Krishna",
            "Kurnool",
            "Manyam",
            "NTR District",
            "Nandyal",
            "Palnadu",
            "Prakasam",
            "SPS Nellore",
            "Sri Satyasai District",
            "Sri. Balaji Dist",
            "Srikakulam",
            "Vishakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa",
          ],
        },
        {
          name: "Arunachal Pradesh",
          districts: [
            "Anjaw",
            "Capital Complex Itanagar",
            "Changlang",
            "Dibang Valley",
            "East Kameng",
            "East Siang",
            "Kamle",
            "Kra Daadi",
            "Kurung Kumey",
            "Lepa Rada",
            "Lohit",
            "Longding",
            "Longding",
            "Lower Siang",
            "Lower Subansiri",
            "Namsai",
            "Pakke Kessang",
            "Papum Pare",
            "SHI YOMI",
            "Siang",
            "Tawang",
            "Tirap",
            "Upper Siang",
            "Upper Subansiri",
            "West Kameng",
            "West Siang",
          ],
        },
        {
          name: "Assam",
          districts: [
            "Baksa",
            "Barpeta",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Dima Hasao",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong",
          ],
        },
        {
          name: "Bihar",
          districts: [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Khagaria",
            "Kishanganj",
            "Kaimur",
            "Katihar",
            "Lakhisarai",
            "Madhubani",
            "Munger",
            "Madhepura",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Sheohar",
            "Sheikhpura",
            "Saran",
            "Sitamarhi",
            "Supaul",
            "Siwan",
            "Vaishali",
            "West Champaran",
          ],
        },
        {
          name: "Chhattisgarh",
          districts: [
            "Sakti",
            "Durg",
            "Sukma",
            "Gariaband",
            "Bemetara",
            "Khairagarh-Chhuikhadan-Gandai",
            "Chowki",
            "Balod",
            "Jashpur",
            "Manendragarh-Chirmiri-Bharatpur",
            "Surguja",
            "Dhamtari",
            "Baloda Bazar",
            "Raigarh",
            "Surajpur",
            "Kanker",
            "Bilaspur",
            "Dantewada",
            "Mahasamund",
            "Janjgir-Champa",
            "Bastar",
            "Mohla-Manpur",
            "Raipur",
            "Kondagaon",
            "Kabirdham",
            "Bijapur",
            "Sarangarh-Bilaigarh",
            "Rajnandgaon",
            "Balrampur",
            "Gaurella-Pendra-Marwahi",
            "Koriya",
            "Narayanpur",
            "Mungeli",
          ],
        },
        { name: "Goa", districts: ["North Goa", "South Goa"] },
        {
          name: "Gujarat",
          districts: [
            "Amreli",
            "Aravalli",
            "Bharuch",
            "Dahod",
            "Botad",
            "Devbhoomi Dwarka",
            "Junagadh",
            "Gir Somnath",
            "Kheda",
            "Narmada",
            "Mehsana",
            "Panchmahal",
            "Sabarkantha",
            "Porbandar",
            "Surendranagar",
            "Ahmedabad",
            "Vadodara",
            "Anand",
            "Chhota Udaipur",
            "Banaskantha",
            "Gandhinagar",
            "Bhavnagar",
            "Dang",
            "Kutch",
            "Jamnagar",
            "Morbi",
            "Mahisagar",
            "Patan",
            "Navsari",
            "Surat",
            "Tapi",
            "Rajkot",
            "Valsad",
          ],
        },
        {
          name: "Haryana",
          districts: [
            "Ambala",
            "Charkhi Dadri",
            "Fatehabad",
            "Hisar",
            "Jind",
            "Karnal",
            "Mahendragarh",
            "Palwal",
            "Panipat",
            "Rohtak",
            "Sonipat",
            "Bhiwani",
            "Faridabad",
            "Gurugram",
            "Jhajjar",
            "Kaithal",
            "Kurukshetra",
            "Nuh",
            "Panchkula",
            "Rewari",
            "Sirsa",
            "Yamunanagar",
          ],
        },
        {
          name: "Himachal Pradesh",
          districts: [
            "Chamba",
            "Shimla",
            "Kullu",
            "Hamirpur",
            "Bilaspur",
            "Kangra",
            "Lahaul and Spiti",
            "Kinnaur",
            "Solan",
            "Mandi",
            "Simraur",
            "Una",
          ],
        },
        {
          name: "Jharkhand",
          districts: [
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribagh",
            "Jamtara",
            "Khunti",
            "Kodarma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Saraikela Kharsawan",
            "Simdega",
            "West Singhbhum",
          ],
        },
        {
          name: "Karnataka",
          districts: [
            "Bengaluru Urban",
            "Belagavi",
            "Bidar",
            "Chamarajanagara",
            "Chikkamagaluru",
            "Dakshina Kannada",
            "Dharwad",
            "Kalaburagi",
            "Haveri",
            "Kolara",
            "Mandya",
            "Raichur",
            "Shivamogga",
            "Udupi",
            "Vijayanagara",
            "Uttara Kannada",
            "Yadgiri",
            "Tumakuru",
            "Ramanagara",
            "Mysuru",
            "Koppala",
            "Kodagu",
            "Hassan",
            "Gadag",
            "Davanagere",
            "Chitradurga",
            "Chikkaballapura",
            "Vijayapura",
            "Ballary",
            "Bengaluru Rural",
            "Bagalkote",
          ],
        },
        {
          name: "Kerala",
          districts: [
            "Ernakulam",
            "Kannur",
            "Kollam",
            "Kozhikode",
            "Palakkad",
            "Thiruvananthapuram",
            "Wayanad",
            "Alappuzha",
            "Idukki",
            "Kasaragod",
            "Kottayam",
            "Malappuram",
            "Pathanamthitta",
            "Thrissur",
          ],
        },
        {
          name: "Madhya Pradesh",
          districts: [
            "Bhopal",
            "Raisen",
            "Rajgarh",
            "Sehore",
            "Vidisha",
            "Bhind",
            "Morena",
            "Sheopur",
            "Ashoknagar",
            "Datia",
            "Guna",
            "Gwalior",
            "Shivpuri",
            "Indore",
            "Barwani",
            "Burhanpur",
            "Dhar",
            "Jhabua",
            "Khandwa",
            "Khargone",
            "Alirajpur",
            "Balaghat",
            "Chhindwara",
            "Jabalpur",
            "Katni",
            "Mandla",
            "Narsinghpur",
            "Dindori",
            "Seoni",
            "Narmadapuram",
            "Harda",
            "Betul",
            "Rewa",
            "Satna",
            "Sidhi",
            "Singrauli",
            "Sagar",
            "Chhatarpur",
            "Damoh",
            "Panna",
            "Tikamgarh",
            "Niwari",
            "Shahdol",
            "Umaria",
            "Anuppur",
            "Dewas",
            "Mandsaur",
            "Neemuch",
            "Ratlam",
            "Shajapur",
            "Agar Malwa",
            "Ujjain",
          ],
        },
        {
          name: "Maharashtra",
          districts: [
            "Yavatmal",
            "Wardha",
            "Thane",
            "Solapur",
            "Satara",
            "Sangli",
            "Ratnagiri",
            "Raigad",
            "Pune",
            "Parbhani",
            "Osmanabad",
            "Nashik",
            "Nanded",
            "Nagpur",
            "Mumbai City",
            "Kolhapur",
            "Jalgaon",
            "Dhule",
            "Chandrapur",
            "Buldhana",
            "Bhandara",
            "Beed",
            "Aurangabad",
            "Amravati",
            "Ahmadnagar",
            "Akola",
          ],
        },
        {
          name: "Manipur",
          districts: [
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi (Sadar Hills)",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul",
          ],
        },
        {
          name: "Meghalaya",
          districts: [
            "North Garo Hills",
            "East Garo Hills",
            "South Garo Hills",
            "West Garo Hills",
            "South West Garo Hills",
            "West Jaintia Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "West Khasi Hills",
            "South West Khasi Hills",
            "Eastern West Khasi Hills",
            "Ri-Bhoi",
          ],
        },
        {
          name: "Mizoram",
          districts: [
            "Aizawl",
            "Champhai",
            "Hnahthial",
            "Khawzawl",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Saitual",
            "Serchhip",
          ],
        },
        {
          name: "Nagaland",
          districts: [
            "Chümoukedima District",
            "Dimapur District",
            "Kiphire District",
            "Kohima District",
            "Longleng District",
            "Mokokchung District",
            "Mon District",
            "Niuland District",
            "Noklak District",
            "Peren District",
            "Phek District",
            "Shamator District",
            "Tseminyü District",
            "Tuensang District",
            "Wokha District",
            "Zünheboto District",
          ],
        },
        {
          name: "Odisha",
          districts: [
            "Angul",
            "Balangir",
            "Balasore",
            "Cuttack",
            "Dhenkanal",
            "Gajapati",
            "Jajpur",
            "Khordha",
            "Kalahandi",
            "Koraput",
            "Malkangiri",
            "Nabarangpur",
            "Nayagarh",
            "Rayagada",
            "Subarnapur",
            "Boudh",
            "Bargarh",
            "Bhadrak",
            "Debagarh",
            "Ganjam",
            "Jharsuguda",
            "Jagatsinghapur",
            "Kendujhar",
            "Kandhamal",
            "Kendrapara",
            "Mayurbhanj",
            "Nuapada",
            "Puri",
            "Sambalpur",
            "Sundargarh",
          ],
        },
        {
          name: "Punjab",
          districts: [
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Firozpur",
            "Fazilka",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Malerkotla",
            "Mansa",
            "Moga",
            "Sri Muktsar Sahib",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar",
            "Sangrur",
            "Shahid Bhagat Singh Nagar",
            "Tarn Taran",
          ],
        },
        {
          name: "Rajasthan",
          districts: [
            "Ajmer",
            "Kota",
            "Udaipur",
            "Jaipur",
            "Jaisalmer",
            "Bhilwara",
            "Rajsamand",
            "Sirohi",
            "Dungarpur",
            "Jalore",
            "Banswara",
            "Pali",
            "Sri Ganganagar",
            "Pratapgarh",
            "Sawai Madhopur",
            "Barmer",
            "Chittorgarh",
            "Sikar",
            "Jhalawar",
            "Bundi",
            "Dausa",
            "Karauli",
            "Nagaur",
            "Churu",
            "Dholpur",
            "Jhunjhunu",
            "Hanumangarh",
            "Bikaner",
            "Jodhpur",
            "Alwar",
            "Tonk",
            "Bharatpur",
            "Baran",
          ],
        },
        {
          name: "Sikkim",
          districts: [
            "Mangan",
            "Namchi",
            "Gyalshing or Geyzing",
            "Pakyong",
            "Soreng",
            "Gangtok",
          ],
        },
        {
          name: "Tamil Nadu",
          districts: [
            "Ariyalur",
            "Chengalpattu",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kanchipuram",
            "Kanniyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Mayiladuthurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivagangai",
            "Tenkasi",
            "Thanjavur",
            "Theni",
            "Thoothukudi",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar",
          ],
        },
        {
          name: "Telangana",
          districts: [
            "Adilabad",
            "Kumuram Bheem",
            "Mancherial",
            "Nirmal",
            "Nizamabad",
            "Jagitial",
            "Peddapalli",
            "Kamareddy",
            "Rajanna Sircilla",
            "Karimnagar",
            "Jayashankar",
            "Sangareddy",
            "Medak",
            "Siddipet",
            "Jangaon",
            "Hanamkonda",
            "Warangal",
            "Mulugu",
            "Bhadradri",
            "Khammam",
            "Mahabubabad",
            "Suryapet",
            "Nalgonda",
            "Yadadri",
            "Medchal–Malkajgiri",
            "Hyderabad",
            "Ranga Reddy",
            "Vikarabad",
            "Narayanpet",
            "Mahabubnagar",
            "Nagarkurnool",
            "Wanaparthy",
            "Jogulamba",
          ],
        },
        {
          name: "Tripura",
          districts: [
            "Dhalai",
            "Ambassa",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sipahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura",
          ],
        },
        { name: "Uttar Pradesh", districts: ["Lucknow", "Kanpur", "Agra"] },
        {
          name: "Uttarakhand",
          districts: [
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi",
          ],
        },
        {
          name: "West Bengal",
          districts: [
            "Alipurduar",
            "Bankura",
            "Paschim Bardhaman",
            "Purba Bardhaman",
            "Birbhum",
            "Cooch Behar",
            "Darjeeling",
            "Dakshin Dinajpur",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Jhargram",
            "Kolkata",
            "Kalimpong",
            "Malda",
            "Paschim Medinipur",
            "Purba Medinipur",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "South 24 Parganas",
            "Purulia",
            "Uttar Dinajpur",
          ],
        },
      ],
    };
  },

  validations: {
    post: {
      fullname: { required },
      panNumber: { required: (value) => !!value,
      validFormat: (value) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value),},
      contactPersonPhone : { required, 
        numeric, 
        minLength: minLength(10),
        maxLength: maxLength(10) },
        email1 : {required, email},
        email2 : { email }
    },
  },

  methods: {
    getDistrictsByState(stateName) {
      const state = this.states.find((state) => state.name === stateName);
      return state ? state.districts : [];
    },

    onSubmit(e) {
      this.isSubmitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      alert("Data submitted successfully");

      const formData = {
        fullname: this.post.fullname,
        address: this.post.address,
        state: this.selectedState,
        district: this.selectedDistrict,
        pin: this.post.pin,
        phone1: this.post.phone1,
        phone2: this.post.phone2,
        email1: this.post.email1,
        email2: this.post.email2,
        website: this.post.website,
        contactPersonName: this.post.contactPersonName,
        contactPersonPhone: this.post.contactPersonPhone,
        panNumber: this.post.panNumber,
        tanNumber: this.post.tanNumber,
        gstNumber: this.post.gstNumber,
        remarks: this.post.remarks,
      };

      axios
        .post("http://localhost:3000/posts", formData)
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
        fullname: "",
        address: "",
        state: "",
        district: "",
        pin: "",
        phone1: "",
        phone2: "",
        email1: "",
        email2: "",
        website: "",
        contactPersonName: "",
        contactPersonPhone: "",
        panNumber: "",
        tanNumber: "",
        gstNumber: "",
        remarks: "",
      };
    },
  },
};
</script>

<style scoped>
.textcolor {
  color: rgb(7, 147, 7) !important;
}
</style>
