

var count = 0;
var hanoi = function hanoi(disk, src, aux, dst){
    if (disk > 0){
        hanoi(disk-1, src, dst, aux);
        console.log('Move disk ' + disk + ' from ' + src + ' to ' + dst);
        count++;
        hanoi(disk-1, aux, src, dst);
        }
    }
hanoi(64, 'Source', 'Middle', 'End');

console.log("Number of moves: " + count);
