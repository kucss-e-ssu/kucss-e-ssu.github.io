date = new Date()

let month = date.getMonth() + 1

GGrobee = document.querySelector('#GGrobee');
GGrobee_src = GGrobee.getAttribute('src');

h3 = document.querySelector('#status');

if (month === 10) {
  GGrobee.setAttribute('src', '../images/ggrobee.jpeg');
  h3.innerHTML = '1 grade : Waste';
}

if (month === 11) {
  GGrobee.setAttribute('src', 'https://png.pngtree.com/element_our/20200702/ourmid/pngtree-bean-sprouts-plant-seeds-germination-image_2284265.jpg');
  h3.innerHTML = '씨앗 단계';
}

if (month === 12) {
  GGrobee.setAttribute('src', 'https://png.pngtree.com/element_our/20200702/ourmid/pngtree-bean-sprouts-plant-seeds-germination-image_2284265.jpg');
  h3.innerHTML = '씨앗 단계';
}

if (month === 1) {
  GGrobee.setAttribute('src', 'https://png.pngtree.com/element_our/20200702/ourmid/pngtree-bean-sprouts-plant-seeds-germination-image_2284265.jpg');
  h3.innerHTML = '씨앗 단계';
}