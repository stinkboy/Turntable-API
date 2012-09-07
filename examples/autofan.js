/**
 * Automatically fan a user when he or she enters the room.
 */

var Bot    = require('../index');
var AUTH   = auth+live+739daf39160c0468730f30999c39d75a090beeac
var USERID = 50169ea9aaa5cd2e8c000277
var ROOMID = 501847a8df5bcf31c880d333

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('registered', function (data) {
var name = data.user[0].name;
var command = data.command; 
   bot.becomeFan(data.user[0].userid);
});
