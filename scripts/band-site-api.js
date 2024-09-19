export default class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    }

    async postComment(comment) {
        try {
            const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            });

            return await response.json();
        } 
        catch (error) {
            console.error(error);
        }
    }
  
    async getComments() {
        try {
            const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            const data = await response.json();
            return data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        catch (error) {
            console.error(error);
        }
    }
  
    async getShows() {
        try {
            const response = await fetch(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}
  
