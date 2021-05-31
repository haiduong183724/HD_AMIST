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
                <td class="small-td">{{employee.EmployeeCode}}</td>
                <td class="big-td">{{employee.EmployeeName}}</td>
                <td class="small-td">{{employee.Gender}}</td>
                <td class="small-td">{{employee.DateOfBirth}}</td>
                <td class="small-td">{{employee.IdentifyId}}</td>
                <td class="small-td">{{employee.Position}}</td>
                <td class="big-td">{{employee.CompanyName}}</td>
                <td class="small-td">{{employee.BankAccount}}</td>
                <td class="big-td">{{employee.BankName}}</td>
                <td class="big-td">{{employee.BankBranch}}</td>
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

import EventBus from "../event-bus";
export default {
  data(){
    return{
      employees:[
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },

        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },

        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
        {
          EmployeeCode:"2",
          EmployeeName:"1",
          Gender:"2",
          DateOfBirth:"3",
          IdentifyId:"2",
          Position:"1",
          CompanyName:"2",
          BankAccount:"3",
          BankName:"3",
          BankBranch:"2",
        },
      ],
    }
  }, 
  methods:{
    open_form(){
      EventBus.$emit('open_form', true);
    }
  }
}
</script>

<style scoped>
@import "../assets/style/content.css";
</style>