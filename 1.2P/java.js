// 1. String methods
var stringApp = new Vue({
    el: '#string-app',
    data: {
        baseString: 'testing - testing',
        lowercased: '',
        uppercased: '',
        substringed: '',
        replaced: '',
        charAtPosition: ''
    },
    created() {
        this.lowercased = this.baseString.toLowerCase();
        this.uppercased = this.baseString.toUpperCase();
        this.substringed = this.baseString.substring(0, 5);
        this.replaced = this.baseString.replace('test', 'ing');
        this.charAtPosition = this.baseString.charAt(1); // e
    }
});

// 2. Number methods
var numberApp = new Vue({
    el: '#number-app',
    data: {
        baseNumber: 1234.5679,
        rounded: 0,
        fixed: '',
        exponential: '',
        stringed: '',
        parsed: 0
    },
    created() {
        this.rounded = Math.round(this.baseNumber);
        this.fixed = this.baseNumber.toFixed(2);
        this.exponential = this.baseNumber.toExponential(2);
        this.stringed = this.baseNumber.toString();
        this.parsed = parseInt("testing");
    }
});

// 3. Array methods
var arrayApp = new Vue({
    el: '#array-app',
    data: {
        baseArray: [1, 2, 3, "a", "asd"],
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

// 4. Date methods
var dateApp = new Vue({
    el: '#date-app',
    data: {
        currentDate: new Date(),
        dateISOString: '',
        dateLocale: '',
        dateUTCHours: 0,
        millisecondsSinceEpoch: 0,
        specificDate: ''
    },
    created() {
        this.dateISOString = this.currentDate.toISOString();
        this.dateLocale = this.currentDate.toLocaleDateString();
        this.dateUTCHours = this.currentDate.getUTCHours();
        this.millisecondsSinceEpoch = this.currentDate.getTime();
        this.specificDate = new Date(2023, 0, 1); // January 1, 2023
    }
});

// 5. Function Methods
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
        this.resultApply = this.add.apply(null, [2, 2]); // equivalent to this.add(2,3)

        // Using bind
        var boundGreet = this.greet.bind({ resultBind: 'Hello' });
        this.resultBind = boundGreet('Testing');
    }
});