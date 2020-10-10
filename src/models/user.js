class User {
    static collection = "users";
    uid = "";
    name = "";
    email = "";
    phone = "";
    role = "user";
    gender = "";
    dob = null;
    isFilled = false;
    setRegistrationData = (uid, name, email) => {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
    setUser = (uid, name, email, phone, role, gender, dob, isFilled) => {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.gender = gender;
        this.dob = dob;
        this.isFilled = isFilled;
    }
    getUser = () => {
        return {
            uid: this.uid,
            name: this.name,
            email: this.email,
            phone: this.phone, 
            role: this.role,
            gender: this.gender,
            dob: this.dob,
            isFilled: this.isFilled
        }
    }
    setDocToObject = (document) => {
        return document && Object.assign(this, document);
    }
}

export default User;