var friends = require ("../data/friends")

module.exports = function(app){
app.get("/api/friends", function(req, res) {
    res.json(friends)
});

app.post("/api/friends", function(req, res){

    var surveyResult = [];

    var bestMatch = [];
    var minDif = 0;

    for (var i = 0; i < friends.length; i ++) {
        var dif = 0;
        for (var j = 0; j < surveyResult.length; j ++){

            dif +=  Math.abs(friends[i].scores[j] - surveyResult[j]);
        }
        if ( i === 0) {
            bestMatch = [friends[i].name, friends[i].photo];
            minDif = dif;
        }
        else {
            if (dif < minDif) {
                bestMatch = [friends[i].name, friends[i].photo];
                minDif = dif;
            }

        }
    
    }
        res.json(bestMatch);
})
}