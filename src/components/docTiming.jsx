import React from 'react';
import { FormGroup,Label,Input,Button } from 'reactstrap';

const DocTime = () => {
    return (
        <React.Fragment>
            <h1>Doctor-Timing</h1><hr/><hr/>
            <FormGroup>
                {/* Monday */}
                <h3>Monday</h3>
                <Label className="m-2" for="mon">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="mon">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="mon">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="mon">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Tuesday */}
                <h3>Tuesday</h3>
                <Label className="m-2" for="tue">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="tue">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="tue">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="tue">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Wednesday */}
                <h3>Wednesday</h3>
                <Label className="m-2" for="wed">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="wed">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="wed">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="wed">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Thrusday */}
                <h3>Thrusday</h3>
                <Label className="m-2" for="thrus">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrus">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="thrus">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="thrus">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Friday */}
                <h3>Friday</h3>
                <Label className="m-2" for="fri">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="fri">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="fri">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="fri">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Saturday */}
                <h3>Saturday</h3>
                <Label className="m-2" for="sat">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="sat">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="sat">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="sat">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <hr/>

                {/* Sunday */}
                <h3>Sunday</h3>
                <Label className="m-2" for="sun">Start Time: </Label>
                <Input className="col-6 m-1" type="select" name="sun">
                    <option>speciality 1</option>
                    <option>speciality 2</option>
                    <option>speciality 3</option>
                    <option>speciality 4</option>
                    <option>speciality 5</option>
                </Input>
                <Label className="m-2" for="sun">End Time: </Label>
                <Input className="col-6 m-1" type="select" name="sun">
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