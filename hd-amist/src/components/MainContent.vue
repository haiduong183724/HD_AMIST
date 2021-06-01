<template>
  <div class="content">
      <div class="header-content">
        <div class="top-header">
          <h1>Nhân viên</h1>
          <div class="right-header">
              <a href="">
                Tiện ích
                <i class="material-icons">
                  arrow_drop_down
                </i>
              </a>
              <div class="add-btn">
                <a href="#" v-on:click="open_form()">
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
                <input type="text" placeholder="Tìm kiếm theo mã, tên nhân viên">
                <i class="material-icons">
                  search
                </i>
              </div>
              <i class="material-icons">
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
            <th class="small-td top-static">MÃ NHÂN VIÊN</th>
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
          <tbody>
            <tr v-for="(employee, index) in employees" :key="index">
              <td class="table-outline left"></td>
              <td class = "static"><input type="checkbox"></td>
              <div>
                <td class="small-td">{{employee.employeeCode}}</td>
                <td class="big-td">{{employee.employeeName}}</td>
                <td class="small-td">{{employee.gender}}</td>
                <td class="small-td">{{fomatDate(employee.dateOfBirth)}}</td>
                <td class="small-td">{{employee.identifyId}}</td>
                <td class="small-td">{{employee.position}}</td>
                <td class="big-td">{{employee.companyName}}</td>
                <td class="small-td">{{employee.bankAccount}}</td>
                <td class="big-td">{{employee.bankName}}</td>
                <td class="big-td">{{employee.bankBranch}}</td>
              </div>
              <td class="static-right">
                <div>
                  Sửa
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
        
      </div>
  </div>
</template>

<script>
const axios = require("axios");
import EventBus from "../event-bus";
export default {
  data(){
    return{
      employees:[],
    }
  }, 
  methods:{
    open_form(){
      EventBus.$emit('open_form', true);
    },
    fomatDate(datesrc){
      let date = new Date(datesrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
    }
  },
  mounted(){
    axios.get("https://localhost:44300/api/v1/Employees").then(response=>{
      console.log(response.data);
      this.employees = response.data;
    });
  },
}
</script>

<style scoped>
@import "../assets/style/content.css";
</style>