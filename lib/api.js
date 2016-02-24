import request from 'request';
import {stringify} from 'querystring';
import {GENERAL_API_URL, SPECIAL_API_URL} from '../config/moefou.js';

class Moefou {
  constructor(key) {
    this.opt = {
      api_key: key
    }
  }
  _get(base, url, option) {
    let param =  Object.assign(option,this.opt);
    let getUrl = base + url + '?' + stringify(param);
    console.log(getUrl);
    return new Promise(function(resolve, reject){
      request.get({
        url: getUrl,
        json: true},
        function(error, response, body){
          if(!error && response.statusCode == 200){
            resolve(body)
          }else{
            reject(error);
          }
      });
    });
  }
  // 通用api
  _getGeneral(url, option = {}) {
    return this._get(GENERAL_API_URL, url, option);
  }
  // 专用api
  _getSpecial(url, option = {}){
    return this._get(SPECIAL_API_URL, url, option);
  }

  /**
   * @param  {[param]}
   * @return {条目列表}
   */
  wikis(opt){
    return this._getGeneral('wikis',opt);
  }
  /**
   * @param  {[param]}
   * @return {放映列表}
   */
  on_air(opt){
    return this._getGeneral('on-air',opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {条目基础资料}
   */
  wiki_detail(type, opt = {}){
    return this._getGeneral(type + '/detail.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {条目的子条目}
   */
  wiki_subs(type, opt = {}){
    return this._getGeneral(type + '/subs.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {收藏记录}
   */
  wiki_favs(type, opt = {}){
    return this._getGeneral(type + '/favs.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {评分记录}
   */
  wiki_ratings(type, opt = {}){
    return this._getGeneral(type + '/ratings.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {关联条目}
   */
  wiki_relationships(type, opt = {}){
    return this._getGeneral(type + '/relationships.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {相似条目}
   */
  wiki_similarity(type, opt = {}){
    return this._getGeneral(type + '/similarity.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {子条目基础资料}
   */
  sub_detail(type, opt){
    return this._getGeneral(type + '/detail.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {子条目收藏记录}
   */
  sub_favs(type, opt){
    return this._getGeneral(type + '/favs.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {评分记录}
   */
  sub_ratings(type, opt){
    return this._getGeneral(type + '/ratings.json', opt);
  }
  /**
   * @param  {[type]}
   * @param  {param}
   * @return {关联条目}
   */
  sub_relationships(type, opt){
    return this._getGeneral(type + '/relationships.json', opt);
  }
  /**
   * @param  {param}
   * @return {用户基本资料}
   */
  user_detail(opt){
    return this._getGeneral('user/detail.json', opt);
  }
  /**
   * @param  {param}
   * @return {用户收藏的条目}
   */
  user_favs_wiki(opt){
    return this._getGeneral('user/favs/wiki.json', opt);
  }
  /**
   * @param  {param}
   * @return {用户收藏的子条目}
   */
  user_favs_sub(opt){
    return this._getGeneral('user/favs/sub.json', opt);
  }
  /**
   * @param  {param}
   * @return {搜索条目}
   */
  search_wiki(opt){
    return this._getGeneral('search/wiki.json', opt);
  }
  /**
   * @param  {param}
   * @return {搜索子条目}
   */
  search_sub(opt){
    return this._getGeneral('search/sub.json', opt);
  }
  /**
   * @param  {param}
   * @return {电台音乐播放列表}
   */
  playlist(opt = {}){
    return this._getSpecial('listen/playlist', opt);
  }
  /**
   * @param  {param}
   * @return {发现音乐}
   */
   explore(opt){
    return this._getSpecial('explore', opt);
   }
}

export {Moefou}