import React,{useState} from 'react';
import { FormGroup,Label,Input,Button } from 'reactstrap';
import ReactDOM from 'react-dom';

const DocTime = () => {
    const initialTime={monStart:"",monEnd:"",tueStart:"",tueEnd:"",wedStart:"",wedEnd:"",thrusStart:"",thrusEnd:"",friStart:"",friEnd:"",satStart:"",satEnd:"",sunStart:"",sunEnd:""};
    const [docTime,setDocTime]=useState(initialTime);

    //Destructuring Doctor Timings
    const {monStart,monEnd,tueStart,tueEnd,wedStart,wedEnd,thrusStart,thrusEnd,friStart,friEnd,satStart,satEnd,sunStart,sunEnd}=docTime;

    //Handling Date Change
    const handleChange=(e)=>{
        //Setting the state of individual timing fields
        setDocTime({[e.target.name]:[e.target.value]});
        //Logs the Value with Name
        console.log("Timings:",e.target.name,e.target.value);
        // console.log(e.target.name.getValue());
        
    }

    return (
        <React.Fragment>
            <h1>Doctor-Timing</h1><hr/><hr/>
            <FormGroup>
                {/* Monday */}
                <h3>Monday</h3>
                <Label className="m-2" for="monStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="monStart" value={monStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="monEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="monEnd" value={monEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Tuesday */}
                <h3>Tuesday</h3>
                <Label className="m-2" for="tueStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="tueStart" value={tueStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="tueEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="tueEnd" value={tueEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Wednesday */}
                <h3>Wednesday</h3>
                <Label className="m-2" for="wedStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="wedStart" value={wedStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="wedEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="wedEnd" value={wedEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Thrusday */}
                <h3>Thrusday</h3>
                <Label className="m-2" for="thrusStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrusStart" value={thrusStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="thrusEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrusEnd" value={thrusEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Friday */}
                <h3>Friday</h3>
                <Label className="m-2" for="friStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="friStart" value={friStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="friEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="friEnd" value={friEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Saturday */}
                <h3>Saturday</h3>
                <Label className="m-2" for="satStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="satStart" value={satStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="satEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="satEnd" value={satEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>

                {/* Sunday */}
                <h3>Sunday</h3>
                <Label className="m-2" for="sunStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="sunStart" value={sunStart} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <Label className="m-2" for="sunEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="sunEnd" value={sunEnd} onChange={handleChange}>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                    <option> 5</option>
                </Input>
                <hr/>
                <Button>Submit</Button>
            </FormGroup>

            {/* <UncontrolledDropdown>
                <DropdownToggle>
                    Select Start Time
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Time1</DropdownItem>
                    <DropdownItem>Time2</DropdownItem>
                    <DropdownItem>Time3</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
                <DropdownToggle>
                    Select End Time
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Time1</DropdownItem>
                    <DropdownItem>Time2</DropdownItem>
                    <DropdownItem>Time3</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> */}
        </React.Fragment>
    )
}

export default DocTime;