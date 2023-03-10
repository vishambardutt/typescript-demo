import React from 'react'
type StatusProps = {
    // status: string
    status: 'loading' | 'success' | 'error'

}
export const Status =(props:StatusProps) => {
    let message 
    if (props.status ==='loading') {
        message= 'Loading...'
    }else if  (props.status === 'success'){
        message = 'Data Successfull loaded'
    }else if (props.status === 'error'){
        message = 'There is error fatching data'
    }
  return (
    <div>Status -{message}</div>
  )
}
