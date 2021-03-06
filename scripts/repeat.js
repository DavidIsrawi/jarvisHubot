// Description:
// Repeats what I say

// Commands:
// say (msg)
// in (channel) say (msg)

module.exports = function(robot) {

    robot.respond(/in (.*) say (.*)/i, function(msg) {

        var channel = msg.match[1];
        var sentence = msg.match[2];

        // for(x in msg.envelope.user) {
        //     console.log(x + " : " + msg.envelope.user[x]);
        // }

        var channels= {
            "general" : "C237RSC00",
            "test" : "D25H5A4F3"
        }

        if(msg.envelope.user.is_admin || msg.envelope.user.name == "davidisrawi") {
            // robot.messageRoom(channels[channel], sentence);
            robot.messageRoom('general', sentence);
        }
        else {
            msg.send("Sorry bro, only an admin or David can send this command");
        }
    });

    robot.respond(/say (.*)/i, function (msg){

        var sentence = msg.match[1];

        msg.send(sentence);

    });
}
