const namesAndHex = [
  ['Gentle Breeze', '#637092'],
  ['Cyan Depth', '#6fa19b'],
  ['Blue Violet', '#4d57b1'],
  ['Celestial Spheres', '#3660a9'],
  ['A Fresh Morning', '#7c7e7e'],
  ['Horizon', '#56637a'],
  ['Water Abyss', '#3d6160'],
  ['Sea Depths', '#2d4a48'],
  ['Sky Blue', '#879f9b'],
  ['Royal Blue', '#768192'],
  ['Navy Blue Night', '#343167'],
  ['Indigo', '#4259ac'],
  ['Azure Bliss', '#2e4fb2'],
  ['Gray Fog', '#32333b'],
  ['Sleepy Blue', '#586f92'],
  ['Ice Blue', '#679896'],
  ['Moody Cobalt', '#2f3a51'],
  ['Delicate Cacao', '#7b6e65'],
  ['Light Vanilla', '#775d4d'],
  ['Coffee With milk', '#82603f'],
  ['Cocoa', '#6b351b'],
  ['Copper Coin', '#947b6a'],
  ['Light Creme', '#9f998f'],
  ['Light Biscuit', '#a6998b'],
  ['Natural Beige', '#958d83'],
  ['Bright Peach', '#9f8d7a'],
  ['Velvety Peach', '#98765c'],
  ['Sand Almond', '#94876d'],
  ['Sunny Yellow', '#977954'],
  ['Crystal', '#9b9996'],
  ['Milky Way', '#83817d'],
  ['Forest Mist', '#928c83'],
  ['Silver Glacier', '#8e8885'],
  ['Gray Beige', '#8b8278'],
  ['Steel Gray', '#7d7a74'],
  ['White', '#9f9c98'],
  ['Gray', '#57544e'],
  ['Black', '#2d2a25'],
  ['Dark Lime', '#61744f'],
  ['Morning Celadon', '#7e8079'],
  ['Strong Green', '#283827'],
  ['Young Flower Bud', '#96957d'],
  ['Spring Grass', '#8d9a74'],
  ['Lime', '#879b7b'],
  ['Ripe Pear', '#7ea15d'],
  ['Heavy Green', '#2a4121'],
  ['Pistachio Green', '#6b9374'],
  ['Fresh Carrot', '#946639'],
  ['Pumpkin Moment', '#9b5e38'],
  ['Mandarin Orange', '#965a31'],
  ['Fiery Orange', '#9d472a'],
  ['Light Eosine', '#988a85'],
  ['Indian Rose', '#985c5a'],
  ['Pale Pink', '#a68f8b'],
  ['Dirty Pink', '#827276'],
  ['Raspberry Aura', '#865260'],
  ['Pink Mist', '#998b88'],
  ['Pink', '#966a66'],
  ['Pastel Pink', '#987c7f'],
  ['Amaranth Adventure', '#a52c4c'],
  ['Alizarin Red', '#993b2c'],
  ['Crimson Confusion', '#942d28'],
  ['Eosine', '#872728'],
  ['Hot Brick', '#7a3430'],
  ['Red Tango', '#62312c'],
  ['Laughing Strawberry', '#be3f3d'],
  ['Red', '#a32927'],
  ['Bloody Red', '#482722'],
  ['Subtle Lilac', '#927e8f'],
  ['Amethyst', '#7a5d7e'],
  ['Warm Plum', '#603f5e'],
  ['Charolite Abyss', '#402c4b'],
  ['Alluring Lavender', '#886294'],
  ['Bright Lavender', '#867a8d'],
  ['Purple Quartz', '#6b568b'],
  ['Purple Lily', '#7a34bc'],
  ['Banana Smile', '#a49757'],
  ['Honey Moment', '#967e4f'],
  ['Bumblebee', '#a39865'],
  ['Pineapple Happiness', '#a39456'],
  ['Yellow Daffodil', '#a09667'],
  ['Faded Lemon', '#a69e87'],
  ['Morning Yellow', '#a6a174'],
  ['Sunny Orange', '#9b7e50']
];

//changes main swatch
function changeStuff (name, hex, swatch) {
  let both = namesAndHex[Math.floor(Math.random() * namesAndHex.length)]; 
  let color = both[0];
  let hexColor = both[1];
  
  let colorNameMain = document.getElementById(name);
  colorNameMain.innerHTML = color;
  console.log(colorNameMain);
  
  let hexValueMain = document.getElementById(hex);
  hexValueMain.innerHTML = hexColor;
  
  let swatchMain = document.getElementById(swatch);
  swatchMain.style.backgroundColor = hexColor;
  
  console.log(both);
}

function changeAllStuff () {
  changeStuff("colorNameMain", "hexValueMain", "swatchMain");
  changeStuff("colorName2", "hexValue2", "swatchSecond");
  changeStuff("colorName3", "hexValue3", "swatchThird");
}

//runs functions so the colors randomize when the page loads
changeAllStuff();
