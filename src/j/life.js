/*jslint*/
var Life = function(size) {
    size = size || 10;
    var cells = [];
    for (var i=0; i < size; i++) {
        cells[i] = [];
        for (var j=0; j < size; j++) {
            var value = Math.round(Math.random());
            cells[i][j] = value;
        }
        
    }
    
    return {
        cells: cells
    };
};
