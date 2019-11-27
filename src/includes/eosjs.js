import config from 'config';

export class EosjsService {

    getInfo() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
        };

        return fetch(`${config.apiUrl}/get_info`, requestOptions).then(this.handleResponse);
    }

    getBlockById(id) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json'},
            body: JSON.stringify({block_num_or_id:id})
        };

        return fetch(`${config.apiUrl}/get_block`, requestOptions).then(this.handleResponse);
    }

    handleResponse(response) {

        return response.text().then(text => {

            if (!response.ok) {

                return Promise.reject('There was an error in the EOSIO API!');
            }

            const data = text && JSON.parse(text);

            return data;
        });
    }
}
