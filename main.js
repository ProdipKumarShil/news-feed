// fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7d6cd74067f44b368644c3a63df50793')
//     .then(res => res.json())
//     .then(data => console.log(data))

let arr = []
let dataLimit = 9

/* 
    all news: https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7d6cd74067f44b368644c3a63df50793
*/
const allNews = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7d6cd74067f44b368644c3a63df50793`
const appleNews = `https://newsapi.org/v2/everything?q=apple&from=2023-03-08&to=2023-03-08&sortBy=popularity&apiKey=7d6cd74067f44b368644c3a63df50793`
const json = `https://jsonplaceholder.typicode.com/posts`

// loading all news
const loadData = (url, limit) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showAllData(data.slice(0, limit))
        })
}

// loadData(json, dataLimit)

const showAllData = allData => {
    allData.forEach((singleData) => {
        
    })
}
