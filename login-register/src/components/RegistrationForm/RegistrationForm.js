import React from 'react';
export default function RegistrationForm(props) {

    const {
        values,
        onInputChange,
        onSubmit
    } = props;

  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={onSubmit}>
                <div className="form-group text-left">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Email"
                    onChange={onInputChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"
                        onChange={onInputChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}