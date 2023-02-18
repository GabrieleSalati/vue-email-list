const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },

    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
        }
    }
}).mount('#app')