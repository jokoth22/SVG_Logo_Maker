class Shape{
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}

class triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class square extends Shape {
    render(){
        return `<rect x="80" y="20" rx="10" ry="10" width="60" height="60" fill="${this.color}" />`;
    }
}

class circle extends Shape {
    render(){
        return `<circle cx="100" cy="75" r="45" fill="${this.color}" />`;
    }s
}

module.exports = { circle, triangle, square }