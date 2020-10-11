class User {
    static collection = "users";
    uid;
    name;
    email;
    phone;
    role;
    gender;
    dob;
    setRegistrationData = (uid, name, email) => {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
    getRegistrationData = () => {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
        }
    }
    setUser = (uid, name, email, phone, role, gender, dob) => {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.gender = gender;
        this.dob = dob;
    }
    getUser = () => {
        return this;
    }
    setDocToObject = (document) => {
        return document && Object.assign(this, document);
    }
}

export default User;