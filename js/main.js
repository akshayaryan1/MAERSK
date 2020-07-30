$(document).ready(function () {
    $("#shuffle").click(function () {
        shuffle = (array) => array.sort(() => Math.random() - 0.5);
        //Demo
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        shuffle(arr);
        for (let index = 1; index <= 9; index++) {
            var tmp = '.blocks-' + index + ' p';
            $(tmp).text(arr.shift())
        }
    });
	
	
    $("#sort").click(function () {
        //Demo
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let index = 1; index <= 9; index++) {
            var tmp = '.blocks-' + index + ' p';
            $(tmp).text(arr.shift())
        }
    });
});