let a = [];
a = [0, 2, 4, 2, 2, 0];
let b = 2;
Bogosatana(a, b);

function Bogosatana(a, b) {
    let res = [];
    let j = 0;
    let k = 0;
    for(let i = 0; i < a.length; i++) {
        if(k===-1) break;
        res.push(a.indexOf(b, j));
        j = a.indexOf(b, j)+1;
        k = a.indexOf(b, j);
    }
    console.log(res);
    return res
}
