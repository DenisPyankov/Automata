let fs = require('fs');
let argv = process.argv;


let S = fs.readFileSync(argv[2], 'utf-8');
let n = S.length;
let T = fs.readFileSync(argv[3], 'utf-8');
let m = T.length;


let A = new Array();
for (i=0; i<m; i++)
	A[T.charAt(i)]=0;

let del = new Array(m+1);
for (i=0; i<=m; i++)
	del[i] = new Array();
for (i in A)
	del[0][i]=0;
for (i=0; i<m; i++){
	prev = del[i][T.charAt(i)];
	del[i][T.charAt(i)]=i+1;
	for (j in A)
		del[i+1][j]=del[prev][j];
}
/*
let out = '';
for (i in A)
	out+=i+' ';
console.log(out);
for (j=0; j<=m; j++){
	out = '';
	for (i in A)
		out+=del[j][i]+' ';
	console.log(out,'  ',j);
}
*/

let cond = 0;
for (i=0; i<n; i++){
	if (S.charAt(i) in A){
		cond = del[cond][S.charAt(i)];
		if (cond == m)
			console.log(i-m+2);
	}
	else (cond = 0);
}



	
		








