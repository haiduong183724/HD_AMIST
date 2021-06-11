.<template>
  <div class="form-wraper" @keyup.tab.exact='tabIndex()' @keyup.shift.tab.exact="shiftTab()" @keyup.esc.exact='closeForm()'>
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
                    <button ref="cacheFirst" ></button>
                </div>
                <div class="right-header">
                    <div class="pop-up-close">
                        <i class="material-icons" v-on:click="closeForm()">
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
                                FieldName = "Mã nhân viên" class="required" id = "employeeCode" ref="firstElement">
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
                                <!-- <input type="text"  v-model="employee.companyName" 
                                FieldName = "Tên đơn vị" class="required" id = "companyName"> -->
                                <div style="padding:5px 0">
                                    <ComboBox :height="32" :width="398" :data="selectData"/>
                                </div>
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
                                     FieldName = "Ngày sinh" id = "dateOfBirth" class="date-input-field">
                                    <i class="material-icons" v-on:click ="function(){isDateOfBirth = !isDateOfBirth }">
                                        calendar_today
                                    </i>

                                </div>
                                <div class="date__picker"  :class="{'show':isDateOfBirth}" >
                                    
                                    <v-date-picker
                                        v-model="employee.dateOfBirth"
                                        no-title
                                        locale="vi-VN"
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
                                <div class="item-center" style="height:32px; margin-top:10px">
                                    <input type="radio" name="gentle" value="0" v-model="employee.gender">
                                    <label class="gentle">Nam</label>
                                    <input type="radio" name="gentle" value="1" v-model="employee.gender">
                                    <label class="gentle">Nữ</label>
                                    <input type="radio" name="gentle" value="2" v-model="employee.gender">
                                    <label class="gentle">Khác</label>
                                </div>
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
                                    <input type="text" v-model="employee.dateOfIdentify" FieldName = "Ngày cấp" class="date-input-field">
                                    <i class="material-icons" v-on:click ="function(){isDate = !isDate }">
                                        calendar_today
                                    </i>

                                </div>
                                <div class="date__picker"  :class="{'show':isDate}" >
                                    <v-date-picker
                                        v-model="employee.dateOfIdentify"
                                        no-title
                                        scrollable
                                        locale="vi-VN"
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
                    <button class="btn btn-white" v-on:click = "closeForm()">
                        <div class="btn-text">Hủy</div>
                    </button>
                    <div class="right-btn item-center">
                        <button class="btn btn-white" v-on:click="Submit()">
                            <div class="btn-text">Cất</div>
                        </button>
                        <button class="btn btn-green" ref="lastElement">
                            <div class="btn-text">Cất và thêm</div>
                        </button>
                        <button ref="cacheLast" ></button>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>

import EventBus from "../event-bus";
const axios = require("axios");
import swal from 'sweetalert';
import ComboBox from '../components/ComboBox.vue';
export default {
components:{ComboBox },
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
        selectData:[
            {text:'Công ty cổ phần MISA', value: 1},
            {text:'Công ty vô cùng kì diệu', value: 2},
            {text:'Công ti kinh doanh đa cấp', value: 3},
        ]
    }
},
mounted(){
    let me = this;
    EventBus.$on("open_form", param =>{
        me.formMode = param.formMode;
        if(param.Employee != undefined){
            this.employee = param.Employee;
        }
        me.showform();
    });
},
updated(){

},
methods:{
    showform(){
        this.$el.classList.add('show');
        this.autofocus();
    },
     autofocus(){
        if(this.$refs.firstElement != undefined){
             this.$refs.firstElement.focus();
        }
    },
    closeForm(){
        this.employee = this.nullEmployee;
        this.$el.classList.remove('show');
        console.log("a");
        EventBus.$emit('focus');
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
                this.closeForm();
                swal("thêm dữ liệu thành công!");
            }
    }).catch(err =>{console.log(err)
        swal("thêm dữ liệu thất bại!");
    });
    },
    Edit(){
        axios.put("https://localhost:44300/api/v1/Employees", this.employee).then(response=>{

        if(response.data.isValid == true){
            EventBus.$emit("resetData", true);
            this.closeForm();
            swal(response.data.errorMsg[0]);
        }
    }).catch(err =>{console.log(err)});
    },
    tabIndex(){
        if(document.activeElement == this.$refs.cacheLast){
            this.$refs.firstElement.focus();
        }
        if(document.activeElement == document.getElementsByClassName("date-input-field")[0]){
            document.activeElement.parentElement.classList.add('active-field');
        }
        else{
            document.getElementsByClassName("date-input-field")[0].parentElement.classList.remove('active-field');
        }
        if(document.activeElement == document.getElementsByClassName("date-input-field")[1]){
            document.activeElement.parentElement.classList.add('active-field');
        }
        else{
            document.getElementsByClassName("date-input-field")[1].parentElement.classList.remove('active-field');
        }
    },
    shiftTab(){
        if(document.activeElement == this.$refs.cacheFirst){
            this.$refs.lastElement.focus();
        }
        if(document.activeElement == document.getElementsByClassName("date-input-field")[0]){
            document.activeElement.parentElement.classList.add('active-field');
        }
        else{
            document.getElementsByClassName("date-input-field")[0].parentElement.classList.remove('active-field');
        }
        if(document.activeElement == document.getElementsByClassName("date-input-field")[1]){
            document.activeElement.parentElement.classList.add('active-field');
        }
        else{
            document.getElementsByClassName("date-input-field")[1].parentElement.classList.remove('active-field');
        }
    }
},
computed: {
    computedDateFormatted () {
      return this.formatDate(this.employee.dateOfBirth)
    },
  },
  watched(){
    
  }
}
</script>

<style scoped>
@import "../assets/style/Form.css";

</style>