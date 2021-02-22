export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public course: string,
        public timePreference: string,
        public subscribe: boolean,
    ) {}
}
