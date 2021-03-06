export const MagicZ = function(){
    var cards = [];
    cards[0]=[1,4,6,9,12,14,17,19,22,25,27,30,33,35,38,40,43,46,48,51,53,56,59,61,64,67,69,72,74,77,80,82,85,88,90,93,95,98];
    cards[1]=[2,7,10,15,20,23,28,31,36,41,44,49,54,57,62,65,70,75,78,83,86,91,96,99];
    cards[2]=[3,4,11,12,16,17,24,25,32,33,37,38,45,46,50,51,58,59,66,67,71,72,79,80,87,88,92,93,100];
    cards[3]=[5,6,7,18,19,20,26,27,28,39,40,41,52,53,54,60,61,62,73,74,75,81,82,83,94,95,96];
    cards[4]=[8,9,10,11,12,29,30,31,32,33,42,43,44,45,46,63,64,65,66,67,84,85,86,87,88,97,98,99,100];
    cards[5]=[13,14,15,16,17,18,19,20,47,48,49,50,51,52,53,54,68,69,70,71,72,73,74,75];
    cards[6]=[21,22,23,24,25,26,27,28,29,30,31,32,33,76,77,78,79,80,81,82,83,84,85,86,87,88];
    cards[7]=[34,35,36,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54];
    cards[8]=[55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];
    cards[9]=[89,90,91,92,93,94,95,96,97,98,99,100];

    this.gueZZ = function(indexes)
    {
        var expectedLength = indexes.length;
        if(indexes.length == 0) return;
        var map = {};
        for(var i = 0; i < indexes.length; i++){
            if(map[indexes[i]]) return;
            map[indexes[i]] = true;
        }

        var allNums = [];
        var smallestListOfNumbers = 100000;

        for(var i = 0; i < indexes.length; i++){
            if (cards[indexes[i]].length < smallestListOfNumbers)
                smallestListOfNumbers = indexes[i];
        }

        var cardsOfSmallestList = cards[indexes[smallestListOfNumbers]];
        indexes.splice(smallestListOfNumbers, 1);

        for(var i = 0; i < cardsOfSmallestList.length; i++){
            allNums.push(cardsOfSmallestList[i]);
        }

        for (var i = 0; i < indexes.length; i++)
        {
            var cardsToInspect = cards[indexes[i]];
            for (var j = 0; j < cardsToInspect.length; j++)
            {
                if (allNums.indexOf(cardsToInspect[j]) != -1)
                {
                    allNums.push(cardsToInspect[j]);
                }
            }
        }

        var obj = {};
        for (var i = 0; i < allNums.length; i++)
        {
            obj[allNums[i]] = (obj[allNums[i]] || 0) + 1;
        }

        var possibleValues = [];
        for(var k in obj)
        {
            if(obj[k] >= expectedLength )
                possibleValues.push(k);
        }
        return possibleValues[0];

    }

    this.getMagicZindex = function(n)
    {
        //Your Code Here
        if(n < 0)
            return;
        let result = [];
        for(var i = 0; i < cards.length; i++){
            for(var j = 0; j < cards[i].length; j++)
            {
                var cardNumber = cards[i][j];
                if( cardNumber == n)
                {
                    result.push(i);
                }
            }
        }

        return result;
    }

};

