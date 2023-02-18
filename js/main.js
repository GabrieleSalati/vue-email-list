const { createApp } = Vue


createApp({
    data() {

        return {
            mail_list: [
            ]
        }
    },

    methods: {

        generateEmail() {
            for (i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.mail_list.push(response.data.response);

                        // handle success
                        console.log(response.data.response);
                        console.log(this.mail_list);
                    })
            }
        }
    }
}
).mount('#app')

