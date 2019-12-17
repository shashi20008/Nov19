$('.a-heading').text('This updated...');

$('#heading1').html('<span style="color: red">This piece will appear in red</span> This will not.');

// $('.a-heading').css({
//   'font-size': '30px',
//   color: 'green'
// });

$('#greet-btn').click(e => {
  const name = $('#name-input').val();
  $('#greet-para').text('Hello ' + name);
});

$('.a-button').click(e => {
  const newColor = $(e.target).data('color');
  $('#greet-para').css({ color: newColor });
});
