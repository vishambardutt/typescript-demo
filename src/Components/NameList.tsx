import React from 'react'
type NameListProps = {
    names: {
        first: string
        last: string
    }[]

}
export const NameList = (props:NameListProps) => {
  return (
    <div>{props.names.map((name) =>{
        return (
            <h4 key={name.first}>
                {name.first} {name.last}
            </h4>
        )
    })}</div>
  )
}
