import React , { useEffect, useState } from 'react';
import "./AP_results.css";

const AP_results = ({fios, tests, users}) => {    
    const [ results, setResults ] = useState([]);
    const [ curList, setCurList] = useState([]);
    const [ curFio, setCurFio ] = useState('');

    useEffect(() => {
        fetch('http://82.209.229.159/sql_getResults.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {         
            let qq = [];  
            data.results.map ( el => {                 
                qq.push(
                    {
                        "user_id" : el.user_id/1,
                        "test_id" : el.test_id/1,
                        "start" : el.start,
                        "end" : el.end,
                        "result" : el.result/1    
                    }                   
                )});                
                setResults(qq); 
            });  
            genResultTable();
    },[]);
    let genResultTable = () => {
        let arr = [];
        results.forEach( el => {                       
            let titl = tests[el.test_id/1]["title"];
            let usr  = users.get(""+el.user_id);
            if ( curFio === '' || curFio === usr ) {
                arr.push(
                    <tr className = "AP_tab_tr">
                        <td> { usr } </td>
                        <td> { titl }</td>
                        <td> {el.start} </td>
                        <td> {el.end.split(' ')[1]}   </td>
                        <td> {el.result }</td> 
                    </tr>
                )
            }           
        })
        setCurList(arr);
    };
    let selectChange = (event ) =>{
        setCurFio( event.target.value );        
    };
    let refreshBut = () => {
        genResultTable();
    }
    return (
        <div className = "AdminPanel_results">
            <div className = "AdminPanel_head">           
                <select                 
                    placeholder = "Фамілія вучня"
                    onChange = { selectChange }
                    >
                    {fios.map(el =>{
                        return <option key = {''+el}>{el}</option>
                    })}                                                  
                </select>
                <button                
                    onClick = { () => refreshBut()}>
                        Аднавіць табліцу
                    </button>
            </div>
            <table className = "AdminPanel_results">                
                <thead className = "AP_tab_head">                    
                        <td>User</td>
                        <td>title</td>
                        <td>start</td>
                        <td>end</td>
                        <td>result</td>
                    
                </thead>
                <tbody>
                    { curList }
                </tbody>                             
                </table>    
        </div>
    )    
}

export default AP_results;