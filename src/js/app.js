export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [404, 'Page not found'],
            [500, 'Internal server error'],
            [403, 'Access forbidden']
        ]);
    }
    
    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        } else {
            return 'Unknown error'
            }
    }
 }