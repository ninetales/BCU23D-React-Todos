import { settings } from '../utilities/config.js';
import HttpClient from '../utilities/Http.js';

export const getDummyData = async () => {
    const http = new HttpClient(
        `${settings.BASE_URL}${settings.TODO_API_KEY}&amount=5&randomdone=false`
    );
    return await http.get();
}