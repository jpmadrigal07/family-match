import React from 'react';

const addevents = () => {
    return (
    <div>
    <div class="container">
        <div id="events">
            <div class="row">
                <div class="col-md-12">
                    <div class="events-content events">
                        <div class="row">
                                <div class="col-md-12">
                                    <p id="header-title">Events</p>
                                    <p id="header-sub-title">Information about what's happening in your family's life</p>
                                </div>
                            </div>
                        <div class="row">
                                <div class="col-md-6 col-md-offset-3">
     
                                        <div class="form-group">
                                                <label class="control-label">Title</label>
                                                <input type="text" class="form-control events-input" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Cost</label>
                                            <input type="text" class="form-control events-input" id="cost-input" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Requirement</label>
                                            <input type="text" class="form-control events-input" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Location</label>
                                            <input type="text" class="form-control events-input" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">From</label>
                                            <div class="input-group date" id="eventDate1">
                                              <input type="text" class="form-control events-input-2" name="date" autocomplete="off" value="10/31/1990" />
                                              <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label">To</label>
                                            <div class="input-group date" id="eventDate2">
                                              <input type="text" class="form-control events-input-2" name="date" autocomplete="off" value="10/31/1990" />
                                              <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                                            </div>
                                          </div>
                                          <div class="form-group">
                                                <label class="control-label">Image (Optional)</label>
                                                <div class="file-upload">
                                                    <div class="file-select">
                                                    <div class="file-select-button" id="fileName">Choose File</div>
                                                    <div class="file-select-name" id="noFile">No file chosen...</div> 
                                                    <input type="file" name="chooseFile" id="chooseFile"/>
                                                    </div>
                                                </div>
                                        </div>
                                          <div class="form-group">
                                            <label class="control-label">Description (Optional)</label>
                                            <textarea class="form-control events-textarea" rows="5" id="comment"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-default btn-block events-btn">Add</button>
                                        </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default addevents;