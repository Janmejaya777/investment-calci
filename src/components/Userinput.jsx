// import {styled} from 'styled-components';

// const UserInput = styled.id`
//   padding: 1rem;
//   max-width: 30rem;
//   margin: 2rem auto;
//   border-radius: 4px;
//   background: linear-gradient(180deg, #307e6c, #2b996d);
// `
// const InputGroup = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   gap: 1.5rem;
//   `

export default function UserInput({onChange,userInput}) {
     
   const inputIsValid = userInput.duration >= 1;

    return <section id="user-input">
        <div className="input-group">
        <p>
            <label className={`label ${inputIsValid}`}>Initial Investment</label>
            <input type="number" 
            required
            value={userInput.initialInvestment}
            onChange={(event) =>onChange('initialInvestment',event.target.value)}/>
         </p>
         <p>
            <label>Annual Investment</label>
            <input type="number" 
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChange('annualInvestment',event.target.value)}/>
         </p>
         
         
         </div>
         <div className="input-group">
         <p>
            <label>Expected Return</label>
            <input type="number" required
             value={userInput.expectedReturn}
             onChange={(event) => onChange('expectedReturn',event.target.value)}/>
         </p>
         <p>
            <label>Duration</label>
            <input type="number" required
             style={{
               backgroundColor: !inputIsValid ? '#fed2d2'  : undefined,
            }}
             value={userInput.duration}
             onChange={(event) => onChange('duration',event.target.value)}/>
         </p>
         </div>
     </section>
   
}