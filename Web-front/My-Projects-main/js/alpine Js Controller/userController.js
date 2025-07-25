document.addEventListener('alpine:init', () => {

    Alpine.data('userData', () => ({

        Users: [],
        isLoding: false,
        getUser() {
            this.isLoding = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {

                this.Users = res.data


            }).catch(error => {
                console.log(error.message);

            }).finally(() => {
                this.isLoding = false
            })
        }

    }))
})