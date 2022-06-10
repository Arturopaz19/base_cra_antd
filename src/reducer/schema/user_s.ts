export interface UserDataPropsI {
    email: string;
    id: any;
    lastnames: string;
    name: string;
    token: string;
}

export interface UserI {
    data: UserDataPropsI;
    status: {
        state: string;
        fetching: boolean;
    };
    errorMessage: string;
}

const UserSchema = Object.freeze({
    data: {
        email: "",
        id: "",
        lastnames: "",
        name: "",
        token: ""
    },
    status: {
        state: "",
        fetching: false
    },
    errorMessage: ""
});

export default UserSchema;
