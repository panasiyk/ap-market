import firebase from 'firebase/app';
import 'firebase/database';

export class Firebase {
    constructor() {
        const config = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
        };
        firebase.initializeApp(config);
    }

    static async sentOrder<T>(dataForServer: T) {
        try {
            const index = await this.getNewIndex();
            return new Promise(resolve => firebase.database().ref(`order/${index}`).set(dataForServer, (error) => {
                if (error) throw Error(error.message)
                else resolve()
            }))
        } catch ({status, message, code, ...other}) {
            throw Error(message)
        }
    }

    static getNewIndex(): Promise<number> {
        return new Promise<number>(resolve => {
            firebase.database()
                .ref("order")
                .on("value", snapshot => resolve(snapshot.numChildren()))
        })
    };

    static create() {
        new this()
    }
}
