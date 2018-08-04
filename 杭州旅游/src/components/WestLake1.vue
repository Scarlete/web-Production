<template>
  <div id="westlake">
    <Header :wake1 = "wake1"></Header>
    <div class="west-left">
			<HotMap
        :longitude ="longitude"
        :latitude="latitude"
        :mapScale="mapScale">
      </HotMap>
      <div class="tour-fly">

      </div>
			<div class="west-title">
				<p style="margin-top: 10px;">
          <img src="../../static/1.png"/>
          <span style="font-size: 18px; color: white;">公厕</span>
        </p>
				<p>
          <img src="../../static/3.png"/>
          <span style="font-size: 18px; color: white;">酒店</span>
        </p>
				<p>
          <img src="../../static/2.png"/>
          <span style="font-size: 18px; color: white;">餐饮</span>
        </p>
			</div>
			<div class="west-location">
				<div style="position: relative; top: -300px;left:580px;font-size: 10px;
					 background-color: black; width: 136px;height:32px; line-height:16px;
					 color: white;overflow: hidden; opacity: 0.8;">
          <p>您现在所在的位置<br/>南山路南端与苏堤交叉处</p>
        </div>

				<div style="position: relative; top: -538px;left:500px;font-size: 10px;
					 width: 120px;height:32px; line-height:16px;color: #0152B2;overflow: hidden;
					" v-if="pass"
             :class= "{ 'reds': pass[0].type ===0,
              'greens': pass[0].type ===1,
              'yellows': pass[0].type ===2} ">
					<p>华港公园内<br/>距您500米 步行6min</p>
				</div>
					<div style="position: relative; top: -508px;left:500px;font-size: 10px;
					 width: 120px;height:32px; line-height:16px;color: #0152B2;overflow: hidden;
					" v-if="pass"
               :class= "{ 'reds': pass[1].type ===0,
               'greens': pass[1].type ===1,
               'yellows': pass[1].type ===2} ">
					<p>太子湾内<br/>距您200米 步行2min</p>
			</div>
			<div style="position: relative; top: -500px;left:500px;font-size: 10px;
					 width: 120px;height:32px; line-height:16px;color: #0152B2;overflow: hidden;
					" v-if="pass"
           :class= "{ 'reds': pass[2].type ===0,
           'greens': pass[2].type ===1,
           'yellows': pass[2].type ===2} ">
					<p>海华满陇度假酒店内<br/>距您1.8km 步行30min</p>
			</div>
			<div style="position: relative; top: -484px;left:500px;font-size: 10px;
					 width: 120px;height:32px; line-height:16px;color: #0152B2;overflow: hidden;
					" id="location2" v-if="pass"
           :class= "{ 'reds': pass[2].type ===0,
           'greens': pass[2].type ===1,
           'yellows': pass[2].type ===2} ">
					<p>汉庭酒店(杭州虎跑路店)<br/>参考价:￥223</p>
			</div>

			</div>
    </div>
    <div class="west-right">
      <p class="west-p"><span class="west-span"></span>&nbsp;&nbsp;西湖风景区个景点<br/>&nbsp;&nbsp;&nbsp;实时客流量排行:</p>
      <div class="west-right-main">

        <div>
          <span class="west-num west-sp1">1</span>
          <p><span>{{pass[0].name}}:</span>
            {{pass[0].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <span class="west-num west-sp2">2</span>
          <p><span>{{pass[1].name}}:</span>
            {{pass[1].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <span class="west-num west-sp3">3</span>
          <p><span>{{pass[2].name}}:</span>
            {{pass[2].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <p><span>{{pass[3].name}}:</span>
            {{pass[3].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <p><span>{{pass[4].name}}:</span>
            {{pass[4].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <p><span>{{pass[5].name}}:</span>
            {{pass[5].count}}<span style="font-size: 12px;color: #FFFFC4;">人</span>
          </p>
        </div>
        <div>
          <p><span>{{pass[6].name}}:</span>
            {{pass[6].count}}<span style="font-size: 14px;color: #FFFFC4;">人</span>
          </p>
        </div>
      </div>
    <div class="west-footer">
      <p>人/车流量饱和度:</p>
      <p class="west-red">饱和度达90%以上</p>
      <p class="west-yellow">饱和30%-90%间</p>
      <p class="west-green">饱和度在30%以下</p>
    </div>
    </div>
  </div>
</template>

<script>
  import Header from "./test/Header.vue";
  import Hot from "./test/Hot.vue";
  import HotMap from "./HotMapWake.vue";
  import Map from "./test/Map.vue";
  import {scenicGuest} from "../api";
  export default {
    name: "westlake1",
    components: {
      Hot,
      Map,
      HotMap,
      Header
    },
    data(){
    	return{
    		longitude: 120.118284,
				latitude: 30.228182,
				mapScale: 15,
  			pass:[],
        wake1: true
    	}
    },
    mounted() {
    	this.myScenicGuest();
    },
    methods:{
    	async myScenicGuest() {
       let data = await scenicGuest();
       this.compares(data);
      },
    	compares(pass) {
          for(let h = 0; h < pass.length; h++){
                let cur = pass[h];
                if(cur.count<3000){
                      cur.type = 0;
                  } else if(cur.count<=4600){
                            cur.type = 1;
                    }else{
                      cur.type = 2;
                    }
          }
   	          this.pass = pass;
    	    }
    	}
  }

</script>

<style lang="less" scoped>


  /*一机游*/
  .tour-fly {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10.7%;
    height: 25.8%;
    background: url("../../static/tour.jpg") no-repeat;
    background-size: 100% 100%;
  }
  #westlake {
    height: 100%;
    background: #001B47;
  }
  .west-left{
    width: 80%;
    height: 85%;
    border: 1px solid #16A2BF;
    margin-left: 2.5%;
    float: left;
    position: relative;
  }
  .west-right{
    width: 17%;
    height: 85%;
    float: left;
  }
  .west-p{
    color:#F5F6B1;
    font-size: 16px;
  }
  .west-p .west-span{
     display: inline-block;
     width: 5px;
     height: 35px;
     background:#12C2D7;
     position: relative;
     top: 10px;
     left: 8px;
}
  .west-right-main{
    margin-top: 15%;
    color: #FFFFC4;

  }
  .west-right-main div{
    background-color: #00102A;
   /* height: 46px;*/
    height: 35px;
    width: 88%;
    border:2px solid #016889 ;
    margin-top: 3%;
    margin-left: 10%;
    line-height: 35px;
    font-size: 14px;
    letter-spacing: 1px;

  }
  .west-right-main div .west-num{
    display: inline-block;
    float: left;
    border: 2px solid #016889;
    background-color:#0D9AB6;
    font-weight: 600;
  }
  .west-right-main div .west-sp1{
    width: 28px;
    position: relative;
    left: -28px;
    top: -2px;
    text-align: center;
  }
  .west-right-main div .west-sp2{
    width: 21px;
    position: relative;
    text-align: center;
    left: -21px;
    top: -2px;
  }
  .west-right-main div .west-sp3{
    width: 15px;
    position: relative;
    text-align: center;
    left: -15px;
    top: -2px;
  }
  .west-right-main div p span{
    color:white ;
    text-align: left;
    font-size: 12px;
  }
  .west-footer{
    color: white;
    margin-top: 36%;
    margin-left: 13%;
  }
  .west-footer p{
    font-size: 14px;
    text-indent: 6px;
    letter-spacing: 1px;
  }
  .west-footer .west-red{
    background-color: red;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    text-align: left;
    width: 90%;
    margin-top: 6%;
    margin-bottom: 3%;
}
  .west-footer .west-yellow{
    background-color: #FBC100;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    text-align: left;
    margin-bottom: 3%;
    width: 90%;
  }
  .west-footer .west-green{
    background-color: #4BD61B;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    text-align: left;
    width: 90%;
  }

  .west-title{
  	float: right;
  	position: relative;
  	top: -130px;

  	background-color: #012257;
  	width: 110px;
  	height: 130px;

  }
  .west-title p{
  	line-height: 35px;
  	text-align: center;
  }
  .west-title p span{
  	margin-left: 6px;
  	position: relative;
  	top: -8px;
  	line-height: 35px;
  	text-align: center;
  }
  .reds{
  background-color: #F71A12;

  }
  .greens{
  	background-color: #4BD51D;

  }
  .yellows{
  	background-color: #FCC200;

  }
</style>
