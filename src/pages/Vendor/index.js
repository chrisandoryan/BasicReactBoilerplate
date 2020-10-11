import React, { useContext, useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Card } from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, Doughnut } from 'react-chartjs-2';
import { withRouter } from "react-router-dom";
import { AuthContext, withFirebase } from "../../contexts";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css'

function Vendor(props) {
    const { user } = useContext(AuthContext);
    const db = props.firebase.db;
    const [activeId, setActiveId] = useState("")
    const [attendees, setAttendees] = useState([]);
    const [reactions, setReactions] = useState([]);
    const [events, setEvents] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [options, setOptions] = useState([]);

    const defaultOption = options[0];

    const fetchEvent = (e) => {
        let eventsData = []
        let myOption = []
        db.collection("events")
            .where("vendor_id", "==", user.uid )
            .get()
            .then((event) => {
                event.forEach(evnt => {
                    let temp = evnt.id
                    let data = evnt.data()
                    data.id = temp
                    let option = { value:data.id, label:data.name}
                    myOption = [...myOption, option]
                    eventsData = [...eventsData, data]
                })
                setOptions(myOption)
                setEvents(eventsData)
                if(activeId == "")
                    setActiveId(myOption[0].value)
                setIsFetched(true)
            })
    }

    const fetchPurchases = (e) => {
        let purchasesData = []
        db.collection("events")
            .doc(activeId)
            .collection("purchases")
            .get()
            .then((purchases) => {
                purchases.docs.forEach(purchase => {
                    purchasesData = [...purchasesData,purchase.data()]
                })
                setAttendees(purchasesData)
                console.log("My Purchase Data : ",purchasesData)
            })
    }

    const fetchReactions = () => {
        let reactionsData = []
        db.collection("events")
            .doc(activeId)
            .collection("reactions")
            .get()
            .then((reactionsDocs) => {
                reactionsDocs.docs.forEach(reaction => {
                    reactionsData = [...reactionsData, reaction.data()]
                })
                setReactions(reactionsData)
            })
    }

    
    function countEmoticon(){
        let smile=0
        let normal=0
        let sad=0
        reactions.forEach(r => {
            if(r.emoticon == 1)
                sad++
            else if(r.emoticon == 2)
                normal++
            else
                smile++
        })

        return [sad,normal,smile]
    }

    function countAttendee(){
        let attend=0
        let dont=0

        attendees.forEach(attendee => {
            if(attendee.isAttend == false)
                dont++
            else
                attend++
        })

        return [attend, dont]
    }

    const _onChange = (option) => {
        setActiveId(option.value)
        fetchPurchases()
        fetchReactions()
    }

    useEffect(() => {
        if(user !== null) {
            fetchEvent()
            if(isFetched) {
                fetchPurchases()
                fetchReactions()
            }
        }
    }, [activeId, user]);

    const pie = {
        labels: [
            'Sad','Normal','Smile'
        ],
        datasets: [{
            data: countEmoticon(),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    const doughnat = {
        labels: [
            'Attend',
            'Didn\'t Attend'
        ],
        datasets: [{
            data: countAttendee(),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    return (
        <React.Fragment>
            <div className={"my-container"}>
                <ProSidebar>
                    <SidebarHeader>
                        <h3 id={"sidebar-title"}>Vendor</h3>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<FaHome />}>Dashboard</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
                <div className={"card-contents"}>
                    <div style={{width:'500px', marginLeft:'24px', marginTop:'16px'}}>
                        <h3>Select Your Event</h3>
                        <Dropdown onChange={(e) => _onChange(e)} options={options} value={defaultOption} placeholder="Select an option" />
                    </div>
                
                    <div className={"cards-container"}>
                        <Card className={"mycard shadow rounded"}>
                            <Card.Title className={"card-title"}>Attendee Reaction</Card.Title>
                            <Pie data={pie} />
                        </Card>
                        <Card className={"mycard shadow rounded"}>
                            <Card.Title className={"card-title"}>Amount of Attendee</Card.Title>
                            <Doughnut data={doughnat} />
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(withFirebase(Vendor))