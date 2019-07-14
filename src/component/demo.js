
import demoChild from './demo-child';
import currentUser from './current-user';
export default {
    name: 'demo',
    components: {
        demoChild,
        currentUser,
    },
    template: 
        '<div>' +
        'this is a demo page' +
        '<demoChild>' +
        '<template v-slot:header><h1>Here might be a page title</h1></template>' +
        '<p>A paragraph for the main content </p> <p> And another one</p>' +
        '<template v-slot="footer"><p>Here is some contact info</p></template>' +
        '</demoChild>' +
        '<currentUser><template v-slot:default="slotProps">{{slotProps.user.lastName}}</template></currentUser>'+
        '</div>',
    
}