import React, {Fragment} from 'react'
import Leads from './Leads'
import Form from './Form'


export default function Dashboard() {
    return (
        
            <Fragment>
        <div className="row">
            <div className="col-8"><Leads/></div>
            <div className="col-4"><Form/></div>
        </div>
            
            
        </Fragment>
        
    )
}
