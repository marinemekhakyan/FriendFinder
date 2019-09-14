var friends = require ("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){

        var surveyResult = req.body.scores;
        console.log(req.body);

        var bestMatch = [];
        var minDif = 0;

        var responseData = {
            newUser: req.body,
            bestMatch: null,
        }

        for (var i = 0; i < friends.length; i ++) {
            var dif = 0;
            for (var j = 0; j < surveyResult.length; j ++){

                dif +=  Math.abs(friends[i].scores[j] - surveyResult[j]);
            }
            if ( i === 0 || dif < minDif) {
                responseData.bestMatch = friends[i]; // [friends[i].name, friends[i].photo];
                minDif = dif; 
            }
        
         }
        res.json(responseData);
    });
}