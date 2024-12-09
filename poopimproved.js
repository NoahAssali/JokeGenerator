

let button = document.querySelector('.silly')

button.onclick = () => {
    jokes = ['Time flies like an arrow. Fruit flies like a banana', 'A backwards poet writes inverse', 'What is brown and sticky? A stick', 'Atheism is a non-prophet organization', 'A plateau is the highest form of flattery', 'Orions Belt is a huge waist of space', 'I was up all night wondering where the sun went, but then it dawned on me.', 'How do you find Will Smith in the snow? Look for fresh prints']

    const randomindex = Math.floor(Math.random() * jokes.length)
    const hehe = jokes[randomindex]

   document.querySelector('.joke').innerHTML = hehe
}
