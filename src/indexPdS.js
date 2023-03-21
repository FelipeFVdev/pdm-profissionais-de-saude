import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import doc1 from '.images/doc1.jpg'

const App = () => {

    const containerStyles = () =>{
        return{
            width: 1280, margin: 'auto', border: '1px solid black', backgroundColor: '#EEE', borderRadius: 8, padding: 12, textAling: 'center'
        }
    }

    const docNames = {doc1: 'José da Silva', doc2: 'Maria da Silva', doc3: 'Jaqueline Mendes'};

return(
    <div style={containerStyles()}>
        <h2>Profissionais de saúde</h2>
        <div style={{margin: 8, border: '1px solid #DDD', borderRadius : 8 , padding: 8, display: 'flex', flexDirection: 'row', 
        justifyContent: 'space-around'}}>

                <div className="profissional">
                    <img scr={doc1}/>
                    <p>{docNames.doc1}</p>
                </div>

                <div className="profissional">
                    <img src={process.env.PUBLIC_URL + 'doc2.jpg'}/>
                    <p>{docNames.doc2}</p>
                </div>

                <div className="profissional">
                    <img scr="https://unsplash.com/photos/yWYiNNK_tOI"/>
                    <p>{docNames.doc3}</p>
                </div>
        </div>
    </div>
)

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)