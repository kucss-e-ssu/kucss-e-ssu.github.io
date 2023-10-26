GGrobee = document.querySelector('#GGrobee');
About = document.querySelector('#About');
What = document.querySelector('#What');
Com = document.querySelector('#Com');
anc = document.querySelector('#anc');

iframe = document.querySelector('#iframe');

GGrobee.addEventListener('click', function() {
  // iframe.setAttribute('src', 'asset/ggrobee.html');
  iframe.src = 'asset/ggrobee.html';
});

About.addEventListener('click', function() {
    iframe.src = 'asset/about.html';
});

What.addEventListener('click', function() {
    iframe.src = 'asset/pollution.html';
});

Com.addEventListener('click', function() {
  iframe.src = 'asset/com.html';
});

anc.addEventListener('click', function() {
  iframe.src = 'asset/anc.html';
});