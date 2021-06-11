<template>
  <div class="content" @keyup.down.exact='nextSelect()' @keyup.up.exact = " preSelect()" @keyup.enter.exact = "edit(rowSelected)" @keyup.left=" prePage()" @keyup.right="nextPage()"
    @keyup.ctrl.81="shortcut(add())"
  >
      <div class="action" v-bind:style="{left:xClick, top:yClick}">
        <p v-on:click ="Delete()" >Xóa</p>
        <p v-on:click ="Clone()">Nhân bản</p>
      </div>
      <div class="header-content">
        <div class="top-header">
          <h1>Nhân viên</h1>
          <div class="right-header">
              <a href="#">
                Tiện ích
                <i class="material-icons">
                  arrow_drop_down
                </i>
              </a>
              <div class="add-btn">
                <a href="#" v-on:click="add()" style="color:white">
                Thêm
                </a>
                <a href="#">
                  <i class="material-icons">
                    arrow_drop_down
                  </i>
                </a>
              </div>    
          </div>
        </div>
        <div class="bottom-header">
          <a href="#">
            <i class="material-icons">
              chevron_left
            </i> Tất cả danh mục
          </a>
        </div>
      </div>
      <div class="table-content">
        <div class="table-header">
            <a href="#">
              Thực hiện hàng loạt
               <i class="material-icons">
                  arrow_drop_down
                </i>
            </a>
            <div class="right-table-header item-center">
              <div class="filter-input item-center">
                <input type="text" placeholder="Tìm kiếm theo mã, tên nhân viên" v-model="findKeyWord" v-on:input = "findEmployee()" ref="findEmploy"> 
                <i class="material-icons">
                  search
                </i>
              </div>
              <i class="material-icons" v-on:click="reLoadData()">
                refresh
              </i>
              <i>
                <img src="https://img.icons8.com/windows/32/000000/ms-excel.png"/>
              </i>
              <i class="material-icons">
                settings
              </i>
            </div>
        </div>
        <div class="table-wraper">
          <table>
          <thead>
            <tr>
              <th class="table-outline left"></th>
            <th class = "static">
              <span>
                <input type="checkbox">
              </span>
            </th>
            <div class="head-title">
            <th class="small-td top-static"><p>MÃ NHÂN VIÊN</p></th>
            <th class="big-td">TÊN NHÂN VIÊN</th>
            <th class="small-td">GIỚI TÍNH</th>
            <th class="small-td">NGÀY SINH</th>
            <th class="small-td">SỐ CMND</th>
            <th class="small-td">CHỨC DANH</th>
            <th class="big-td">TÊN ĐƠN VỊ</th>
            <th class="small-td">SỐ TÀI KHOẢN</th>
            <th class="big-td">TÊN NGÂN HÀNG</th>
            <th class="big-td">CHI NHÁNH TK NGÂN HÀNG</th>
            </div>
            <th class="static-right">
              <span>CHỨC NĂNG</span>   
            </th>
            <th class="table-outline right"></th>
            </tr>
          </thead>
          <tbody style="display:contents">
            <tr v-for="(item, index) in employees.slice((pageNum-1)*numRecordOnPage, pageNum*numRecordOnPage)" :key="item.employeeId" :id = "index"  v-on:click="InitrowSelected(index)">
              <td class="table-outline left"></td>
              <td class = "static" :class ="{'rowSelected': rowSelected == index}"><input type="checkbox" ></td>
              <div class="row_content">
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}"><p>{{item.employeeCode}}</p></td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.employeeName}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{fomatGender(item.gender)}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{fomatDate(item.dateOfBirth)}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.identifyId}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.position}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.companyName}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankAccount}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankName}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankBranch}}</td>
              </div>
              <td class="static-right" :class ="{'rowSelected': rowSelected == index}"  >
                <div class="item-center d-right">
                  
                  <div class="more_action">
                    <i class="material-icons" v-on:click ="function(event){openMoreSelect(event,index)}">
                      arrow_drop_down
                    </i>
                  </div>
                  <span v-on:click="edit(index)" >Sửa</span>
                </div>
              </td>
              <td class="table-outline right"></td>
            </tr>
          </tbody>
        </table>
        </div>
        
      </div>
      <div class="main-footer">
        <p>Tổng số: <b>{{employees.length}}</b> bản ghi</p>
        <div class="paging-footer item-center">
          <select v-model = "numRecordOnPage" v-on:change = "onChange">
            <option v-for="option in options" :key = "option.value" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <div class="page_mark item-center">
              <p v-for="item in pageList" :key="item" v-on:click = "changeToPage(item)">{{item}}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
const axios = require("axios");
import EventBus from "../event-bus";
import swal from 'sweetalert';

