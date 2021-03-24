import React from 'react'

function Form() {
    return (
        <div>
             <form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="" placeholder="Name"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <select 
                                    // className="selectpicker"
                                    >
                                        <option>What is app about?</option>
                                        <option>What is app about?</option>
                                        <option>What is app about?</option>
                                    </select>

                                </div>
                                <div class="col-12">

                                    <div class="btn-blk text-center">
                                        <button class="btn btn-primary btn-lg">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </form>
        </div>
    )
}

export default Form
