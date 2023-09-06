var functionApp = new Vue({
    el: '#function-app',
    data: {
        resultApply: 0,
        resultBind: ''
    },
    methods: {
        add: function(x, y) {
            return x + y;
        },
        greet: function(message) {
            return message + ', ' + this.resultBind;
        }
    },
    created() {
        // Using apply
        this.resultApply = this.add.apply(null, [2, 3]); // equivalent to this.add(2,3)

        // Using bind
        var boundGreet = this.greet.bind({ resultBind: 'Hello' });
        this.resultBind = boundGreet('Welcome to Vue');
    }
});