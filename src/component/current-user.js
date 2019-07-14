export default {
    name: 'current-user',
    data: function() {
        return {
            user: {
                lastName: 'zll'
            }
        }
    },
    template: '<span><slot v-bind:user="user">{{user.lastName}}</slot></span>'
}