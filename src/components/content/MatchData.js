import React from 'react';

const matchdata = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div id="interested-form">
                        <p>Why are you interested in FamilyMatch?</p>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio" defaultChecked/>New to the area?</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio"/>Wish to increase number of families you can be with</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio"/>Change in the family status (e.g. divorce, remarried)?</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio"/>Would you like to experience families outside your ethnic group?</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio"/>Would like to be matched with families just like yours?</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="interestedradio" className="form-radio"/>Other</label>
                        </div>
                        <button type="submit" className="btn btn-default btn-block continue-btn">Click to Continue&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default matchdata;