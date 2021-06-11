.<template>
    <div class="wraper">
        <div class="pop-up-form d-flex">
            <div class="close-tag">
                <span class="material-icons">
                    clear
                </span>
            </div>
            <div class="popup-content">
                <div class="form-title">
                    <h2>{{title}}</h2>
                </div>
                <div class="form-content">
                    <div class="right-icon">
                        <img src="../assets/icon/avatar-default.png" alt="">
                    </div>
                    <div class="content-text">
                        <p>Bạn có chắc muốn đóng form nhập <span>"{{content}}"</span> hay không</p>
                    </div>
                </div>
                <div class="form-bottom">
                    <button class="btn green-btn">Đóng</button>
                    <button class="btn default-btn"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        content:String,
    },
    data(){
        return{

        }
    }
}
</script>


Form<style scoped>
    .wraper{
        display: flex;
        align-items: center;
        background: rgba(0, 0 ,0,0.5);
        justify-content: center;
        width: 100vw;
        height: 100vh; 
        z-index: 100;   
        display: none;
    }
    .d-flex{
        display: flex;
        flex-direction: column;
    }
    .pop-up-form{
        width:400px;
        height: 175px;
        background: white;
    }
    .close-tag{
        padding: 3px;
        display: flex;
        flex-direction: row-reverse;
        height: 24px;
        box-sizing:border-box ;
    }
    .close-tag i{
        cursor: pointer;
    }
    .popup-content{
        padding: 0 24px;
        flex: 1;
    }
    .form-title h2{
        padding: 0 24px 24px 0;
        font-family: 'GoogleSans-Bold';
        font-size:15px ;
    }
    .form-content{
        display: flex;
        height: 56px;
        padding-bottom:24px ;
    }
    .right-icon{
        height: 100%;
        border-radius: 50%;
        padding-right:10px ;
    }
    .right-icon img{
        height: 100%;
    }
    .content-text p{
        font-family: "GoogleSans-Regular";
        font-size: 13px;
    }
    .content-text span{
        font-family: "GoogleSans-Bold";
    }
    .form-bottom{
        padding: 0 10px;
        display: flex;
        flex-direction:row-reverse ;
    }
    .btn{
        height: 40px;
        font-family: "GoogleSans-Regular";
        font-size: 13px;
        margin-left: 16px;
        outline: 0;
        padding: 0 24px;
        min-width: 100px;
        border-radius: 4px;
    }
    .green-btn{
        background: #01B075;
    }
    .green-btn:hover{
        background: #019160;
    }
    .green-btn:active{
        background: #019160;
    }
    .default-btn:hover{
        background: #019160;
    }
    .default-btn:active{
        background: #019160;
    }
</style>