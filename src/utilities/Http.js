export default class HttpClient {

    #url = '';
    constructor(url) {
        this.#url = url;
    }

    async get() {
        try {
            const response = await fetch(this.#url);
            if (response.ok) {
                return response.json();
            } else {
                console.error(`Error fetching data: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }


}