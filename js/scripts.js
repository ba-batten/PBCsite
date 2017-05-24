var connectList = {
  'list': [
    {
      'img': 'http://placehold.it/90',
      'h4': 'Connect with God',
      'p': 'Upcoming services and events'
    },
    {
      'img': 'http://placehold.it/90',
      'h4': 'Connect with Others',
      'p': 'Small groups and Bible studies'
    },
    {
      'img': 'http://placehold.it/90',
      'h4': 'Connect Others with God',
      'p': 'Find ways to serve'
    },
    {
      'img': 'http://placehold.it/90',
      'hr': 'Missions',
      'p': 'Reach the World'
    },
    {
      'img': 'http://placehold.it/90',
      'h4': 'Gospel',
      'p': 'What we believe'
    }
  ]
}

function swapImg() {
  var imgList = connectList.list;

  imgList.forEach(function(item){
    $('.connect-list').append('<img src="http://placehold.it/150">')
  }
}

swapImg();
