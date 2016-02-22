import request from 'request';
import {stringify} from 'querystring';
import {GENERAL_API_URL, KEY} from '../config/moefou.js';

class Moefou {
  constructor(key) {
    this.opt = {
      api_key: key
    }
  }
  _get(base, url, option) {
    let param =  Object.assign(option,this.opt);
    let getUrl = base + url + '?' + stringify(param);
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
  _getGeneral(url, option) {
    return this._get(GENERAL_API_URL, url, option);
  }

  wikis(opt){
    return this._getGeneral('wikis',opt);
  }
}