const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: []
        }
    },
    created() {
        this.getEmails();
    },
    methods: {
        getEmails(){
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.emails.push(response.data.response);
                    });
                }
            }
        }
}).mount('#app')