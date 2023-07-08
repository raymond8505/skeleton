import { useEffect, useState } from "react"

export function useJsonServer(endpoint: string)
{
    const [items,setItems] = useState([])

    const readItems = () => fetch(`http://localhost:3001/${endpoint}`).then(res => res.json()).then(setItems)

    const createItem = (item: any) => new Promise((resolve) => {
        fetch(`http://localhost:3001/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resp) => {
        readItems().then(() => {
            resp.json().then((data) => {
                resolve(data)
            })
        })
    })})

    const deleteItem = (id: number) => fetch(`http://localhost:3001/${endpoint}/${id}`, {
        method: 'DELETE'
    }).then(readItems)

    const editItem = (item: any) => fetch(`http://localhost:3001/${endpoint}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(readItems)

    useEffect(() => {
        readItems()
    }, [])
    return {
        items,
        readItems,
        createItem,
        deleteItem,
        editItem
    }
}