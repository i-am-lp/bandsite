class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
    }
};

async function getComments () {
    try {
        const comments = await axios.get('https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=feb0356e-ecdf-49d8-a7bf-d83e8ae70888')
        
        console.log(comments);
    }

    catch (e) {
        const errMsg = e.message;
        alert(errMsg);
    }
}

getComments();





// async function postComment(comment) {
//     try {
//     const response = await axios.post(
//         `${this.baseUrl}/comments`, // Adjust endpoint as needed
//         comment,
//         {
//             headers: {
//                 'Authorization': `Bearer ${this.apiKey}`,
//                 'Content-Type': 'application/json'
//             }
//         }
//     );
//     return response.data;
// } 
// catch (error) {
//     console.error('Error posting comment:', error);
//     throw error;
// }
// }


