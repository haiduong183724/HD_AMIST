.<template>
  <div class="form-wraper" :class="{'show':isShow}" v-click-outside = "">
      <div class="form-content">
            <div class="form-header">
                <div class="left-header item-center">
                    <h1>Thông tin nhân viên</h1>
                    <label for="" class="checkbox-label">
                        <input type="checkbox" >
                        Là khách hàng
                    </label>
                    <label for="" class="checkbox-label">
                        <input type="checkbox" >
                        Là khách hàng
                    </label>
                </div>
                <div class="right-header">
                    <div class="pop-up-close">
                        <i class="material-icons" v-on:click="function(){isShow = false;resetForm();}">
                            close
                        </i>
                        <i class="material-icons">
                            help_outline
                        </i>
                    </div>
                </div>
            </div>
            <div class="content-wraper">
                <div class="head-content">
                    <div class="head-content-left">
                        <div class="input-row d-flex">
                            <div class="short_length">
                                <div class="title-input">
                                    Mã <p> *</p>
                                </div>
                                <input type="text" v-model="employee.employeeCode" 
                                FieldName = "Mã nhân viên" class="required" id = "employeeCode">
                            </div>
                            <div class="nor_length">
                                <div class="title-input">
                                    Tên <p> *</p>
                                </div>
                                <input type="text"  v-model="employee.employeeName"
                                FieldName = "Tên nhân viên" class="required" id = "employeeName">
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="max_length">
                                <div class="title-input">
                                    Đơn vị<p>*</p>
                                </div>
                                <input type="text"  v-model="employee.companyName" 
                                FieldName = "Tên đơn vị" class="required" id = "companyName">
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="max_length">
                                <div class="title-input">
                                    Chức danh <p></p>
                                </div>
                                <input type="text"  v-model="employee.position" 
                                FieldName = "Chức vụ" id = "position">
                            </div>
                        </div>
                    </div>
                    <div class="head-content-right">
                        <div class="input-row d-flex">
                            <div class="short_length">
                                <div class="title-input">
                                    Ngày sinh
                                </div>
                                <div class="date_input">
                                    <input type="text"  v-model="computedDateFormatted" 
                                    readonly FieldName = "Ngày sinh" id = "dateOfBirth">
                                    <span class="material-icons" v-on:click ="function(){isDateOfBirth = !isDateOfBirth }">
                                        calendar_today
                                    </span>

                                </div>
                                <div class="date__picker"  :class="{'show':isDateOfBirth}" >
                                    
                                    <v-date-picker
                                        v-model="employee.dateOfBirth"
                                        no-title
                                        locale="vn"
                                    >
                                    <div class="date_picker_footer">
                                        <a href="#"> Hôm nay</a>
                                    </div>
                                    </v-date-picker>
                                </div>
                            </div>
                            <div class="nor_length">
                                <div class="title-input">
                                    Giới tính
                                </div>
                                <input type="text"  v-model="employee.gender" 
                                FieldName = "Giới tính" id = "gender">
                            </div>
                        </div>
                        <div class="input-row d-flex">
                            <div class="nor_length">
                                <div class="title-input">
                                    Số CMND
                                </div>
                                <input type="text" v-model="employee.identifyId"
                                 FieldName = "Số CMND" id = " identifyId">
                            </div>
                            <div class="short_length">
                                <div class="title-input">
                                    Ngày cấp
                                </div>
                                <div class="date_input" >
                                    <input type="text" v-model="employee.dateOfIdentify" readonly FieldName = "Ngày cấp">
                                    <span class="material-icons" v-on:click ="function(){isDate = !isDate }">
                                        calendar_today
                                    </span>

                                </div>
                                <div class="date__picker"  :class="{'show':isDate}" >
                                    <v-date-picker
                                        v-model="employee.dateOfIdentify"
                                        no-title
                                        scrollable
                                        locale="vn"
                                    >
                                    <div class="date_picker_footer">
                                        <a href="#"> Hôm nay</a>
                                    </div>
                                    </v-date-picker>
                                </div>
                            </div>
                        </div>
                         <div class="input-row">
                            <div class="max_length">
                                <div class="title-input">
                                    Nơi cấp <p></p>
                                </div>
                                <input type="text" FieldName = "Nơi cấp">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-content">
                    <div class="input-row">
                        <div class="max_length">
                            <div class="title-input">
                                Địa chỉ<p></p>
                            </div>
                            <input type="text" FieldName = "Địa chỉ" >
                        </div>
                    </div>
                    <div class="input-row d-flex">
                            <div class="small_length">
                                <div class="title-input">
                                    ĐT di động 
                                </div>
                                <input type="text" FieldName = "ĐT di động" id ="mobilePhone">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    ĐT cố định 
                                </div>
                                <input type="text" FieldName = "ĐT cố định"  id = "HomePhone">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Email 
                                </div>
                                <input type="text"  id = "Email">
                            </div>
                    </div>
                    <div class="input-row d-flex">
                            <div class="small_length">
                                <div class="title-input">
                                    Tài khoản ngân hàng
                                </div>
                                <input type="text" v-model="employee.bankAccount"
                                 FieldName = "Tài khoản ngân hàng" id = "bankAccount">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Tên ngân hàng
                                </div>
                                <input type="text" v-model="employee.bankName" 
                                FieldName = "Tên ngân hàng" id = "bankName">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Chi nhánh 
                                </div>
                                <input type="text" v-model="employee.bankBranch"
                                 FieldName = "Chi nhánh" id = "bankBranch">
                            </div>
                    </div>
                </div>
                <div class="form-footer d-flex">
                    <button class="btn btn-white">
                        <div class="btn-text">Hủy</div>
                    </button>
                    <div class="right-btn item-center">
                        <button class="btn btn-white" v-on:click="Submit()">
                            <div class="btn-text">Cất</div>
                        </button>
                        <button class="btn btn-green">
                            <div class="btn-text">Cất và thêm</div>
                        </button>
                    </div>
                </div>
            </div>
            
      </div>
  </div>
