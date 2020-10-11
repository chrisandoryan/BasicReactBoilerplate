class Event {
    static collection = "events";
    id;
    name = "";
    price = 0;
    artists = [];
    concert_link = "";
    start_time = null;
    end_time = null;
    image_path = "";
    vendor_id = ""
    getEvent = () => {
        return this;
    }
    setDocToObject = (document) => {
        return document && Object.assign(this, document);
    }
}

export default Event;