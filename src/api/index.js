import axios from "../common/js/http"
import base from "./base"

const api = {
  //首页
    getMusicList(params){
        return axios.get(base.baseUrl + base.music,{
            params:params
        })
    },
  //轮播图
  getbanners(params){
      return axios.get(base.baseUrl+base.banners,{
        params:params
      })
  },
  //新歌榜
  getnewsong(params){

      return axios.get(base.baseUrl + base.newsong,{
        params:params
      })
  },
  //热歌榜
  gethonsong(params){

    return axios.get(base.baseUrl + base.hotsong,{
      params:params
    })
  },
  //热门歌手
  gethotren(){
    return axios.get(base.baseUrl + base.hotsongren)
  },
  //榜单
  getbangdan(){
    return axios.get(base.baseUrl + base.bangdan)
  },
  //音乐详情
  getsongdetail(params){

      return axios.get(base.baseUrl + base.songdetail,{
        params:params
      })
  },
  //音乐url
  getsongurl(params){

    return axios.get(base.baseUrl + base.songurl,{
      params:params
    })
  },
  //歌词
  getsonglrc(params){

    return axios.get(base.baseUrl + base.lcr,{
      params:params
    })
  },
  //歌单详情
  getsongdetaillist(params){

    return axios.get(base.baseUrl + base.songlistdetail,{
      params:params
    })
  }

}

export default api
