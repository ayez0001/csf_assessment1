export class Registration {
    constructor(
        public email: string,
        public name: string,
        public gender: string,
        public dob: string,
        public address: string,
        public country: string,
        public contactNo: string,
        public password?: string
    ) {}
}