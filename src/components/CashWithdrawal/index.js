import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'


class CashWithdrawal extends Component{
    state={total:2000}
    balanceDeduction=(value)=>{
        this.setState(oldValue=>({
             total:oldValue.total-value
        }))
    }
    render(){
        const{denominationsList}=this.props
        const{total}=this.state
        return(
      
            <div className='cash-withdrawal-container'>
                <div className='Cash-Card'>
                    <div className='Name-container'>
                        <p className='s-logo'> S</p>
                        <p className='Name'> Sarah Williams</p>
                      


                    </div>

                    <div className='Amount-card'>
                        <p className='balance-item'> Your Balance</p>
                        <div className='Amount-details'>
                            <p className='Amount'> {total}</p>
                            <p className='balance-item' > In Rupees</p>
                        </div>

                    </div>


                   <div>
                    <p className='Withdraw-heading'> Withdraw</p> 

                    <p className='choose-paragraph'> CHOOSE SUM (IN RUPEES)</p>

    
                   </div>
                    <div>
                        <ul className='card-button'>
                            {
                            denominationsList.map(eachvalue=>(
                                <DenominationItem denominationsList={eachvalue} key={eachvalue.id} balanceDeduction={this.balanceDeduction}/>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}
export default CashWithdrawal