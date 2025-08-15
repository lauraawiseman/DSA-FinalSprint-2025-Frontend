import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PreviousTrees(){
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/previous-trees')
             .then(response => setTrees(response.data))
             .catch(err => console.error(err));
    }, []);

    return (
        <div className="prevTreeContainer">
            <div className="prevTreeDashboard">
            <h1>Previous Trees</h1>
            <div className="prevTreeResponse">
            {trees.length === 0 ? (
                <p>No trees found.</p>
            ) : (
                trees.map((tree, index) => (
                    <div key={index} className="treeCard">
                        <strong>Numbers:</strong> {tree.inputNumbers}
                        <br/>
                        <strong>Tree Structure:</strong>
                        <pre className="json-text">{JSON.stringify(tree.treeJson, null, 2)}</pre>
                        </div>
                ))
            )}
        </div>

            </div>
            
            
        </div>
        
    )
}
export default PreviousTrees;

