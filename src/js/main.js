import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import example from './modules/example.js';
import reviews from './modules/reviews.js';
import clients from './modules/clients.js';

function main () {
  scrollSmooth();
	example();
	reviews();
	clients();
}

main();