export default {
  directives: {
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  }
  },
  data(){
    return{
      employees:[],
      cacheEmployees:[],
      rowSelected:0,
      xClick:'100px',
      yClick:'100px',
      ownSelection:-1,
      numRecordOnPage: 10,
      pageNum : 1,
      pageList:[],
      findKeyWord:'',
    options: [
      { text: '10 bản ghi trong 1 trang', value: 10 },
      { text: '20 bản ghi trong 1 trang', value: 20 },
    ],
    employeesFindList:[]
    }
  },
  methods:{
    // Hiển thị select Xóa, nhân bản khi nhấn expand more
    openMoreSelect(event, index){
      // hiển thị
        if(this.ownSelection != index){
          this.xClick =`${event.clientX.toString()}px`;
          this.yClick =`${event.clientY.toString()}px`;
          document.getElementsByClassName("action")[0].classList.add("expand_more");
          this.ownSelection = index;
        }
      // nhấn lần nữa để ẩn
        else{
          document.getElementsByClassName("action")[0].classList.remove("expand_more");
          this.ownSelection = -1;
        } 
    },

    // tạo danh sách các trang
    createPageList(){
      let me = this,
      numPage = Math.floor(me.employees.length/me.numRecordOnPage);
      me.pageList = [];
      if(me.employees.length % me.numRecordOnPage != 0){
        numPage++;
      }
      for (let index = 0; index < numPage; index++) {
          me.pageList.push(index+1);        
      }
    },

    // hàm xử lý sự kiện thay đổi số bản ghi trên 1 trang
    onChange(){
      this.createPageList();
      this.pageNum = 1;
    },

    // Gọi đến chức năng chỉnh sửa
    edit(index){
      let me = this, 
      param = {
        formMode :"Edit",
        Employee : me.employees[index],
      }
      me.open_form(param);
    },

    // gọi đến chức năng thêm
    async add(){
      let newEmployee = {},
      newEmployeeCode = "";
      await axios.get("https://localhost:44300/api/v1/Employees/NewCode").then(response=>{
        if(response.data.isValid == true){
          newEmployeeCode = response.data.data[0];
          newEmployee.employeeCode = newEmployeeCode;
          newEmployee.gender = 0;
        }
      }).catch(err=>{
        swal("Load dữ liệu thất bại");
        console.log(err);
      });
      let param = {
        formMode:"Add",
        Employee:newEmployee,
      }
      this.open_form(param);
    },

    // Hàm xóa đối tượng đang chọn
    Delete(){
      let EmployeeID = this.employees[this.rowSelected].employeeId,
          url = "https://localhost:44300/api/v1/Employees/"+EmployeeID;
          console.log(url);
          axios.delete(url).then(response =>{
            if(response.data.isValid == false){
              swal("Xóa dữ liệu thất bại!");
            }
            else{
              swal("Xóa dữ liệu thành công!");
              this.reLoadData();
              document.getElementsByClassName("action")[0].classList.remove("expand_more");
            }

          }).catch(err =>{
            console.log(err);
          })
    },

    // Hàm nhân bản đối tượng đang chọn
    async Clone(){
      // khai báo
      let me = this,
        newEmployee = me.employees[this.rowSelected],
        newEmployeeCode = "";
        // tạo mã nhân viên mới
      await axios.get("https://localhost:44300/api/v1/Employees/NewCode").then(response=>{
        if(response.data.isValid == true){
          newEmployeeCode = response.data.data[0];
          newEmployee.employeeCode = newEmployeeCode;
        }
      }).catch(err=>{
        swal("Load dữ liệu thất bại");
        console.log(err);
      });
      let param = {
        formMode :"Add",
        Employee : newEmployee,
      }
      me.open_form(param);
      document.getElementsByClassName("action")[0].classList.remove("expand_more");
    },

    // gọi đến chức năng mở form
    open_form(param)
    {
      EventBus.$emit('open_form', param);
    },

    // fomat lại ngày
    fomatDate(datesrc){
      let date = new Date(datesrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');
      return `${day}/${month}/${year}`;
    },
    // Xử lý khi có một cột được chọn
    InitrowSelected(index){
      this.rowSelected = index;
    },
    // Hàm reload lại dữ liệu
    async reLoadData(){
      this.$emit('showloading');
      await axios.get("https://localhost:44300/api/v1/Employees").then(response=>{
      this.employees = response.data.data[0].slice().reverse();
      this.cacheEmployees = this.employees;
      this.$emit('hideloading');
      this.$refs.findEmploy.focus();
    }).catch(err=>{
      swal("Load dữ liệu thất bại");
      console.log(err);
      this.$emit('hideloading');
    });
    },

    // hàm tạo danh sách các nhân viên ứng với kq tìm kiếm
    findEmployee(){
      let me = this,
      keyword = me.findKeyWord.toLowerCase();
      me.employeesFindList = [];
      me.cacheEmployees.filter(employee=>{
        let Code = employee.employeeCode.toLowerCase(),
            Name = employee.employeeName.toLowerCase();
        if(Code.search(keyword) != -1 || Name.search(keyword) != -1){
          me.employeesFindList.push(employee);
        }
      });
      me.employees = me.employeesFindList;
      this.createPageList();
    },
    nextSelect(){
      if(this.rowSelected < this.employees.length-1)
        this.rowSelected++;
    },
    preSelect(){
      if(this.rowSelected>0){
        this.rowSelected--;
      }
    },
    nextPage(){
      if(this.pageNum < this.pageList.length){
        this.pageNum++;
        this.rowSelected = 0;
      }
    },
    prePage(){
      if(this.pageNum>1){
        this.pageNum--;
        this.rowSelected = 0;
      }
    },
    changeToPage(index){
      if(index<=this.pageList.length && index>0){
        this.pageNum = index;
        this.rowSelected=0;
      }
      this.$refs.findEmploy.focus();
    },
    shortcut(funcCallBack){
      funcCallBack();
      let e = window.event;
      e.preventDefault();
    },
    fomatGender(gender){
      switch(gender){
        case 0: return 'Nam';
        case 1: return 'Nữ';
        case 2: return 'Khác';
      }
    }
  },
  // Khi khởi tạo: load dữ liệu lên bảng
  async created(){
    await this.reLoadData();
    this.createPageList();
    // Gửi thông điệp mở form
    
  },
  updated(){
    if(this.findKeyWord == ""){
      this.employees = this.cacheEmployees;
    }
  },
  mounted(){
    EventBus.$on('resetData', param =>{
      if(param){
        this.reLoadData();
      }
    });
    EventBus.$on('focus',()=>{
      this.$refs.findEmploy.focus();
    });
  }
}
</script>

<style scoped>
@import "../assets/style/content.css";
</style>