</template>

<script>
import EventBus from "../event-bus";
const axios = require("axios");
export default {
    
data(){
    return{
        nullEmployee:{
            employeeCode : "",
            employeeName : "",
            gender : 1,
            dateOfBirth : "",
            identifyId : "",
            position : "",
            companyName : "",
            bankAccount : "",
            bankName : "",
            bankBranch : "",
            },
        employee :[],
        isShow:false,
        isDate:false,
        isDateOfBirth:false,
        formMode:"",
        formValid:true,
    }
},
created(){
    this.employee = this.nullEmployee;
},
mounted(){
    let me = this;
    EventBus.$on("open_form", param =>{
        this.resetForm();
        this.isShow = true;
        me.formMode = param.formMode;
        if(param.formMode == "Edit"){
            me.employee = param.Employee;
        }
    });
},
methods:{
    resetForm(){
        this.employee = this.nullEmployee;
    },
    formatDate (date) {
      if (!date) return null
      var [year, month, day] = date.split('-')
      day = day.substr(0,2);
      return `${day}/${month}/${year}`
    },
    checkValid(){
        this.formValid=true;
        this.checkNotEmpty();
        this.checkEmployeeCode();
    },
    checkNotEmpty(){
        let me = this, 
        requiredElement =  document.getElementsByClassName("required");
        for (let index = 0; index < requiredElement.length; index++) {
            if(requiredElement[index].value == ""){
                console.log( requiredElement[index]);
                let FieldName = requiredElement[index].getAttribute("FieldName");
                requiredElement[index].title = `${FieldName} không được để trống`;
                requiredElement[index].classList.add("invalidField");
                me.formValid = false;    
            }
            else{
                requiredElement[index].title = "";
                requiredElement[index].classList.remove("invalidField");
            }
        }
    },
    checkEmployeeCode(){
        let me = this,
            EmployeeCode = me.employee.employeeCode;
        if(EmployeeCode != ""){
            let employeeElement = document.getElementById("employeeCode");
            if(EmployeeCode.substr(0,2) != "MF" ){
                employeeElement.title = "Mã nhân viên không đúng định dạng";
                employeeElement.classList.add("invalidField");
                me.formValid = false;
            }
            else{
                employeeElement.title = "";
                employeeElement.classList.remove("invalidField");
            }
        }
    },
    Submit(){
        console.log(this.employee);
        this.checkValid();
        if(this.formValid){
            if(this.formMode == "Add"){
                this.Add();
            }
            if(this.formMode == "Edit"){
                this.Edit();
            }
        }
    },
    Add(){
        axios.post("https://localhost:44300/api/v1/Employees", this.employee).then(response=>{
            if(response.data.isValid == true){
                EventBus.$emit("resetData", true);
            }
    }).catch(err =>{console.log(err)});
    },
    Edit(){
        console.log(this.employee);
        axios.put("https://localhost:44300/api/v1/Employees", this.employee).then(response=>{
            console.log(response);
        if(response.data.isValid == true){
            EventBus.$emit("resetData", true);
            this.isShow = false;
        }
    }).catch(err =>{console.log(err)});
    },
},
computed: {
    computedDateFormatted () {
      return this.formatDate(this.employee.dateOfBirth)
    },
  },
}
</script>

<style scoped>
@import "../assets/style/Form.css";

</style>