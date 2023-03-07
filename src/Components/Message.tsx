import React from "react"
type MessageProps = {
    name: string
    coinCount: number
    isCoin: boolean
}
   

export  const Message = (props: MessageProps) =>{
  return (
    <div>
        <h4>{
            props.isCoin ? `Hello ${props.name} you have ${props.coinCount} bit coins `: `No Bit Coins`
            }</h4>
        
    </div>
  )
}
