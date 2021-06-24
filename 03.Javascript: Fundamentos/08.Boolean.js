//BOOLEAN

let isAtivo = false;
isAtivo = true;

isAtivo = 1 // true

!isAtivo; // false
!!isAtivo; // true


//Verdadeiros:
!!3
!!-1
!!' '
!![]
!!{}
!!Infinity
!!(isAtivo = true)


//Falsos:
!!0
!!''
!!null
!!NaN
!!undefined
!!(isAtivo = false)


let nome = '';
console.log(nome || 'Desconhecido'); // Desconhecido ~>No OU basta que um seja true.