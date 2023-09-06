var stringApp = new Vue({
    el: '#string-app',
    data: {
        baseString: 'Hello World',
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
        this.replaced = this.baseString.replace('World', 'Vue');
        this.charAtPosition = this.baseString.charAt(1); // e
    }
});