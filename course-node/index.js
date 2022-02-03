console.log(process.argv);
/*
[  
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\<username>\\Desktop\\Konexio\\javascript\\course-node\\index.js',
]
*/
console.log('bonjour', process.argv[2], process.argv[3]);

/* object process
process {
    argv: [
        'C:\\Program Files\\nodejs\\node.exe',
        'C:\\Users\\DDA209\\Desktop\\Konexio\\javascript\\course-node\\index.js',
        'Didier', /// index 2
        'PASCAREL'
    ]
}
*/

let args = process.argv.slice(2);
let port = parseInt(args[0]);
console.log('args -->', args);
console.log('port -->', port, typeof port);

console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));
// node index.js 10 15
// ["...node.exe", "...js", "10", "15"]
// 1015
