import React, { useState } from 'react'
import "./SortTable.css";


export default function SortTable({ data }) {


    const columns = data[0] && Object.keys(data[0]);


    return (
        <>
            <table className='content-table'>
                <thead>
                    <tr>
                        {data[0] && columns.map((heading) =>
                        <th key={Object.keys} >{heading}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => {
                        return (
                            <tr>
                                {
                                    columns.map(column => <td>{row[column]}</td>)
                                }
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>

        </>
    )
}
