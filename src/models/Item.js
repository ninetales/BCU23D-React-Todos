export class Item {

    done = '';
    id = '';
    task = '';
    __v = '';
    _id = '';


    constructor(task) {
        this.done = false;
        this.id = 0;
        this.task = task;
        this.__v = 0;
        this._id = randomId();
    }

}

function randomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < 10; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId;
}