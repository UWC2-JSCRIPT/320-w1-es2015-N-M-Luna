// Define class here
const HTMLElement = class HTMLElement {
    constructor(tag,content) {
        //Instance variables: https://stackoverflow.com/questions/55505710/what-is-an-instance-variable-in-javascript
        //this.name = `HTMLElement`
        this.tag = tag;
        this.content = content;
    }
    //Method: a function that "can be called publicly"(?) as instanceHTMLElement.render()
    render() {
        return `<${this.tag}>${this.content}</${this.tag}>`
    }
};

// Export class here
export default {HTMLElement};
