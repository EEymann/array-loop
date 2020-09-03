const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItems(arr) { //The parameter arr is like a placeholder for an array that will be passed into this function
  let items = '';
  for ( let i = 0; i < arr.length; i ++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}
