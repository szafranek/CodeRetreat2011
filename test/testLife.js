/*jslint*/

/**
 * TestCase for testing of Life
 **/

var LifeTest = TestCase("LifeTest", {

    setUp: function() {
        
    },
  
    tearDown: function() {
    
    },

    "test if cells array is populated": function() {
        var SIZE = 1000;
        var life = new Life(SIZE);

        var cells = life.cells;
        
        assertEquals(SIZE, cells.length);
        
        // Check if array is populated with 0's and 1's
        var sum = 0;
        for (var i=0; i < SIZE; i++) {
            for (var j=0; j < SIZE; j++) {
                var value = cells[i][j];
                sum = sum + value;
                assert(value === 0 || value === 1);
            }
        }
        // console.log(sum);
        assert(sum !== 0 && sum !== SIZE);
    }
});