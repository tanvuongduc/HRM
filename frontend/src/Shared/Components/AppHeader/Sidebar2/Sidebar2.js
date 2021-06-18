import { makeStyles } from '@material-ui/core';
import React from 'react';
import "../Sidebar2/Sidebar2.scss"
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles({
    parent: {
        left: '0px', 
        position:'absolute',
        top: '45px',
        width: '60px',
        height: '100vh',
        overflow:'hidden',
        '&:hover' :{
            overflow:'inherit'
        }
        
        
    },
    child: {
        height: '100vh',
        width: '194px',
        backgroundColor : '#3f51b5',
    },
    divide:{
        backgroundColor: '#ffffff',
        margin: '18px 0px'
    }
    
})
export default function Sidebar2(){
    const classes = useStyles()
    const goTo = (url = '') => {
        url = window.location.origin + '/' + url
        window.location.replace(url)
      }
    return(
        <div className={classes.parent}>
            <div className={classes.child}>
                <ul className='list-item'>
                    <li className='item' onClick={() => goTo('app')}>
                        <div className="icon">
                        <i className="fa fa-home" />
                        </div>
                        <div className='text'><span>Home</span></div>
                    </li>
                    <li className='item' onClick={() => goTo('app/company')}>
                        <div className="icon">
                        <i className="fa fa-building" />
                        </div>
                        <div className='text'><span>Company</span></div>
                    </li>
                    <li className='item' onClick={() => goTo('app/career')}>
                        <div className="icon">
                        <i className="fa fa-suitcase" />
                        </div>
                        <div className='text'><span>Career</span></div>
                    </li>
                    <li className='item' onClick={() => goTo('app/team')}>
                        <div className="icon">
                        <i className="fa fa-user-friends" />
                        </div>
                        <div className='text'><span>Team</span></div>
                    </li>
                    <li className='item' onClick={() => goTo('app/org')}>
                        <div className="icon">
                        <i class="fas fa-layer-group"></i>
                        </div>
                        <div className='text'><span>Org</span></div>
                    </li>
                    <li className='item' onClick={() => goTo('app/department')}>
                        <div className="icon">
                        <i class="fas fa-users"></i>
                        </div>
                        <div className='text'><span>Department</span></div>
                    </li>
                    <li className='item' onClick={() => this.goTo('app/certificate')}>
                        <div className="icon">
                        <i class="fas fa-award"></i>
                        </div>
                        <div className='text'><span>Certificate</span></div>
                    </li>
                    <Divider className={classes.divide}/>
                    <li className='item' onClick={() => this.goTo('app/reception/order')}>
                        <div className="icon">
                        <i className="fa fa-people-carry" />
                        </div>
                        <div className='text'><span>Helps</span></div>
                    </li>
                    <li className='item' onClick={() => this.goTo('app/reception/order')}>
                        <div className="icon">
                        <i className="fa fa-users-cog" />
                        </div>
                        <div className='text'><span>Setting</span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}