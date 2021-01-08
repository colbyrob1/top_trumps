// const name = document.getElementById("name");

// fetch("https://pokeapi.co/api/v2/pokemon/onix")
// .then((response) =>response.json())
// .then((data => console.log(data)))

// fetch("https://pokeapi.co/api/v2/pokemon/onix%22)")
//     .then((response) => response.json())
//     .then((data) => {
//      displayData(data);
// });

// const displayData = (data) => {
//     name.textContent = data;
// };

let cars = [new TopTrumpCard("Ariel Atom 2", "UK", 24000, 1998, 220, 8200, 3.5, 140, 341, 180, "images\/car_thumbs\/arielatom2.jpg"),
new TopTrumpCard("Aston Martin DB9", "UK", 103000, 5935, 450, 6000, 4.7, 186, 466, 183, "images\/car_thumbs\/astonmartindb9.jpg"),
new TopTrumpCard("Aston Martin Vanquish", "UK", 164000, 5935, 460, 6500, 5, 190, 470, 188, "images\/car_thumbs\/astonmartinvanquish.jpg"),
new TopTrumpCard("Audi TT Quattro", "Germany", 30595, 3189, 247, 6300, 6.6, 155, 404, 186, "images\/car_thumbs\/audittquattro.jpg"),
new TopTrumpCard("Bentley Arnage", "UK", 170000, 6750, 450, 4100, 5.5, 168, 539, 212, "images\/car_thumbs\/bentleyarnage.jpg"),
new TopTrumpCard("BMW M3", "Germany", 40350, 3246, 343, 7900, 5.2, 155, 449, 176, "images\/car_thumbs\/bmwm3.jpg"),
new TopTrumpCard("Bugatti Veyron 16.4", "Italy", 773000, 7993, 1001, 6000, 2.9, 252, 446, 199, "images\/car_thumbs\/bugattiveyron.jpg"),
new TopTrumpCard("Caterham Super 7", "UK", 36475, 1796, 230, 8600, 3.2, 150, 310, 158, "images\/car_thumbs\/caterhamsuper7.jpg"),
new TopTrumpCard("Ferrari 360 Modena", "Italy", 133025, 3586, 425, 8500, 4.1, 187, 448, 192, "images\/car_thumbs\/ferrari360modena.jpg"),
new TopTrumpCard("Ferrari 575M Maranello", "Italy", 154350, 5748, 508, 7250, 4.2, 202, 455, 194, "images\/car_thumbs\/ferrari575maranello.jpg"),
new TopTrumpCard("Honda NSX", "Japan", 63013, 3179, 280, 7300, 5.7, 168, 443, 181, "images\/car_thumbs\/hondaNSX.jpg"),
new TopTrumpCard("Jaguar XKR", "UK", 64920, 4196, 400, 6100, 5.3, 155, 476, 202, "images\/car_thumbs\/jaguarxkr.jpg"),
new TopTrumpCard("Koenigsegg CC", "Sweden", 354500, 4700, 655, 6800, 3.5, 240, 419, 199, "images\/car_thumbs\/koenigseggcc.jpg"),
new TopTrumpCard("Lamborghini Gallardo", "Italy", 162180, 6192, 571, 7500, 3.6, 205, 430, 190, "images\/car_thumbs\/lamborghinigallardo.jpg"),
new TopTrumpCard("Lamborghini Murcielago", "Italy", 117000, 4961, 492, 7800, 4.3, 192, 458, 205, "images\/car_thumbs\/lamborghinimurcielago.jpg"),
new TopTrumpCard("Lotus Exige", "UK", 29995, 1796, 189, 7800, 5.2, 147, 380, 173, "images\/car_thumbs\/lotusexige.jpg"),
new TopTrumpCard("Marcos TS500", "UK", 34950, 5000, 320, 5000, 4, 185, 410, 168, "images\/car_thumbs\/marcosts500.jpg"),
new TopTrumpCard("Maserati Cambiocorsa Coupe", "Italy", 58995, 4244, 390, 7000, 4.9, 177, 452, 182, "images\/car_thumbs\/maseraticoupe.jpg"),
new TopTrumpCard("Maybach 62", "Germany", 281380, 5531, 550, 5250, 5.4, 155, 616, 198, "images\/car_thumbs\/maybach62.jpg"),
new TopTrumpCard("Mercedes-Benz McLaren SLR", "Germany", 313465, 5439, 616, 6500, 3.7, 207, 453, 182, "images\/car_thumbs\/mercedesslr.jpg"),
new TopTrumpCard("Mitsubishi Evo VIII FQ-340", "Japan", 32999, 1997, 342, 7000, 4.4, 157, 449, 177, "images\/car_thumbs\/mitsubishievo8.jpg"),
new TopTrumpCard("Morgan Aero 8", "UK", 55500, 4398, 286, 5500, 4.9, 160, 409, 175, "images\/car_thumbs\/morganaero8.jpg"),
new TopTrumpCard("Noble M12", "UK", 52500, 2968, 352, 6200, 3.9, 165, 409, 183, "images\/car_thumbs\/noblem12.jpg"),
new TopTrumpCard("Pagani Zonda C12 S", "Italy", 411250, 7291, 555, 5900, 3.9, 210, 439, 206, "images\/car_thumbs\/paganizondac12.jpg"),
new TopTrumpCard("Porsche 911 GT2 Coupe", "Germany", 126665, 3600, 483, 5700, 4, 196, 443, 177, "images\/car_thumbs\/porsche911gt2.jpg"),
new TopTrumpCard("Rolls-Royce Phantom", "UK", 250965, 6749, 453, 5350, 5.7, 149, 583, 199, "images\/car_thumbs\/rollsroycephantom.jpg"),
new TopTrumpCard("Subaru Impreza 2.0 WRX STi", "Japan", 29995, 1994, 316, 5800, 4.5, 155, 441, 174, "images\/car_thumbs\/subaruimprezasti.jpg"),
new TopTrumpCard("TVR Cerbera", "UK", 46500, 4575, 420, 3750, 3.9, 190, 428, 187, "images\/car_thumbs\/tvrcerbera.jpg"),
new TopTrumpCard("Vauxhall VX220", "UK", 26495, 1998, 200, 5500, 4.7, 151, 379, 171, "images\/car_thumbs\/vauxhallvx220.jpg"),
new TopTrumpCard("Westfield SEight", "UK", 24999, 3950, 200, 4750, 4.3, 137, 366, 161,"images\/car_thumbs\/westfieldseight.jpg")];
