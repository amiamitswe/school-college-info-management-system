import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize';

import AllStudentsHeader from './C-AllStudents/AllStudents-header';
import AllStudentsMiniDetails from './C-AllStudents/AllStudent-miniDetails';

import {Loding1} from '../components/Loading';

import {NoData} from '../components/Alert';

import styles from '../scss/App.module.scss';

class AllStudents extends Component {

    state = {
        "C_Student" : null
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/amiamitswe/myjson/sms")
            .then(response => response.json())
            .then(data => this.setState({ C_Student: data.C_Student }));

        console.log('data perses success. Mounted ....');
    }

    render = () => {
        try {
            return (
                (this.state.C_Student.length !== 0) ? (
                    <div className={styles.AllStudents}>
    
                        <Collapsible accordion={true}>
                            {
    
                                this.state.C_Student.map((data, key) => (
                                    <CollapsibleItem
                                        key={key}
                                        header={
                                            <AllStudentsHeader
                                                sId={key + 1}
                                                sNane={data.name}
                                                sImage={data.img_url}
                                            />
                                        }
                                    >
                                        <AllStudentsMiniDetails
                                            sClass={data.class}
                                            sGroup={data.group}
                                            sPassYear={data.passing_year}
                                        />
                                    </CollapsibleItem>
                                ))
                            }
    
                        </Collapsible>
    
                    </div>
                ) :
                    
            <NoData message = "no records found" />
            );
        }
        catch(e) {
            //console.log(e);
            return(
                <Loding1 />
            )
        }
    }
}

export default AllStudents; 