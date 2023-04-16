let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromlocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromlocalStorage) {
    myLeads = leadsFromlocalStorage
    render(myLeads)
}


tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

    
})


function render(leads) {
    let listItems = ""  // Create variable to hold all HTML for the list items
    for (let i = 0; i < leads.length; i++) {                // Log out the items in the myLeads array using a for loop
        //listItems += "<li><a href = '#' target = '_blank' >" +  myLeads[i]  + "</a></li>"
        listItems += `
            <li>
                <a href = '#' target = '_blank' > 
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', function() {
   myLeads.push(inputEl.value)
   inputEl.value = ''
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)
})


// create element
// set text content/innerHTML
// append to variable grabbing id


// template strings
// const recipient = "James"
// const sender = "Tammy"

// const email = `
// Hey ${recipient}! 

// How is it going? 

// Cheers ${sender}
// `

// console.log(email)

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false