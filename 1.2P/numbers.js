var numberApp = new Vue({
    el: '#number-app',
    data: {
        baseNumber: 1234.5678,
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
        this.parsed = parseInt("123");
    }
});