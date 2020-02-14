import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
// import example from './modules/example.js';
import menu from './modules/menu.js';
import symptoms from './modules/symptoms.js';
import reviews from './modules/reviews.js';
import clients from './modules/clients.js';
import footer from './modules/footer.js';

function main () {
  scrollSmooth();
	// example();
	menu();
	symptoms();
	reviews();
	clients();
	footer();
}

main();
