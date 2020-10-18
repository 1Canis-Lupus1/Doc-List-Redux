import React,{useState} from 'react';
import { FormGroup,Label,Input,Button } from 'reactstrap';

const DocTime = () => {
    const initialTime={start:"",end:""};
    const [docTime,setDocTime]=useState(initialTime);

    //Handling Date Change
    const handleChange=(e)=>{
        console.log("Changed:",e.target.value);
    }

    return (
        <React.Fragment>
            <h1>Doctor-Timing</h1><hr/><hr/>
            <FormGroup>
                {/* Monday */}
                <h3>Monday</h3>
                <Label className="m-2" for="monStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="monStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="monEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="monEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Tuesday */}
                <h3>Tuesday</h3>
                <Label className="m-2" for="tueStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="tueStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="tueEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="tueEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Wednesday */}
                <h3>Wednesday</h3>
                <Label className="m-2" for="wedStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="wedStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="wedEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="wedEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Thrusday */}
                <h3>Thrusday</h3>
                <Label className="m-2" for="thrusStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrusStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="thrusEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrusEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Friday */}
                <h3>Friday</h3>
                <Label className="m-2" for="friStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="friStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="friEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="friEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Saturday */}
                <h3>Saturday</h3>
                <Label className="m-2" for="satStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="satStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="satEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="satEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Sunday */}
                <h3>Sunday</h3>
                <Label className="m-2" for="sunStart">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="sunStart" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="sunEnd">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="sunEnd" onChange={handleChange}>
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
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