import {Moefou} from '../lib/api.js';
import {KEY} from '../config/moefou.js';
describe('Moefou Api', function () {
  let moefou = new Moefou(KEY);
  describe('wikis test', function () {
    it('获取条目', function (done) {
      moefou.wikis({
        wiki_type: 'music'
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      });
    })
  });

  describe('on-air test', function () {
    it('放映列表', function (done) {
      moefou.on_air({
        week: 0
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('wiki_detail test', function () {
    it('条目基础资料', function (done) {
      moefou.wiki_detail('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('wiki_subs test', function () {
    it('条目的子条目', function (done) {
      moefou.wiki_subs('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('wiki_favs test', function () {
    it('收藏记录', function (done) {
      moefou.wiki_favs('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('wiki_ratings test', function () {
    it('评分记录', function (done) {
      moefou.wiki_ratings('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      });
    })
  });

  describe('wiki_relationships test', function () {
    it('关联条目', function (done) {
      moefou.wiki_relationships('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      });
    })
  });

  describe('wiki_similarity test', function () {
    it('相似条目', function (done) {
      moefou.wiki_similarity('music',{
        wiki_id: 8796
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      });
    })
  });

  ////////////////////////子条目//////////////////////////
  describe('sub_detail test', function () {
    it('子条目基础资料', function (done) {
      moefou.sub_detail('song',{
        sub_id: 69975
      }).then((result)=> {
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('sub_favs test', function () {
    it('子条目收藏记录', function (done) {
      moefou.sub_favs('song',{
        sub_id: 69975
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('sub_ratings test', function () {
    it('评分记录', function (done) {
      moefou.sub_ratings('song',{
        sub_id: 69975
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('sub_relationships test', function () {
    it('关联条目', function (done) {
      moefou.sub_relationships('song',{
        sub_id: 69975
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  //////////////////////////用户//////////////////////
  describe('user_detail test', function () {
    it('用户基本资料', function (done) {
      moefou.user_detail({
        uid: 233
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('user_favs_wiki test', function () {
    it('用户收藏条目', function (done) {
      moefou.user_favs_wiki({
        uid: 233
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      });
    })
  });

  describe('user_favs_sub test', function () {
    it('用户收藏的子条目', function (done) {
      moefou.user_favs_sub({
        uid: 233
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  /////////////////////////搜索/////////////////
  describe('search_wiki text', function () {
    it('搜索条目', function (done) {
      moefou.search_wiki({
        keyword: '东方'
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  describe('search_sub test', function () {
    it('搜索子条目', function (done) {
      moefou.search_sub({
        keyword: '东方'
      }).then((result) =>{
        if(result.response.information.error == 0){
          done();
        }else{
          throw new Error('failed');
        }
      })
    })
  });

  /////////////////////////电台//////////////////
  describe('playlist test', function () {
    it('电台音乐播放列表', function (done) {
      moefou.playlist({}).then((result) =>{
        done();
      })
    })
  });

  describe('explore', function () {
    it('发现音乐', function (done) {
      moefou.explore({
        new_musics: 1,
        api: 'json'
      }).then((result) =>{
        done();
      })
    })
  })
})
