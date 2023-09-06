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