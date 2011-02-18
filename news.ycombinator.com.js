/*

news.ycombinator.com

I find myself never really looking at most of the stories on Hacker News past,
say, the 15th story or so. Usually the best ones are well within that scope,
and if they aren't they'll get pushed up there soon enough.

So this removes all the bullshit after the 15th story.

*/

$('table table tbody tr:nth-child(n+45)').
  css('display','none')

$('table table:nth-child(2)').
  append('<a id="moar" href="">More</a>')

$('#moar').
  click(function(){
    $('table table:nth-child(1) tr').css('display','table-row')
    $(this).hide()
    return false;
  }).
  css('padding', '25px')
