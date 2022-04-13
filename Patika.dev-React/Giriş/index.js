// console.log("Hello");

// import total from './my-module.js';

//  birden fazla fonksiyonu import etmek için

// import {hello, total} from "./my-module.js";

// normal ve default olan değerleri ayna anda import etme 
// NOT: default olan çıktı {} içine yazılmaz 
// NOT 2: sadece bir tane default çıktı olacağı için farklı isimlendirme ile de çağrılabilir.

// import minus, {hello, total} from "./my-module.js";

// farklı isimle default çıktıyı çağırma
import min, {hello, total} from "./my-module.js";

console.log(total(3,11));

hello();

console.log(min(5,1));