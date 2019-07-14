<template>
    
    <div class="container">

        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="value in list" :key="value.id">
                <img :src="value.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu1(1).png" alt="">
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu2.png" alt="">                    
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu3.png" alt="">                    
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu4.png" alt="">                    
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu5.png" alt="">
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../images/menu6.png" alt="">
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 

    </div>

</template>

<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created() {
        this.getLunbo()
    },
    methods: {
        getLunbo(){
            this.axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res=>{
                if(res.status ===200){
                    this.list = res.data.message
                }
            })
        }
    },
}

</script>


<style lang="less" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff !important;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-media{
        border:none !important;
        
    }
    .mui-grid-view.mui-grid-9 {
        
        
    }

</style>