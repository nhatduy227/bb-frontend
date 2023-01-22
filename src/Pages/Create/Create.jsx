import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import './Create.css'

export default function Create() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='content'>
        <div className='title'></div>
        <h1>Verifiable Legal Entity Identifier (vLEI)</h1>
        <div className='form-container'>
            <form>
                <div>
                    <div className='heading'>Create vLEI Application</div>
                    <div class = "btn-group">
                        <a href = "#" class='btn btn-green'>1. vLEI Details</a>
                        <a href = "#" class='btn btn-default'>2. Payment Details</a>
                        <a href = "#" class='btn btn-default'>3. Confirmation</a>
                    </div>
                    <div>To request a single new vLEI, click the Checkout button on the right side of the page. On successful completion you will receive a tracking number.</div>
                </div>
                <div class="row">
                  <div class="col-create">
                    <div class="form-group">
                      <span>
                        <div class="row">
                          <div class="col-form-label">
                            <label>* LEI Identifier</label>
                          </div>
                          <div class="col-form-input">
                            <select class="select-form">
                              <option value>Select LEI Identifier</option>
                              <option value="test">506700GE1G29325QX363</option>
                            </select>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="col-checkout">
                    <div>
                      <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label">
                          <small>
                            I have read and agree to the <a href="https://lei.bloomberg.com/docs/service-customer-agreement" target="_blank">Service Customer Agreement.</a>
                            Further, I understand that I may be required to provide certified documentation confirming my authorization on behalf of the legal entity if requested by Bloomberg Finance LP.
                          </small>
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary">Checkout</button>
                    </div>
                  </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
