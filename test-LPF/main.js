var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 10,
  percentPosition: true
});

// var grid = document.querySelector('.grid');
// var msnry;

// imagesLoaded( grid, function() {
//   // init Isotope after all images have loaded
//   msnry = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     gutter: 10,
//     percentPosition: true
//   });
// });
