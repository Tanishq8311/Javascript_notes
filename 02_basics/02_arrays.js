const marvel_heros= ["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// arrays in arrays aajaaega isme 
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// how to merge properly 2 arrays
// const neww =  marvel_heros.concat(dc_heros)
// console.log(neww)

// eg kaanch ka glass 
// const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);

// another method to spread out is flat()
// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array = another_array.flat(Infinity)
// console.log(real_array);

// console.log(Array.from("tanishq")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"tanishq"})) //important case empty array 

// make arrays from diff variables 
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));
