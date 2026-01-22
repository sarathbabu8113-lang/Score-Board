homescore=document.getElementById("homescore")
guestscore=document.getElementById("guestscore")

home=0
guest=0

function home1()
{
    home+=1
    homescore.textContent=home
}

function home2()
{
home+=2
    homescore.textContent=home}


function home3()
{
home+=3
    homescore.textContent=home}



function guest1()
{
    guest+=1
    guestscore.textContent=guest
}

function guest2()
{
guest+=2
    guestscore.textContent=guest}

function guest3()
{
guest+=3
    guestscore.textContent=guest}
