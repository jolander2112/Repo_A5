// Jason Olander
// Foundation 1, September 2014
// Assignment 05, Sorting

//
// Declarations
//
var bandList = [];
var rush = new Band('Rush', '1974','Progressive Metal');
var sabbath = new Band('Black Sabbath', '1970', 'Early UK Metal');
var dt = new Band('Dream Theater', '1989', 'Progressive Metal');
var maiden = new Band('Iron Maiden', '1978','New Wave of British Metal');
var metallica = new Band('Metallica', '1983', 'Thrash Metal');
var kyuss = new Band('Kyuss', '1991', 'Doom Metal');
var soundgarden = new Band('Soundgarden', '1988', 'Grunge');
var ib = new Band('Blue Oyster Cult', '1972', 'Early US Metal');
var scorpions = new Band('Scorpions', '1972', 'Power Metal');
var who = new Band('The Who', '1965', 'Pre-metal');
var inflames = new Band('In Flames', '1994', 'Swedish Extreme Metal');
var jimi = new Band('Jimi Hendrix', '1967', 'Pre-metal');
var motorhead = new Band('Motorhead', '1977', 'New Wave of British Metal');
var pantera =  new Band('Pantera', '1983', 'Thrash Metal');
var coc = new Band('Corrosion of Conformity', '1983', 'Metalcore');
var trivium = new Band('Trivium', '2003', 'New Wave of American Metal');

//
// Contructors
//
function Band(name, year, genre){
	this.name = name;
	this.year = year;
	this.genre = genre;
	bandList.push(this);
}