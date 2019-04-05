var friendtable;

module.exports = function (app, connection) {
    app.get("/api/friends", function (req, res) {
        connection.query("SELECT * FROM friend_table", function (err, result) {
            if (err) throw err;
            friendtable = result;
            res.json(friendtable);
        });
    })

    app.post("/api/friends", function (req, res) {
        var currentUser = req.body;

        connection.query(
            "INSERT INTO friend_table SET ?", req.body
        )

        connection.query("SELECT * FROM friend_table", function (err, result) {
            if (err) throw err;
            friendtable = result;
            var lowMatchDiff = 10000000000000000; //arbitarily high
            var bestMatch;
            
            //length - 1 to not include current user
            for (let i = 0; i < friendtable.length - 1; i++) {
                var currentMatchDiff = 0;
                for (let j = 2; j < Object.keys(friendtable[i]).length; j++) {
                    // j-1 to scale with an arbitrary number of questions
                    currentMatchDiff += Math.abs(friendtable[i]["question" + (j - 1)] - parseInt(currentUser["question" + (j - 1)]));
                }
                if (currentMatchDiff < lowMatchDiff) {
                    lowMatchDiff = currentMatchDiff;
                    bestMatch = friendtable[i];
                }
            }

            // Would pass whole object if I was including a picture in the match result.
            res.json(bestMatch.name);
        });
    });
}