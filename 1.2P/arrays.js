var arrayApp = new Vue({
    el: '#array-app',
    data: {
        baseArray: [1, 2, 3, "a", "b"],
        joined: '',
        sliced: [],
        reversed: [],
        stringSpliced: [],
        numberSpliced: 0
    },
    created() {
        this.joined = this.baseArray.join('-');
        this.sliced = this.baseArray.slice(1, 4);
        this.reversed = [...this.baseArray].reverse(); // Spread to not mutate the original array
        this.stringSpliced = this.baseArray.splice(3, 2, "c");
        this.numberSpliced = this.baseArray[2];
    }
});