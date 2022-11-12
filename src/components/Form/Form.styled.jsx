import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Button = styled.button`
display:inline-block;
max-width: 30%;
/  width: 100%;
  height: 25px;
  color: white;
  border-radius: 2.5px;
  background: #26b9ff;
/  margin-top: 25px;
//   margin-bottom: 25px;
  border: solid 1px black;
  transition: all 300ms linear;
  cursor: pointer;

  :hover {
    background-color: #f0ffff;
    color: #ff9000;
    border: solid 1px grey;
  }
`;
export const Input = styled.input`
  width: 59%;
  height: 25px;
margin-top: 10px;
margin-bottom: 15px;
    }
`;

export const Message = styled.p`
  display: inline-block;
  padding-right: 8px;
  float: left;
  font-size: 24px;
  text-align: left;
  color: black;
`;
export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  background-color: fwite;
  width: 350px;
  height: 50%;
  margin: 0 auto;
  margin-bottom: 0;
  padding: 25px;
  border: solid 1px grey;
  border-radius: 2.5px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;
