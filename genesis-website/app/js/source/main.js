(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.top-bar a').click(loadLink);
  }

  function loadLink(){
    switch(this.id){
      case 'homeLink':
        if(location.pathname !== 'index.html'){
          location.assign('index.html');
        }else{
          location.reload();
          return false;
        }
        break;
      case 'classLink':
        $('#content').empty();
        $('#content').load('classes.html #content');
        return false;
      case 'demonLink':
        $('#header').style.backgroundImage='url("media/demon.jpg")';
        $('#content').empty();
        $('#content').load('classes/demon.html #content');
        return false;
      case 'halakuLink':
        $('#header').style.backgroundImage='url("media/demon.jpg")';
        $('#content').empty();
        $('#content').load('classes/demons/halaku.html #content');
        return false;
      case 'dragonLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/dragon.jpg")');
        $('#content').empty();
        $('#content').load('classes/dragons.html #content');
        return false;
      case 'drowLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/dragon.jpg")');
        $('#content').empty();
        $('#content').load('classes/dragons.html #content');
        return false;
      case 'elemLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/elementalist.jpg")');
        $('#content').empty();
        $('#content').load('classes/elementalist.html #content');
        return false;
      case 'highLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/highlander.jpg")');
        $('#content').empty();
        $('#content').load('classes/highlander.html #content');
        return false;
      case 'mageLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mages.html #content');
        return false;
      case 'akashicLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/akashic_brotherhood.html #content');
        return false;
      case 'celestialLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/celestial_chorus.html #content');
        return false;
      case 'coeLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/cult_of_ecstacy.html #content');
        return false;
      case 'dreamLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/dreamspeakers.html #content');
        return false;
      case 'euthLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/euthanatos.html #content');
        return false;
      case 'hollowLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/hollow_ones.html #content');
        return false;
      case 'hermesLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/order_of_hermes.html #content');
        return false;
      case 'verbenaLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/verbena.html #content');
        return false;
      case 'adeptsLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/mage.jpg")');
        $('#content').empty();
        $('#content').load('classes/mage/virtual_adepts.html #content');
        return false;
      case 'monkLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/monk.jpg")');
        $('#content').empty();
        $('#content').load('classes/monk.html #content');
        return false;
      case 'ninjaLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/ninja.jpg")');
        $('#content').empty();
        $('#content').load('classes/ninja.html #content');
        return false;
      case 'samuraiLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/samurai.jpg")');
        $('#content').empty();
        $('#content').load('classes/samurai.html #content');
        return false;
      case 'sorcLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/sorcerer.jpg")');
        $('#content').empty();
        $('#content').load('classes/sorcerer.html #content');
        return false;
      case 'vampLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire.html #content');
        return false;
      case 'assamiteLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/assamite.html #content');
        return false;
      case 'brujahLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/brujah.html #content');
        return false;
      case 'gangrelLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/gangrel.html #content');
        return false;
      case 'lasombraLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/lasombra.html #content');
        return false;
      case 'malkavianLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/malkavian.html #content');
        return false;
      case 'nosferatuLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/nosferatu.html #content');
        return false;
      case 'setiteLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/setite.html #content');
        return false;
      case 'tzimisceLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/tzimisce.html #content');
        return false;
      case 'ventrueLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/vampire.jpg")');
        $('#content').empty();
        $('#content').load('classes/vampire/ventrue.html #content');
        return false;
      case 'wolfLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/werewolf.jpg")');
        $('#content').empty();
        $('#content').load('classes/werewolf.html #content');
        return false;
      case 'covenLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens.html #content');
        return false;
      case 'alLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens/affero_letum.html #content');
        return false;
      case 'hhLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens/head_hunters.html #content');
        return false;
      case 'kosLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens/kill_on_site.html #content');
        return false;
      case 'sdpLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens/silent_death_pack.html #content');
        return false;
      case 'tmrLink':
        $('.header').empty();
        $('.header').css('background-image', 'url("media/header.jpg")');
        $('#content').empty();
        $('#content').load('covens/tal_mahe_ra.html #content');
        return false;
      case 'questLink':
        break;
      case 'connectLink':
        break;
      case 'aboutLink':
        break;

    }
  
  }





})();

