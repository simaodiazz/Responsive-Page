const fs = require("fs")
const { compile } = require("sass")


const styles = "./styles/";
const src = `${styles}src/`;
const dist = `${styles}dist/`;

try {    
    fs.mkdirSync(styles)
    fs.mkdirSync(src)
    fs.mkdirSync(dist)
} catch (ignored) { }

setInterval(() => {
    const files = fs.readdirSync(src)
    for (const file of files) {
        try {
            const css = compile(`${src}${file}`).css;
            fs.writeFileSync(`${dist}${file.split(".")[0]}.css`, css);
        } catch (ignored) { }
    }
}, 2000);
