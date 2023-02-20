document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
    const friend3 = document.getElementById('friend-3');
    friend3.style.textAlign = 'center'
})


document.getElementById('new-friend').addEventListener('click', function(){
    const sections = document.getElementById('friends');
    
    const div = document.createElement('div');
    div.classList.add('friend')
    sections.appendChild(div);
    const h1 = document.createElement('h3');
    h1.innerText = 'Friend'
    div.appendChild(h1);
    const p = document.createElement('p');
    p.innerText = 'Something new about my new friend.'
    div.appendChild(p);


})

