import React, { useState } from 'react';
import axios from 'axios';


function NumberInput(){
    const [numbers, setNumbers] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        try{ 
            const response = await axios.post('http://localhost:8080/api/process-numbers', {
                numbers: numbers.split(',').map(num => parseInt(num.trim()))
            });
            setResponse(response.data);
        }catch(error) {
            console.error('Error submitting numbers:', error)
        }
    }

    const handleShowPrevious = () => {
        window.location.href = '/previous-trees'
    }

    return (
        <div className="appContainer">
        <div className="dashboard">
            <h1>Binary Search Tree App</h1>
            <h3>Enter Numbers</h3>
            
            <input
             type="text"
             value={numbers}
             onChange = {(e) => setNumbers(e.target.value)}
             placeholder="e.g. 5, 3, 8, 1"
             />
             <div className="btnWrapper">
             <button onClick={handleSubmit}>Submit</button>
             <button onClick={handleShowPrevious}>Show Previous</button>
             </div>
            <div className="treeResponse">
             {response && (
                <div>
                    <h3>Tree JSON:</h3>
                    <pre className="tree">{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            </div>
            </div>
            </div>
            );
        }
        export default NumberInput;