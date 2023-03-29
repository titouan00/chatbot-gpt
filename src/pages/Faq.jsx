
import { Configuration, OpenAIApi } from 'openai';
import './Faq.css'


function Faq() {

    const submit = async (message) => {
        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "Eliza", content: message}],
        });
        console.log(completion.data.choices[0].message);


    }
    submit('what\'s the best car in the world')


    return(
        <>
            <h1 className='title'>F.A.Q</h1>
            <div className='chat'>
                <div className='response'>
                    <p>response</p>
                </div>
                <input type="text" className="request"/>
            </div>
        </>
    )
}



export default Faq
