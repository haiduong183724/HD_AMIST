.<template>
  <div class="form-wraper" :class="{'show':isShow}">
      <div class="form-content">
            <div class="form-header">
                <div class="left-header item-center">
                    <h1>Thông tin nhân viên</h1>
                    <label for="" class="checkbox-label">
                        <input type="checkbox" name="" id="">
                        Là khách hàng
                    </label>
                    <label for="" class="checkbox-label">
                        <input type="checkbox" name="" id="">
                        Là khách hàng
                    </label>
                </div>
                <div class="right-header">
                    <div class="pop-up-close">
                        <i class="material-icons" v-on:click="function(){isShow = false}">
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
                                <input type="text" name="" id="" v-model="employee.EmployeeCode">
                            </div>
                            <div class="nor_length">
                                <div class="title-input">
                                    Tên <p> *</p>
                                </div>
                                <input type="text" name="" id="" v-model="employee.EmployeeName">
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="max_length">
                                <div class="title-input">
                                    Đơn vị<p>*</p>
                                </div>
                                <input type="text" name="" id="" v-model="employee.CompanyName">
                            </div>
                        </div>
                        <div class="input-row">
                            <div class="max_length">
                                <div class="title-input">
                                    Chức danh <p></p>
                                </div>
                                <input type="text" name="" id="" v-model="employee.Position">
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
                                    <input type="text" name="" id="" v-model="employee.DateOfBirth">
                                    <span class="material-icons" v-on:click ="function(){isDateOfBirth = !isDateOfBirth }">
                                        calendar_today
                                    </span>

                                </div>
                                <div class="date__picker"  :class="{'show':isDateOfBirth}">
                                    <v-date-picker
                                        v-model="employee.DateOfBirth"
                                        no-title
                                        scrollable
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
                                <input type="text" name="" id="" v-model="employee.Gender">
                            </div>
                        </div>
                        <div class="input-row d-flex">
                            <div class="nor_length">
                                <div class="title-input">
                                    Số CMND
                                </div>
                                <input type="text" name="" id="">
                            </div>
                            <div class="short_length">
                                <div class="title-input">
                                    Ngày cấp
                                </div>
                                <div class="date_input">
                                    <input type="text" name="" id="">
                                    <span class="material-icons" v-on:click ="function(){isDate = !isDate }">
                                        calendar_today
                                    </span>

                                </div>
                                <div class="date__picker"  :class="{'show':isDate}">
                                    <v-date-picker
                                        v-model="date"
                                        no-title
                                        scrollable
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
                                <input type="text" name="" id="">
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
                            <input type="text" name="" id="">
                        </div>
                    </div>
                    <div class="input-row d-flex">
                            <div class="small_length">
                                <div class="title-input">
                                    ĐT di động 
                                </div>
                                <input type="text" name="" id="">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    ĐT cố định 
                                </div>
                                <input type="text" name="" id="">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Email 
                                </div>
                                <input type="text" name="" id="">
                            </div>
                    </div>
                    <div class="input-row d-flex">
                            <div class="small_length">
                                <div class="title-input">
                                    Tài khoản ngân hàng
                                </div>
                                <input type="text" name="" id="">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Tên ngân hàng
                                </div>
                                <input type="text" name="" id="">
                            </div>
                            <div class="small_length">
                                <div class="title-input">
                                    Chi nhánh 
                                </div>
                                <input type="text" name="" id="">
                            </div>
                    </div>
                </div>
                <div class="form-footer d-flex">
                    <button class="btn btn-white">
                        <div class="btn-text">Hủy</div>
                    </button>
                    <div class="right-btn item-center">
                        <button class="btn btn-white">
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
export default {
data(){
    return{
        employee:[],
        isShow:false,
        isDate:false,
        isDateOfBirth:false,
    }
},
mounted(){
    EventBus.$on("open_form", param =>{
        this.isShow = param;
    })
}
}
</script>

<style scoped>
@import "../assets/style/Form.css";

</style>