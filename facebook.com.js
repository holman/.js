/*

Facebook

High DPI screens are the future. No one is on my level though. I require more
pixels.

This .js script primarily loads the original, mostly full-resolution photos
instead of the grainy compressed junker files, which look horrible on a Retina
screen.

*/

// $(document).bind('DOMNodeInserted', function(event) {
//     if ($('.spotlight').attr('src') != undefined && !$('.spotlight').data('retina')) {
//       // This is sort of like an ID for the photo we're looking for. It's probably it.
//       // Something like it. Probably.
//       photo_id = $('.spotlight').attr('src').split('/').reverse()[0].split('_')[2]
//
//       // Look through all of the links on-page to see which references our image URL.
//       element  = $('a[href*=' + photo_id + ']')
//
//       // Look in that element's `ajaxify` attribute and parse out the `_o.jpg`
//       // (original) URL.
//       hd_url = unescape(element.attr('ajaxify').split('&src=')[1].split('&')[0])
//
//       // Now that we have a URL, let's embed it in the original img again.
//       $('.spotlight').attr('src', hd_url)
//
//       // Mark this as retinah'd
//       $('.spotlight').data('retina', true)
//     }
// });

// I'm tired, but here we do the same swap on static, non-lightboxed photos.
hd_download = $('a.fbPhotosPhotoActionsItem[href*=_o\\.jpg]')

if (hd_download.attr('href')) {
  $('#fbPhotoImage').attr('src', hd_download.attr('href'))
}
