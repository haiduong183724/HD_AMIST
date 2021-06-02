<template>
  <div class="content">
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
                <a href="#" v-on:click="add()">
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
            <tr v-for="(item, index) in employees" :key="item.employeeId" :id = "index" v-on:click="InitrowSelected(index)">
              <td class="table-outline left"></td>
              <td class = "static" :class ="{'rowSelected': rowSelected == index}"><input type="checkbox" ></td>
              <div class="row_content">
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}"><p>{{item.employeeCode}}</p></td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.employeeName}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.gender}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{fomatDate(item.dateOfBirth)}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.identifyId}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.position}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.companyName}}</td>
                <td class="small-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankAccount}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankName}}</td>
                <td class="big-td" :class ="{'rowSelected': rowSelected == index}">{{item.bankBranch}}</td>
              </div>
              <td class="static-right" :class ="{'rowSelected': rowSelected == index}"  >
                <div class="item-center center">
                  <span v-on:click="edit(index)" >Sửa</span>
                  <div class="more_action">
                    <i class="material-icons">
                      arrow_drop_down
                    </i>
                    <div class="action">
                      <p>Xóa</p>
                      <p>Nhân bản</p>
                    </div>
                  </div>
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
      rowSelected:0,
    }
  }, 
  methods:{
    edit(index){
      let me = this, 
      param = {
        formMode :"Edit",
        Employee : me.employees[index],
      }
      me.open_form(param);
    },
    add(){
      let param = {
        formMode:"Add",
      }
      this.open_form(param);
    },
    open_form(param)
    {
      EventBus.$emit('open_form', param);
    },
    fomatDate(datesrc){
      let date = new Date(datesrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
    },
    InitrowSelected(index){
      this.rowSelected = index;
    },
    async reLoadData(){
      this.$emit('showloading');
      await axios.get("https://localhost:44300/api/v1/Employees").then(response=>{
      this.employees = response.data.slice().reverse();
      this.$emit('hideloading');
    });
    }
  },
  
  mounted(){
    axios.get("https://localhost:44300/api/v1/Employees").then(response=>{
      this.employees = response.data;
    });
    EventBus.$on('resetData', param =>{
      if(param){
        this.reLoadData();
      }
    })
  },
}
</script>

<style scoped>
@import "../assets/style/content.css";
</style>