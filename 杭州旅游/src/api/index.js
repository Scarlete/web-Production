
import axios from "axios";
axios.defaults.baseURL = "http://192.168.0.113:9090";
axios.interceptors.response.use((res)=>{
  return res.data.data;
});

//获取天气
export let getWeather = ()=> {
  return axios.get("http://wthrcdn.etouch.cn/weather_mini?city=杭州");
};

//fly.vue
//萧山机场大屏  实时游客量
export let touristNumber  = ()=> {
  return axios.get("/Airport/queryTouristCount");
};

//萧山机场大屏  热门景区
export let hotSpots  = ()=> {
  return axios.get("/city/hotScen?city_name=杭州市");
};

//萧山机场大屏  热门美食
export let hotFood  = ()=> {
  return axios.get("/city/food?city_name=杭州市");
};

//萧山机场大屏  热门酒店
export let hotHoter  = ()=> {
  return axios.get("/city/hotel?city_name=杭州市");
};

//获取萧山机场的数据总请求
export let flyDataAll  = ()=> {
  return axios.all([hotSpots(), hotFood(), hotHoter()]);
};

// 杭州市各个景点的路程,时间,游客数
export let flySpotsData  = ()=> {
  return axios.get("/province/gift");
};


//fly1.vue
//城市热门景区排行
export let provinceHotScen  = ()=> {
  return axios.get("/province/hotScen?city_name=杭州市");
};

//热门旅游城市排行榜
export let provinceHotCity  = ()=> {
  return axios.get("/province/hotCity");
};

// 城市热门旅游礼品排行榜
export let provinceGift  = ()=> {
  return axios.get("/province/gift?city_name=杭州市");
};

//获取萧山机场热门旅游城市总请求
export let provinceHotData  = ()=> {
  return axios.all([provinceHotScen(), provinceHotCity(), provinceGift()]);
};

//灵隐寺  实时游客量
export let linYinTouristNumber  = ()=> {
  return axios.get("/xian/number");
};

//电梯小屏 人文和自然景区
export let  xianLift  = (is_ide)=> {
  return axios.get(`/xian/lift?is_ide=${is_ide}`);
};

//整合
//西湖景点实时客流量
export let scenicGuest  = ()=> {
  return axios.get("https://easy-mock.com/mock/5b503765ac44206a8e0d8177/example/xihu/touristNum");
};



//张文营+王立鑫   关于关于axios的数据渲染接口

//获取省内省外的人数的请求
export let province  = ()=> {
  return axios.get("/xihu/income");
};
//获取西湖游客的人数
export let people  = ()=> {
  return axios.get("/xihu/position");
};
//获取西湖游客的人数
export let Type = ()=> {
  return axios.get("/xihu/type");
};

export let years = ()=> {
  return axios.get("/xihu/years");
};

export let business = ()=> {
  return axios.get("/xihu/business");
};







