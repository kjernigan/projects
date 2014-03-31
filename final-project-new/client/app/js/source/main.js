(function(){

  'use strict';

  $(document).ready(initialize);

  var topics = [];
  var divId = 1;

  function initialize(){
    $(document).foundation();
    $('#newTopic').click(addTopic);
    $('#content').on('click', 'button.replyToTopic', replyToTopic);
    $('#submitTopic').click(saveTopic);
    $('#content').on('click', 'button.submitReply', submitReply);
    $('#cancelNewTopic').click(hideNewTopic);
    $('#content').on('click', 'button.cancelReply', cancelReply);
    $('.showHide').click(showHideReplies);
    getTopics();
  }

// Retrieves topics from database.
  function getTopics(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/topics';
    $.getJSON(url, displayTopics);
  }

// Displays topics.
  function displayTopics(data){
    $('#content').empty();

    for(var i=0; i < data.topics.length; i++){
      displayTopic(data.topics[i]);
    }
  }

// Displays one topic.
  function displayTopic(topic){
    topics.push(topic);

    var $content = $('#content');
    var $post = $('<div>');
    var $text = $('<p>');
    var $header = $('<h4>');
    var $replyButton = $('<button>');
    var $showHide = $('<button>');
    var $replyDiv = $('<div>');
    var $replyText = $('<p>');
    var $replyForm = $('<form>');
    var $replyId = $('<input>');
    var $replySubject = $('<input>');
    var $replyContent = $('<input>');
    
    $replyId.attr('type', 'hidden').attr('name', '_id');
    $replySubject.attr('type', 'hidden').attr('name', 'subject');
    $replyContent.attr('type', 'hidden').attr('name', 'content');
    $replyForm.attr('id', 'replyForm');
    $replyId.val(topic._id);
    $replySubject.val(topic.subject);
    $replyContent.val(topic.content);
    $replyForm.append($replyId).append($replySubject).append($replyContent);

    $showHide.text('Show Replies').addClass('tiny showHide show');
    $replyButton.text('Reply').addClass('tiny replyToTopic');
//    $replyButton.form = divId;
    $header.text(divId + ' ' + topic.subject);
    $text.text(topic.content);
    $post.prepend($text).prepend($header);
      //.prepend($showHide);

    _.each(topic.replies, function(reply){
      $replyText.text(reply);
      $replyDiv.append($replyText);
      $replyDiv.addClass('replyDiv shown');
      $post.append($replyDiv);
    });
    $post.append($replyButton);
    $post.attr('id', 'div' + divId).addClass('topic');
    divId++;
    $content.prepend($post);
  }

//Saves topic to database.
  function saveTopic(event){
    var data = $('#inputDiv :input').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/topics';
    var type = 'POST';
    var success = newTopic;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function newTopic(topic){
    $('#inputDiv input').val('');
    displayTopic(topic);
    hideNewTopic();
  }

// Displays the input to add a new topic.
  function addTopic(){
    var $textArea = $('#textArea');
    var $input = $('#inputField');
    var $inputDiv = $('#inputDiv');

    $input.attr('placeholder', 'Topic').attr('name', 'subject');
    $textArea.attr('placeholder', 'Content').attr('name', 'content');
    $inputDiv.css('display', 'block');
  }

// Hides new topic input div.
  function hideNewTopic(){
    var $textArea = $('#textArea');
    var $input = $('#inputField');
    var $inputDiv = $('#inputDiv');

    $input.val('');
    $textArea.val('');
    $inputDiv.css('display', 'none');
  }

// Displays reply input fields, submit reply, and cancel reply buttons.
  function replyToTopic(){
//    var $replyForm = $('#replyForm');
    var $textArea = $('<textarea>');
    var $submitReply = $('<button>');
    var $topic = $(this).parent();
    var $h5 = $('<h5>');
    var $cancelReply = $('<button>');


//    $replyForm.addClass('replyForm');
    $textArea.addClass('textArea').attr('rows', '10').attr('cols', '75').attr('id', 'replyTextArea').attr('name', 'replies');
    $textArea.attr('form', '#replyForm');
    $submitReply.addClass('tiny submitReply');
    $submitReply.text('Submit Reply');
//    $replyDiv.attr('id', divId);
    $h5.text(divId);
    $cancelReply.addClass('tiny cancelReply');
    $cancelReply.text('Cancel Reply');
    divId++;
//    $replyForm.append($textArea);
//    $replyDiv.prepend($h5).append($textArea).append($submitReply).append($cancelReply);
    $topic.append($textArea).append($submitReply).append($cancelReply);
    $textArea.focus();
    $(this).remove();
  }

// Pushes reply to database, hides reply input fields.
  function submitReply(){
    var $replyDiv = $('<div>');
//    var data = $('#replyForm').serialize();
    var $textAreaVal = $('#replyTextArea').val();
    var $p = $('<p>');
    var $textArea = $('#replyTextArea');
    var $submitButton = $(this);
    var $replyButton = $('<button>');
    var $topicDiv = $(this).parent();



    $p.text($textAreaVal);
    $textArea.remove();
    $submitButton.remove();

    $replyDiv.addClass('replyDiv');
    $replyDiv.append($p);
    $replyButton.text('Reply');
    $replyButton.addClass('tiny replyToTopic');
    $topicDiv.append($replyDiv);
    $('.cancelReply').remove();
    $(this).remove();
    $topicDiv.append($replyButton);
  }

  function cancelReply(){
//    var $replyDiv = $('.replyDiv');
    var $replyTextArea = $('#replyTextArea');
    var $replyButton = $('<button>');
    var $topic = $(this).parent();

    $replyButton.text('Reply');
    $replyButton.addClass('tiny replyToTopic');
//    $(this).siblings('button').remove();
    $(this).parent().children('button').remove();
//    $(this).remove();
    $topic.append($replyButton);
    divId--;
    $replyTextArea.val('');
    $replyTextArea.remove();
    $(this).siblings('button').remove();
//    $replyDiv.remove();
  }

  function showHideReplies(){
  
  }
/*

*/




})();

