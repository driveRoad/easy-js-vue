export default {
    name: 'demo-child',
    template: 
        '<div class="container">' + 
        '<header> <slot name="header"></slot> </header>' +
        '<main><slot></slot></main> ' +
        '<footer><slot name="footer"></slot></footer>' + 
        '</div>'
}